import { gmail } from '@googleapis/gmail';
import { getImpersonationClient } from './googleAuth';

export const gmailClient = gmail({
  auth: getImpersonationClient('lisa@weyneshof.be', [
    'https://www.googleapis.com/auth/gmail.send',
  ]),
  version: 'v1',
});

export async function sendEmail(to: string, subject: string, message: string) {
  const emailLines = [
    'From: lisa@weyneshof.be',
    'To: lisa@scheers.tech',
    'Content-type: text/html;charset=iso-8859-1',
    'MIME-Version: 1.0',
    'Subject: Test Subject',
    '',
    'This is a test email',
  ];

  const email = emailLines.join('\r\n').trim();
  const base64Email = Buffer.from(email).toString('base64');

  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
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
