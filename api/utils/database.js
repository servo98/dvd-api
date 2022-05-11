import dotenv from 'dotenv';

import knex from 'knex';

dotenv.config();

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

export default knex({
  client: 'pg',
  connection,
});
