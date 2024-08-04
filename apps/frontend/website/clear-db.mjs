import { sql, createPool } from '@vercel/postgres';

const env = process.env;

const client = createPool({
  connectionString: env.POSTGRES_URL,
});

export function nameCreator(name) {
  const prefix = env.VERCEL_GIT_COMMIT_REF?.replace('-', '_').replace(
    /\//g,
    '_',
  );

  return `prev_${prefix}_${name}`;
}

async function main() {
  let allTables =
    await sql`SELECT * FROM information_schema.tables WHERE table_schema = 'public';`;

  allTables = allTables.rows.map((table) => table.table_name);

  // filter out tables that are not in the schema
  const tables = allTables.filter((table) => {
    return table.startsWith(nameCreator(''));
  });

  for (const table of tables) {
    // drop if exists
    try {
      await client.query(`DROP TABLE IF EXISTS ${table} CASCADE;`);
      console.log(`dropped ${table}`);
    } catch (err) {
      console.error(err);
    }
  }

  console.log(tables);
  await client.end();
}

main();
