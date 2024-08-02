import './global.css';
import '@weyneshof/utils/global.css';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { cn } from '@weyneshof/utils';
import { bodyFont } from '@weyneshof/ui/fonts';
import { SentryUserProvider } from '@weyneshof/utils/sentryUserProvider';
import { auth } from '../server/auth';

export const metadata = {
  title: 'Weyneshof',
  description: '',
};

export default async function RootLayout(props: PropsWithChildren) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={cn(bodyFont.className)}>
        <SessionProvider session={session} refetchInterval={120}>
          <SentryUserProvider>{props.children}</SentryUserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
