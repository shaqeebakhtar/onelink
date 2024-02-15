import { NewLink } from '@/db/schema';

export const addNewLink = async ({
  title,
  url,
  thumbnailUrl,
  layout,
  favicon,
  description,
}: NewLink) => {
  const res = await fetch('/api/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      url,
      thumbnailUrl,
      layout,
      favicon,
      description,
    }),
  });

  return res.json();
};

export const getAllLinks = async () => {
  const res = await fetch('/api/links');
  const links = await res.json();

  return links;
};
