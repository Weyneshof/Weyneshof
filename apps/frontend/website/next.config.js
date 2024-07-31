//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
};

/**
 * @param {import('next').NextConfig} n
 */
function withSentry(n) {
  return withSentryConfig(n, {
    org: 'weyneshof-x0',
    project: 'website',
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: false,
    tunnelRoute: '/s',
  });
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withSentry,
];

module.exports = composePlugins(...plugins)(nextConfig);
