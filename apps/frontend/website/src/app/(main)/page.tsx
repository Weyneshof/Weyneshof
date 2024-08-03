import { House, Laugh, TreePine } from 'lucide-react';
import { Button } from '@weyneshof/ui/button';
import { Badge } from '@weyneshof/ui/badge';
import { Text } from '@weyneshof/ui/text';
import Link from 'next/link';
import Image from 'next/image';

import mushrooms from '../../../public/Weyneshof-Playground.jpg';
import Banner from '@weyneshof/ui/banner';

export default function HomePage() {
  return (
    <>
      <Banner title={'Weyneshof'} />
      <main className="container mx-auto flex flex-col gap-8">
        <section className="mt-[-60px]">
          <div className="mx-auto flex max-w-5xl flex-row flex-wrap rounded-2xl bg-white shadow-2xl md:flex-nowrap">
            <div className="flex grow flex-col items-center gap-4 p-4">
              <Laugh className="text-secondary" size={50}></Laugh>
              <Text variant="heading" color="secondary" size="3xl">
                Speelplein
              </Text>
              <Text align="center">
                Elke eerste 6 weken van de zomervakantie zetten wij de deuren
                open voor kinderen van 4 tot 14 jaar.
              </Text>
              <Button variant="secondary" size="lg-rounded">
                Lees meer
              </Button>
            </div>
            <div className="flex grow flex-col items-center gap-4 p-4">
              <TreePine className="text-secondary" size={50} />
              <Text variant="heading" color="secondary" size="3xl">
                Domein
              </Text>
              <Text align="center">
                Ontdek ons bosrijke domein van 7,5 ha groot met heel wat wandel-
                en speelmogelijkheden.
              </Text>
              <Button variant="secondary" size="lg-rounded">
                Lees meer
              </Button>
            </div>
            <div className="flex grow flex-col items-center gap-4 p-4">
              <House className="text-secondary" size={50} />
              <Text variant="heading" color="secondary" size="3xl">
                Verhuur
              </Text>
              <Text align="center">
                Wanneer er geen speelpleinwerking is, verhuren wij onze lokalen
                aan verenigingen en particulieren.
              </Text>
              <Button variant="secondary" size="lg-rounded">
                Lees meer
              </Button>
            </div>
          </div>
        </section>
        <section className="container flex flex-col gap-4">
          <div>
            <Badge>NIEUWS</Badge>
          </div>
          <Text variant="heading" size="2xl" color="secondary">
            T-shirts en rugzakken verkrijgbaar!
          </Text>
          <Text>
            We hebben geluisterd naar jullie vraag en zijn blij dat we onze
            eigen{' '}
            <Link href="/todo">
              {
                // TODO: Add link
              }
              <span className="text-primary">webshop</span>
            </Link>{' '}
            met t-shirts en rugzakken mogen voorstellen!
          </Text>
          <Text>
            Elke aankoop in onze webshop ondersteunt direct onze vzw, waardoor
            we nog meer kinderen een onvergetelijke zomer kunnen bezorgen.{' '}
            <Link href="/todo">
              {
                // TODO: Add link to webshop
              }
              <span className="text-primary">Bezoek onze nieuwe webshop</span>
            </Link>{' '}
            en laat je kinderen stralen met een vleugje Weyneshof!
          </Text>
        </section>
        <section className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="m-auto hidden md:block">
            <Image
              src={mushrooms}
              className="max-w-md rounded-md"
              alt="image of mushrooms"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-center gap-4">
            <Text variant="heading" size="2xl" color="secondary">
              Weyneshof
            </Text>
            <Text>
              Wanneer er geen speelpleinwerking is, stellen wij ons domein open
              voor buren, spelende kinderen, wandelaars, bezoekers, geocachers,
              enz. De kosten voor het onderhoud en de verfraaiing van ons domein
              dragen wij volledig zelf. Bezoekt u ons domein graag? Bent u onze
              vzw genegen? Dan kan u ons helpen.
            </Text>
            <div>
              <Button variant="secondary" size="lg-rounded">
                Steun ons
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
