import { gmail } from '@googleapis/gmail';
import { getImpersonationClient } from './googleAuth';
import { env } from '../env/server';

export const gmailClient = gmail({
  auth: getImpersonationClient('lisa@weyneshof.be', [
    'https://www.googleapis.com/auth/gmail.send',
  ]),
  version: 'v1',
});

export async function sendEmail(to: string, subject: string, message: string) {
  const emailLines = [
    `From: ${env.GMAIL_USER}`,
    'To: lisa@scheers.tech',
    'Content-type: text/html;charset=iso-8859-1',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    `This is a test email from env ${process.env.NODE_ENV}`,
  ];

  const email = emailLines.join('\r\n').trim();
  const base64Email = Buffer.from(email).toString('base64');

  if (env.NODE_ENV === 'development') {
    console.warn('NODE_TLS_REJECT_UNAUTHORIZED is set to 0 in development');
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  }
  const response = await gmailClient.users.messages.send(
    {
      userId: 'me',
      requestBody: {
        raw: base64Email,
      },
    },
    {},
  );

  return response.data;
}
