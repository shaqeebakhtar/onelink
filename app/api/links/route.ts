import { linkService } from '@/services/links';
import { addNewLinkSchema } from '@/validators/add-new-link';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const allLinks = await linkService.getAll();

  return NextResponse.json(allLinks);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const validation = addNewLinkSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues },
      { status: 400 }
    );
  }

  const { url, title, layout, thumbnailUrl } = validation.data;

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
  });

  return NextResponse.json(response);
};
