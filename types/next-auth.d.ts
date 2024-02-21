import NextAuth, { DefaultSession } from 'next-auth';
import { User as UserSchema } from '@/db/schema';

declare module 'next-auth' {
  interface User extends UserSchema {
    id: number;
  }

  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession['user'];
  }
}
