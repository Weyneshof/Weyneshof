import { redirect, RedirectType } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@weyneshof/ui/button';
import adminSignInAction from '../../../../server/auth/actions/admin-google-signin';
import { auth } from '../../../../server/auth';
import { subtitleFont, titleFont } from '@weyneshof/ui/fonts';
import Passkey from '../../_components/Passkey';

export default async function loginPage() {
  const session = await auth();

  if (session) {
    redirect('/administratie', RedirectType.replace);
  }

  async function login() {
    'use server';
    await adminSignInAction({ redirect: '/passkey' });
  }

  return (
    <>
      <Passkey />
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1
            className={
              titleFont.className +
              ' text-secondary text-2xl font-semibold tracking-tight'
            }
          >
            Login voor medewerkers
          </h1>
          <p
            className={
              subtitleFont.className + ' text-muted-foreground text-sm'
            }
          >
            dit is enkel voor medewerkers,{' '}
            <Link
              href="/login"
              className="hover:text-primary underline underline-offset-4"
            >
              ben je geen medewerker? klik hier!
            </Link>
          </p>
        </div>
        <form action={login}>
          <Button type="submit" className={'w-full'} variant={'secondary'}>
            Login with Google
          </Button>
        </form>
        <p className="text-muted-foreground px-8 text-center text-sm">
          door te clicken op inloggen ga je accoord met onze{' '}
          <Link
            href="/todo"
            className="hover:text-primary underline underline-offset-4"
          >
            Voorwaarden en Privacybeleid
          </Link>
          .
        </p>
      </div>
    </>
  );
}
