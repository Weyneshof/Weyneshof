import { cn } from '@weyneshof/utils';
import { titleFont } from '@weyneshof/ui/fonts';
import { Separator } from '@weyneshof/ui/separator';
import Link from 'next/link';
import { LucideLogIn } from 'lucide-react';

type FooterProps = {
  //todo
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="p4 text-md bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-4xl pt-4">
        <div className="hidden flex-row flex-wrap pb-4 md:flex">
          <section className="grow">
            <h2 className={cn(titleFont.className, 'text-2xl font-bold')}>
              Speelplein Weyneshof vzw
            </h2>
            <section>
              <p>Weynesbaan 126 </p>
              <p> 2820 Rijmenam (Bonheiden)</p>
            </section>
            <br />
            <section>
              <p>
                E-mail: <a href="mailto:info@weyneshof.be">info@weyneshof.be</a>
              </p>
              <p> Ondernemingsnummer: 0410247147</p>
            </section>
          </section>
          <section className="flex max-w-sm grow flex-col">
            <h3 className={cn(titleFont.className, 'text-xl font-bold')}>
              Werking
            </h3>
            <Link href={'/todo'}>
              <span>Algemene info</span>
            </Link>
            <Link href={'/todo'}>
              <span>Busvervoer</span>
            </Link>
            <Link href={'/todo'}>
              <span>Tarieven</span>
            </Link>
            <Link href={'/todo'}>
              <span>FAQ</span>
            </Link>
          </section>
          <section className="flex max-w-sm grow flex-col">
            <h3 className={cn(titleFont.className, 'text-xl font-bold')}>
              Verhuur
            </h3>
            <Link href={'/todo'}>
              <span>De schuur</span>
            </Link>
            <Link href={'/todo'}>
              <span>De hoeve</span>
            </Link>
            <Link href={'/todo'}>
              <span>Het paviljoen</span>
            </Link>
            <Link href={'/todo'}>
              <span>Voorwaarden</span>
            </Link>
          </section>
          <section className="flex max-w-sm grow flex-col">
            <h3 className={cn(titleFont.className, 'text-xl font-bold')}>
              Info VZW
            </h3>
            <Link href={'/todo'}>
              <span>Domein</span>
            </Link>
            <Link href={'/todo'}>
              <span>Info VZW</span>
            </Link>
            <Link href={'/todo'}>
              <span>Geschiedenis</span>
            </Link>
            <Link href={'/todo'}>
              <span>Contact</span>
            </Link>
            <Link href={'/todo'}>
              <span>Privacyverklaring</span>
            </Link>
          </section>
        </div>
        <Separator className="bg-secondary-foreground hidden md:block" />
        <div className="flex flex-row py-4">
          <p>&copy; {year} - Speelplein Weyneshof vzw</p>
          <div className="grow"></div>
          <Link href={'/admin/login'} aria-label="login for admins">
            <LucideLogIn></LucideLogIn>
          </Link>
        </div>
      </div>
    </footer>
  );
}
