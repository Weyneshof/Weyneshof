import { defineConfig } from 'drizzle-kit';
import { env } from './src/env/server';

import * as schema from './src/server/db/schema';

const schemaStr = __dirname + '/src/server/db/schema.ts';

console.log(env.VERCEL_GIT_COMMIT_REF);

export default defineConfig({
  dialect: 'postgresql', // "mysql" | "sqlite" | "postgresql"
  schema: schemaStr,
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: [schema.nameCreator('*')],
  out: './drizzle',
});
