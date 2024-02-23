import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be atleast of 2 characters' }),
  username: z.string(),
  email: z.string().email({ message: `Email doesn't seems to be valid` }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be atleast of 8 characters' }),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
