import { env } from '../../env/server';
import * as schema from './schema';
export { schema };
import { createPool, VercelPool } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: VercelPool | undefined;
};

const conn =
  globalForDb.conn ??
  createPool({
    connectionString: env.POSTGRES_URL,
  });
if (env.NODE_ENV !== 'production') globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
