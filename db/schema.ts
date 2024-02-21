import type { AdapterAccount } from '@auth/core/adapters';
import {
  bigint,
  boolean,
  index,
  int,
  mysqlEnum,
  mysqlTable,
  primaryKey,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable(
  'user',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    username: varchar('username', { length: 16 }).unique(),
    password: varchar('password', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull(),
    emailVerified: timestamp('emailVerified', {
      mode: 'date',
      fsp: 3,
    }).defaultNow(),
    image: varchar('image', { length: 255 }),
  },
  (user) => {
    return {
      usernameIdx: index('username_idx').on(user.username),
    };
  }
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const accounts = mysqlTable(
  'account',
  {
    userId: bigint('userId', { mode: 'number', unsigned: true }).references(
      () => users.id,
      { onDelete: 'cascade' }
    ),
    type: varchar('type', { length: 255 })
      .$type<AdapterAccount['type']>()
      .notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: varchar('refresh_token', { length: 255 }),
    access_token: varchar('access_token', { length: 255 }),
    expires_at: int('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: varchar('id_token', { length: 2048 }),
    session_state: varchar('session_state', { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const links = mysqlTable('link', {
  id: serial('id').primaryKey(),
  userId: bigint('userId', { mode: 'number', unsigned: true }).references(
    () => users.id,
    { onDelete: 'cascade' }
  ),
  url: varchar('url', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }),
  layout: mysqlEnum('layout', ['compact', 'highlight']).default('compact'),
  thumbnailUrl: varchar('thumbnailUrl', { length: 255 }),
  favicon: varchar('favicon', { length: 255 }),
  description: varchar('description', { length: 255 }),
  enabled: boolean('enabled').default(true),
});

export type Link = typeof links.$inferSelect;
export type NewLink = typeof links.$inferInsert;
