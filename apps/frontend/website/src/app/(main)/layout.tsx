import { type PropsWithChildren } from 'react';
import { TopNav } from './_components/TopNav';
import { Footer } from './_components/Footer';

export default function ShellLayout(props: PropsWithChildren) {
  return (
    <div className="bg-background flex min-h-dvh w-full flex-col">
      <TopNav />
      <div className="flex-grow">{props.children}</div>
      <Footer />
    </div>
  );
}
