'use client';
import { setUser } from '@sentry/nextjs';
import { useSession } from 'next-auth/react';
import { PropsWithChildren, useEffect } from 'react';
export function SentryUserProvider(props: PropsWithChildren) {
  const session = useSession();

  // if session changes, update the user in Sentry
  useEffect(() => {
    if (session?.data?.user?.id)
      setUser({
        id: session?.data?.user?.id,
        email: session?.data?.user?.email ?? undefined,
      });
    else if (session.status === 'unauthenticated') setUser(null);
  }, [session]);

  return props.children;
}
