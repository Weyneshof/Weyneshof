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
    RECAPTCHA_SECRET_KEY: z.string(),
    RECAPTCHA_SITE_KEY: z.string(),
    RECAPTCHA_DISABLE: z
      .string()
      .default('false')
      .transform((v) => v === 'true' || v === '1'),
    AUTH_DEBUG: z
      .string()
      .default('false')
      .transform((v) => v === 'true' || v === '1'),
    SENDGRID_API_KEY: z.string(),
    AUTH_SENDER_EMAIL: z.string(),
    AUTH_SENDGRID_TEMPLATE_ID: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    POSTGRES_URL: process.env.POSTGRES_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    AUTH_DEBUG: process.env.AUTH_DEBUG,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    AUTH_SENDER_EMAIL: process.env.AUTH_SENDER_EMAIL,
    AUTH_SENDGRID_TEMPLATE_ID: process.env.AUTH_SENDGRID_TEMPLATE_ID,
    RECAPTCHA_DISABLE: process.env.RECAPTCHA_DISABLE,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
