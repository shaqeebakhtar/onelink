import { db } from '@/db';
import { links } from '@/db/schema';

export const linkQuery = {
  getAll: () => db.select().from(links),
};
