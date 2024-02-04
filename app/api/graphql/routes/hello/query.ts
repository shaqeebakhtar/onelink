import { users } from '@/db/schema';
import { db } from '@/db';

export const helloQuery = {
  hello: () => db.select().from(users),
};
