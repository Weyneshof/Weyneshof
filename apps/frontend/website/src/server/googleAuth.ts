import { getVercelOidcToken } from '@vercel/functions/oidc';
import {
  ExternalAccountClient,
  AuthClient,
  GoogleAuth,
} from 'google-auth-library';
import { env } from '../env/server';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import * as process from 'node:process';

export const baseAuthClient = ExternalAccountClient.fromJSON({
  type: 'external_account',
  audience: `//iam.googleapis.com/projects/${env.GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${env.GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
  token_url: 'https://sts.googleapis.com/v1/token',
  service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${env.GCP_SERVICE_ACCOUNT_EMAIL}:generateAccessToken`,
  subject_token_supplier: {
    // Use the Vercel OIDC token as the subject token
    getSubjectToken:
      env.NODE_ENV === 'development'
        ? async () => process.env.VERCEL_OICD_TOKEN ?? ''
        : getVercelOidcToken,
  },
  scopes: ['https://www.googleapis.com/auth/gmail.send'], // Ensure this scope is included
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

// impersonate real user for sending email using external account
