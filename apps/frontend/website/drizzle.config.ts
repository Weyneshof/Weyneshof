import { defineConfig } from 'drizzle-kit';
import { env } from './src/env/server';

const schema = __dirname + '/src/server/db/schema.ts';

export default defineConfig({
  dialect: 'postgresql', // "mysql" | "sqlite" | "postgresql"
  schema: schema,
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: [`w_web_${env.NODE_ENV.substring(0, 3)}_*`],
  out: './drizzle',
});
