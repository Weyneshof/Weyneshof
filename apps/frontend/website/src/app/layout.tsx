import './global.css';
import '@weyneshof/utils/global.css';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { cn } from '@weyneshof/utils';
import { bodyFont } from '@weyneshof/ui/fonts';
import { SentryUserProvider } from '@weyneshof/utils/sentryUserProvider';

export const metadata = {
  title: 'Weyneshof',
  description: '',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(bodyFont.className)}>
        <SessionProvider>
          <SentryUserProvider>{props.children}</SentryUserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
