import { db } from '@/db';
import { users } from '@/db/schema';
import { hash } from '@/lib/hash';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, username, password } = body;

  if (!name || !email || !username || !password) {
    return NextResponse.json(
      { error: 'all fields are required' },
      { status: 400 }
    );
  }

  const emailExists = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (emailExists) {
    return NextResponse.json(
      { error: 'email already in use, try logging in' },
      {
        status: 400,
      }
    );
  }

  const usernameExists = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  if (usernameExists) {
    return NextResponse.json(
      { error: 'username already in use, try logging in' },
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await hash(password);

  let user = null;
  try {
    user = await db.insert(users).values({
      name,
      email,
      username,
      password: hashedPassword,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ user }, { status: 200 });
}
