import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2';
import * as schema from './schema';

const connection = mysql.createConnection({
  uri: process.env.DATABASE_URL,
});

export const db = drizzle(connection, { schema, mode: 'default' });
