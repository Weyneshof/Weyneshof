import { type PropsWithChildren } from 'react';
import { auth } from '../../server/auth/auth';

export default async function SignedOut(props: PropsWithChildren) {
  const session = await auth();
  return session ? null : <>{props.children}</>;
}
