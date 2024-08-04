import Banner from '@weyneshof/ui/banner';
import Text from '@weyneshof/ui/text';
import Link from 'next/link';
import { Button } from '@weyneshof/ui/button';

export default function Page() {
  return (
    <>
      <Banner title="Inschrijven" image="/WeyHeaderBackgroundReg.jpg" />
      <main className="container flex max-w-4xl flex-col gap-16 py-4">
        <Text variant="heading" size="4xl" color="primary" align="center">
          Voor u inschrijft...
        </Text>
        <div className="grid grid-cols-1 content-center justify-center gap-8 md:grid-cols-[1fr_10fr]">
          <Text
            className="m-auto"
            variant="heading"
            align="center"
            size="2xl"
            color="secondary"
          >
            1
          </Text>
          <Text>
            Er zijn 6 weken speelpleinwerking, d.w.z.{' '}
            <b>alle weekdagen van 1 juli t.e.m. 9 augustus.</b> De
            speelpleinwerking gaat door op het domein Weyneshof te Rijmenam.
          </Text>
          <Text
            className="m-auto"
            variant="heading"
            align="center"
            size="2xl"
            color="secondary"
          >
            2
          </Text>
          <Text>
            Kinderen kunnen deelnemen{' '}
            <b> vanaf geboortejaar 2010 tot en met geboortejaar 2020</b> (maar
            moeten wel bij deelname de leeftijd van 4 jaar bereikt hebben!).
            Vanaf geboortejaar 2009 kan je bij ons als{' '}
            <Link href="/todo">
              <Text variant="span" color="primary">
                vrijwilliger
              </Text>
            </Link>{' '}
            aan de slag!
          </Text>
          <Text
            className="m-auto"
            variant="heading"
            align="center"
            size="2xl"
            color="secondary"
          >
            3
          </Text>
          <Text>
            3 Kinderen kunnen weer <b>per dag</b> ingeschreven worden. Een dag
            voor één kind kost € 13. Er is een éénmalige administratieve kost
            van € 5 per kind. Het volledige bedrag voor de deelname dient{' '}
            <b>binnen de 10 dagen na inschrijving betaald te worden.</b> Indien
            wij de betaling niet of laattijdig ontvangen, behouden wij ons het
            recht om de inschrijving te annuleren. Een inschrijving annuleren
            kan tot en met de dag van deelname.
          </Text>
          <Text
            className="m-auto"
            variant="heading"
            align="center"
            size="2xl"
            color="secondary"
          >
            4
          </Text>
          <Text>
            Er wordt <b>geen volledige warme maaltijd</b> aangeboden: kinderen
            nemen zelf hun boterhammen en hervulbare drinkbus mee, wij bieden
            <b>verse soep, een dessert en een vieruurtje</b> aan.
          </Text>
          <Text
            className="m-auto"
            variant="heading"
            align="center"
            size="2xl"
            color="secondary"
          >
            5
          </Text>
          <Text>
            Als u uw kind reeds vorig jaar hebt ingeschreven, moet u dit jaar
            een nieuwe inschrijvingsfiche aanmaken. Als u uw kind reeds dit jaar
            hebt ingeschreven, maar u wil de inschrijving aanpassen, kan u geen
            nieuwe inschrijvingsfiche aanmaken (u kan uw inschrijving aanpassen
            via de link in uw bevestigingsmail).
          </Text>
        </div>
        <div className="flex flex-row justify-center">
          <Button size="lg-rounded">Inschrijven</Button>
        </div>
      </main>
    </>
  );
}
