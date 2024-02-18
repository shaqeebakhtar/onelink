import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LinksListProps = {};

type Structure = 'default' | 'grid';

const LinksList = (props: LinksListProps) => {
  const layout = 'hightlight';
  const structure: Structure = 'default';

  return (
    <ul
      className={cn(
        'grid gap-4'
        // structure === 'grid' &&
        // 'grid-cols-2 lg:grid-cols-3'
      )}
    >
      <li className="w-full rounded relative overflow-hidden">
        <Link target="_blank" href={'/'}>
          <div className="w-full">
            <Image
              src={
                'https://ugc.production.linktr.ee/0db321d4-4235-4370-a1f9-4567f081ce69_56bb34cd-c1ce-4b79-b6df-e52c844ba41c-znscfmbm3mzwu2zben8q.png?io=true&size=thumbnail-feature-v1_0'
              }
              alt="thumbnail"
              width={0}
              height={0}
              sizes="100%"
              className="object-cover w-full"
            />
          </div>
          <div className="absolute bottom-0 w-full px-3 py-5 lg:py-3 bg-black/20 backdrop-blur-lg">
            <p className="font-bold leading-5 text-white truncate">
              Schema Validation with Zod and Express.js
            </p>
          </div>
        </Link>
      </li>
      <li className="w-full border-2 p-1 rounded">
        <Link
          target="_blank"
          href={'/'}
          className="flex items-center justify-between gap-2"
        >
          <div className="w-12 aspect-square rounded overflow-hidden">
            <Image
              src={
                'https://ugc.production.linktr.ee/0db321d4-4235-4370-a1f9-4567f081ce69_56bb34cd-c1ce-4b79-b6df-e52c844ba41c-znscfmbm3mzwu2zben8q.png?io=true&size=thumbnail-feature-v1_0'
              }
              alt="thumbnail"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold text-center leading-5">
              Schema Validation with Zod and Express.js Schema Validation with
              Schema Validation with Zod and Express.js Schema
            </p>
          </div>
        </Link>
      </li>
      <li className="w-full border-2 p-1 rounded">
        <Link
          target="_blank"
          href={'/'}
          className="flex items-center justify-between gap-2"
        >
          <div className="w-12 aspect-square rounded overflow-hidden">
            <Image
              src={
                'https://ugc.production.linktr.ee/0db321d4-4235-4370-a1f9-4567f081ce69_56bb34cd-c1ce-4b79-b6df-e52c844ba41c-znscfmbm3mzwu2zben8q.png?io=true&size=thumbnail-feature-v1_0'
              }
              alt="thumbnail"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold text-center leading-5">
              Schema Validation with Zod and Express.js Schema Validation with
              Schema Validation with Zod and Express.js Schema
            </p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default LinksList;
