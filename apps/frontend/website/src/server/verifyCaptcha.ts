import { env } from '../env/server';

const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

type RecaptchaResponse = {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
};

export async function verifyCaptcha(
  token: string,
  action: string,
  score = 0.5,
) {
  const verification = await fetch<RecaptchaResponse>(recaptchaVerifyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  if (!verification.ok) {
    console.error(
      'Recaptcha failed',
      verification.status,
      verification.statusText,
    );
    throw new Error('Recaptcha failed');
  }

  const verificationData = await verification.json();
  if (!verificationData.success) {
    console.error('Recaptcha failed', verificationData);
    throw new Error('Recaptcha failed ' + verificationData['error-codes']);
  }

  if (verificationData.score < score) {
    console.error('Recaptcha failed', verificationData);
    throw new Error('Recaptcha failed ' + verificationData.score);
  }

  if (verificationData.action !== action) {
    console.error('Recaptcha failed', verificationData);
    throw new Error('Recaptcha failed ' + verificationData.action);
  }
}
