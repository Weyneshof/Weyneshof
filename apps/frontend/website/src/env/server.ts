import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    VERCEL_URL: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    POSTGRES_URL: z.string(),
    AUTH_SECRET: z.string(),
    // optional because if NODE_ENV is development, we use service account credentials
    GCP_PROJECT_ID: z.string().optional(),
    GCP_PROJECT_NUMBER: z.string().optional(),
    GCP_SERVICE_ACCOUNT_EMAIL: z.string().optional(),
    GCP_WORKLOAD_IDENTITY_POOL_ID: z.string().optional(),
    GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID: z.string().optional(),
    GCP_SERVICE_ACCOUNT_FILE: z.string().optional(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    POSTGRES_URL: process.env.POSTGRES_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    GCP_PROJECT_ID: process.env.GCP_PROJECT_ID,
    GCP_PROJECT_NUMBER: process.env.GCP_PROJECT_NUMBER,
    GCP_SERVICE_ACCOUNT_EMAIL: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
    GCP_WORKLOAD_IDENTITY_POOL_ID: process.env.GCP_WORKLOAD_IDENTITY_POOL_ID,
    GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID:
      process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID,
    GCP_SERVICE_ACCOUNT_FILE: process.env.GCP_SERVICE_ACCOUNT_FILE,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
