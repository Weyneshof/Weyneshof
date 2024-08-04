'use server';
import { z } from 'zod';
import { signIn } from '../auth';
const schema = z.object({
  redirect: z.string().optional(),
});

export default async function adminGoogleSignin(input: z.infer<typeof schema>) {
  const { redirect } = schema.parse(input);

  return signIn(
    'google', // todo make this a constant
    {
      //redirect: !!redirect,
      //redirectTo: redirect,
    },
  );
}
