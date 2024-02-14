import { db } from '@/db';
import { type NewLink, links } from '@/db/schema';

class LinksService {
  async add(newLink: NewLink) {
    return await db.insert(links).values(newLink);
  }

  async getAll() {
    return await db.select().from(links);
  }
}

export const linkService = new LinksService();
