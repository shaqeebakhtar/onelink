import { NewUser } from '@/db/schema';

export const register = async ({
  name,
  username,
  email,
  password,
}: NewUser) => {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      username,
      email,
      password,
    }),
  });

  return res.json();
};
