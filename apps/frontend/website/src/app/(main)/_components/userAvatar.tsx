'use client';
import { useSession, signOut } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@weyneshof/ui/avatar';
import md5 from 'md5';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@weyneshof/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { revalidatePath } from 'next/cache';

export default function UserAvatar() {
  const { data: session } = useSession();

  function image() {
    if (!session || !session.user) return '';
    if (session.user.image) {
      return session.user.image;
    }
    if (session.user.image) return session.user.image;
    if (!session.user.email) return '';
    return `https://www.gravatar.com/avatar/${md5(session.user.email)}?d=identicon`;
  }

  function fallnackInitials() {
    if (!session || !session.user) return '';
    if (!session.user.name) return '';
    return session.user.name
      .split(' ')
      .map((name) => name[0])
      .join('');
  }

  // <Avatar>
  //  <AvatarImage src={image()} />
  //  <AvatarFallback>{fallnackInitials()}</AvatarFallback>
  // </Avatar>

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={image()} />
          <AvatarFallback>{fallnackInitials()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut().then();
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
