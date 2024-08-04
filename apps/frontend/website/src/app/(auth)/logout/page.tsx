import { signOut } from '../../../server/auth';
import { Button } from '@weyneshof/ui/button';

export default function LogoutPage() {
  return (
    <main>
      <div className="row flex justify-around">
        <form
          action={async () => {
            'use server';
            await signOut({
              redirect: true,
              redirectTo: '/',
            });
          }}
        >
          <Button type="submit">Logout</Button>
        </form>
      </div>
    </main>
  );
}
