'use client';
import { signIn } from 'next-auth/webauthn';

import { Button } from '@weyneshof/ui/button';

export default function Passkey() {
  async function login() {
    await signIn('passkey', {
      action: 'register',
    });
  }

  return (
    <Button
      onClick={login}
      type="button"
      variant={'default'}
      size={'default-rounded'}
    >
      register passkey
    </Button>
  );
}
