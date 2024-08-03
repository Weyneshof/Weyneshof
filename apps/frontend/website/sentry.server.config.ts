// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { env } from './src/env/client';

Sentry.init({
  dsn: 'https://a6e51d068899a272c2b813a54aa14f67@o4507256284971008.ingest.de.sentry.io/4507500690735184',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.serverEnv.NODE_ENV === 'development',

  enabled: !env.NEXT_PUBLIC_DISABLE_SENTRY,
});
