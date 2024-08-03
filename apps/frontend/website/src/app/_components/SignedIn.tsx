import { auth } from '../../server/auth/auth';
import React from 'react';

export default async function SignedIn(
  props: React.PropsWithChildren,
): Promise<React.JSX.Element | null> {
  const session = await auth();
  return session ? <>{props.children}</> : null;
}
