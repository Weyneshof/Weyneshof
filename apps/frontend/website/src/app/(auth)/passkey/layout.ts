import { PropsWithChildren } from 'react';
import { auth } from '../../../server/auth/auth';
import { redirect } from 'next/navigation';

export default async function Layout(props: PropsWithChildren) {
  const session = await auth();
  if (!session || !session.user) {
    redirect('/login');
  }

  return props.children;
}
