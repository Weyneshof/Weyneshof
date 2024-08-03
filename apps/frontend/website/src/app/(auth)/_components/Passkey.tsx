'use client';
import { signIn } from 'next-auth/webauthn';
import { useEffect } from 'react';

export default function Passkey() {
  useEffect(() => {
    signIn('passkey', {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return <> </>;
}
