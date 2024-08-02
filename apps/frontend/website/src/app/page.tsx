import { sendEmail } from '../server/gmail';
import { Button } from '@weyneshof/ui/button';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <form
        action={async () => {
          'use server';
          await sendEmail('lisa@scheers.tech', 'test', 'message');
        }}
      >
        <Button type="submit">test</Button>
      </form>
    </div>
  );
}
