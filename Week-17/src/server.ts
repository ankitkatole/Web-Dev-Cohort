import { Client } from 'pg';


const pgClient = new Client("postgresql://neondb_owner:npg_wKnN0kCmxqB6@ep-calm-glitter-a4cbl7gj-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require");


async function main() {
  pgClient.connect()
    .then(() => {
      console.log('Connected to PostgreSQL database');
    }
    )
    .catch((err) => {
      console.error('Error connecting to PostgreSQL database:', err);
    }
    )

  const result = await pgClient.query(`
    SELECT * FROM users;
`)
  console.log(result.rows)

}

main();