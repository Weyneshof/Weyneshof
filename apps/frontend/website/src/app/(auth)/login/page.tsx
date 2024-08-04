import { redirect, RedirectType } from 'next/navigation';
import LoginForm from './_components/form';
import Link from 'next/link';
import { subtitleFont, titleFont } from '@weyneshof/ui/fonts';
import { auth } from '../../../server/auth';
import { cn } from '@weyneshof/utils';
import Passkey from '../_components/Passkey';

export default async function loginPage(props: {
  searchParams?: { url?: string };
}) {
  const session = await auth();

  if (session) {
    redirect('/', RedirectType.replace);
  }
  return (
    <>
      <Passkey />
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1
            className={cn(
              titleFont.className,
              'text-secondary text-2xl font-semibold tracking-tight',
            )}
          >
            Het plezier begint hier
          </h1>
          <p
            className={cn(
              subtitleFont.className,
              'text-muted-foreground text-sm',
            )}
          >
            voer je e-mailadres in om in te loggen
          </p>
        </div>
        <LoginForm url={props.searchParams?.url} />
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
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link
            href="/admin/login"
            className="hover:text-primary underline underline-offset-4"
          >
            Ben je een medewerker? Klik hier om in te loggen
          </Link>
        </p>
      </div>
    </>
  );
}
