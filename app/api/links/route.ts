import { linkService } from '@/services/links';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const allLinks = await linkService.getAll();

  return NextResponse.json(allLinks);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const { url, title, layout, thumbnailUrl, favicon, description } = body;

  if (!url) {
    return NextResponse.json(
      { error: 'Missing destination url.' },
      { status: 422 }
    );
  }

  const response = await linkService.add({
    url,
    title,
    layout,
    thumbnailUrl,
    favicon,
    description,
  });

  return NextResponse.json(response);
};
