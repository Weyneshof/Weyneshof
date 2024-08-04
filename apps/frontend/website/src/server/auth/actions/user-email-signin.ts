'use server';
import { z } from 'zod';
import { emailProviderName, signIn } from '../auth';
import { env } from '../../../env/server';

import { verifyCaptcha } from '../../verifyCaptcha';

const schema = z.object({
  email: z.string().email(),
  redirect: z.string().optional(),
  captcha: z.string(),
});

export default async function signInWithEmail(input: z.infer<typeof schema>) {
  const { email, captcha, redirect } = schema.parse(input);

  if (env.AUTH_DEBUG) console.log('signInWithEmail', { email, redirect });

  await verifyCaptcha(captcha, 'user/signin/email');

  return signIn(emailProviderName, {
    email,
    redirect: !!redirect,
    redirectTo: redirect,
  });
}
