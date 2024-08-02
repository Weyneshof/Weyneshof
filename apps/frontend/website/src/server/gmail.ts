import { gmail } from '@googleapis/gmail';
import { baseAuthClient } from './googleAuth';
import { env } from '../env/server';
import { GoogleAuth } from 'google-auth-library';

const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/gmail.send'],
  authClient: baseAuthClient!,
  clientOptions: {
    subject: env.GMAIL_USER,
  },
});

export const gmailClient = gmail({
  auth: auth!,
  version: 'v1',
});

export async function sendEmail(to: string, subject: string, message: string) {
  const emailLines = [
    `From: ${env.GMAIL_USER}`,
    `To: ${to}`,
    'Content-type: text/html;charset=iso-8859-1',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    `${message}`,
  ];

  const email = emailLines.join('\r\n').trim();
  const base64Email = Buffer.from(email).toString('base64');

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
