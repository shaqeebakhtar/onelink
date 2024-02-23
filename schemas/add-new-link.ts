import { z } from 'zod';

export const addNewLinkSchema = z.object({
  url: z
    .string({ required_error: 'URL cannot be empty' })
    .url({ message: 'The URL seems to be invalid' }),
  title: z
    .string()
    .min(2, { message: 'Title must be atleast 2 character(s)' })
    .optional(),
  layout: z.enum(['compact', 'highlight']).optional(),
});
