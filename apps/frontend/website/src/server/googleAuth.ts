import { getVercelOidcToken } from '@vercel/functions/oidc';
import {
  ExternalAccountClient,
  AuthClient,
  GoogleAuth,
  OAuth2Client,
  JWT,
  Impersonated,
} from 'google-auth-library';
import { env } from '../env/server';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { readFileSync } from 'fs';

export const baseAuthClient = ExternalAccountClient.fromJSON({
  type: 'external_account',
  audience: `//iam.googleapis.com/projects/${env.GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${env.GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
  token_url: 'https://sts.googleapis.com/v1/token',
  service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${env.GCP_SERVICE_ACCOUNT_EMAIL}:generateAccessToken`,
  subject_token_supplier: {
    // Use the Vercel OIDC token as the subject token
    getSubjectToken: getVercelOidcToken,
  },
});

export function getClient(): AuthClient | GoogleAuth<JSONClient> {
  if (env.NODE_ENV === 'development') {
    // use service account credentials in development
    return new GoogleAuth({
      keyFile: env.GCP_SERVICE_ACCOUNT_FILE,
      scopes: ['https://www.googleapis.com/auth/gmail.send'],
    });
  }

  if (!baseAuthClient) {
    throw new Error('Failed to create Google auth client');
  }

  return baseAuthClient;
}

export function getImpersonationClient(
  subject: string,
  scopes: string[],
  delegates?: string,
): OAuth2Client {
  if (env.NODE_ENV === 'development') {
    if (env.GCP_SERVICE_ACCOUNT_FILE === undefined)
      throw new Error(
        'GCP_SERVICE_ACCOUNT_FILE is not defined this should only ever happen in development if no service account file is provided',
      );
    const jsonServiceAccount = readFileSync(
      env.GCP_SERVICE_ACCOUNT_FILE,
      'utf-8',
    );
    const serviceAccount = JSON.parse(jsonServiceAccount);

    return new JWT({
      subject,
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes,
    });
  }

  return new Impersonated({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    sourceClient: baseAuthClient!,
    targetPrincipal: subject,
    delegates: [],
    targetScopes: scopes,
  });
}
