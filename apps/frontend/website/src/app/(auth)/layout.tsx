import { type PropsWithChildren } from 'react';
import Logo from '@weyneshof/ui/logo';
import CaptchaProvider from '@weyneshof/utils/captcha';

import { env } from '../../env/server';

export default function AuthLayout(props: PropsWithChildren) {
  return (
    <>
      <div className="relative h-screen flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="bg-muted relative hidden h-full flex-col text-white lg:flex dark:border-r">
          <div className="bg-primary absolute inset-0" />
          <div className="relative z-20 flex items-start justify-center">
            <Logo className={'max-w-xs'}></Logo>
          </div>
        </div>
        <div className="px-1">
          <div
            className={
              'relative z-20 flex items-start justify-center lg:hidden'
            }
          >
            <Logo className={'max-w-xs'}></Logo>
          </div>
          <CaptchaProvider recaptchaSiteKey={env.RECAPTCHA_SITE_KEY}>
            {props.children}
          </CaptchaProvider>
        </div>
      </div>
    </>
  );
}
