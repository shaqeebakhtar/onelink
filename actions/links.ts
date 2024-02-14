'use server';

export const getLinkMetaData = async (url: string) => {
  const requestUrl = `${process.env.LINK_META_API_URL}?url=${url}&api_key=${process.env.LINK_META_API_KEY}`;

  let metaData;

  try {
    metaData = await fetch(requestUrl).then((res) => res.json());
  } catch (error) {
    return null;
  }

  return metaData;
};
