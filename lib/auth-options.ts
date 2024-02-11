import GoogleProvider from 'next-auth/providers/google';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/db';
import { AuthOptions } from 'next-auth';
import { mysqlTable } from 'drizzle-orm/mysql-core';
import { Adapter } from 'next-auth/adapters';

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db, mysqlTable) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
};
