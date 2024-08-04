import Link from 'next/link';
import { Button } from '@weyneshof/ui/button';
import Navigation from '../_components/Navigation';
import SignedIn from '../../_components/SignedIn';
import SignedOut from '../../_components/SignedOut';
import { Suspense } from 'react';
import { Skeleton } from '@weyneshof/ui/skeleton';
import UserAvatar from '../_components/userAvatar';

export async function TopNav() {
  return (
    <div className="bg-primary grid w-full grid-cols-3 p-2">
      <div></div>
      <Navigation />
      <div className={'flex items-center justify-end'}>
        <Suspense fallback={<Skeleton className="rounded-full" />}>
          <SignedIn>
            <UserAvatar />
          </SignedIn>
          <SignedOut>
            <Link href={'/login'}>
              <Button className="text-primary-foreground" variant={'link'}>
                login
              </Button>
            </Link>
          </SignedOut>
        </Suspense>
      </div>
    </div>
  );
}
