'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { type PropsWithChildren } from 'react';

type Props = {
  recaptchaSiteKey: string;
  defer?: boolean;
};

export default function CaptchaProvider(props: PropsWithChildren<Props>) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={props.recaptchaSiteKey}
      scriptProps={{
        async: false,
        defer: props.defer ?? true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {props.children}
    </GoogleReCaptchaProvider>
  );
}
