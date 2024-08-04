import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DISABLE_SENTRY: z
      .string()
      .default('false')
      .transform((value) => value === 'true' || value === '1'),
  },

  runtimeEnv: {
    NEXT_PUBLIC_DISABLE_SENTRY: process.env.NEXT_PUBLIC_DISABLE_SENTRY,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
