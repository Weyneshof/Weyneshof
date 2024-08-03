import { EmailConfig, EmailUserConfig } from '@auth/core/providers';
import { Theme } from '@auth/core/types';

import { Client } from '@sendgrid/client';
import sgMail from '@sendgrid/mail';
import { env } from '../../env/server';

sgMail.setClient(new Client());
sgMail.setApiKey(env.SENDGRID_API_KEY);

type sendVerificationRequestInput = {
  identifier: string;
  url: string;
  expires: Date;
  provider: EmailConfig;
  token: string;
  theme: Theme;
  request: Request;
};

type MailConfig = EmailUserConfig;

export function Mail(config: MailConfig): EmailConfig {
  return {
    id: config.id || 'email',
    name: config.name || 'Email',
    type: 'email',
    from: config.from || 'NextAuth <noreply@example.com>',
    maxAge: config.maxAge || 60 * 60 * 24 * 30,
    options: config,
    sendVerificationRequest: async (input: sendVerificationRequestInput) => {
      // todo configure mailer gmail or sendgrid
      const resp = await sgMail.send({
        templateId: env.AUTH_SENDGRID_TEMPLATE_ID,
        from: input.provider.from,
        to: input.identifier,
        dynamicTemplateData: {
          url: input.url,
          expires: input.expires,
        },
      });
      console.log('sendVerificationRequest', { resp });
    },
  };
}
