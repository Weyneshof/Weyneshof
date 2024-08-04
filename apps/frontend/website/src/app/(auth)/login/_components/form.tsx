'use client';

import type { z } from 'zod';
import { signInWithEmailFormSchema } from './formSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import signInWithEmail from '../../../../server/auth/actions/user-email-signin';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@weyneshof/ui/form';
import { Input } from '@weyneshof/ui/input';
import { Button } from '@weyneshof/ui/button';
import { useForm } from 'react-hook-form';

export default function LoginForm(props: { url?: string }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof signInWithEmailFormSchema>>({
    resolver: zodResolver(signInWithEmailFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const action: () => Promise<void> = form.handleSubmit(async (data) => {
    if (!executeRecaptcha) {
      console.error('Recaptcha not loaded');
      return;
    }
    const recaptcha = await executeRecaptcha('user/signin/email');
    if (!recaptcha) {
      console.error('Recaptcha failed');
      return;
    }
    await signInWithEmail({
      redirect: props.url,
      email: data.email,
      captcha: recaptcha,
    });
  });

  return (
    <Form {...form}>
      <form action={action}>
        <FormField
          name={'email'}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="john.doe@gmail.com"
                  type="email"
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />

              <FormDescription>
                we sturen je een e-mail om in te loggen.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" className={'w-full'} variant={'secondary'}>
          Login
        </Button>
      </form>
    </Form>
  );
}
