import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Passkey from 'next-auth/providers/passkey';

import { DrizzleAdapter } from '@auth/drizzle-adapter';

import { env } from '../../env/server';

import { db, schema } from '../db';
import { Mail } from './mail';

export const emailProviderName = 'email';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent',
          response_type: 'code',
        },
      },
    }),
    Mail({
      id: emailProviderName,
      from: env.AUTH_SENDER_EMAIL,
    }),
    Passkey,
  ],

  secret: env.AUTH_SECRET,
  adapter: DrizzleAdapter(db, {
    accountsTable: schema.accounts,
    sessionsTable: schema.sessions,
    usersTable: schema.users,
    authenticatorsTable: schema.authenticators,
    verificationTokensTable: schema.verificationTokens,
  }),
  experimental: {
    enableWebAuthn: true,
  },

  debug: env.AUTH_DEBUG,
});