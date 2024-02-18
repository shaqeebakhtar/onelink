import React from 'react';
import SocialsList from './_components/socials-list';
import LinksList from './_components/links-list';
import { cn } from '@/lib/utils';

type PublicProfileProps = {};

const PublicProfile = (props: PublicProfileProps) => {
  const structure = 'grid';

  return (
    <div
      className={cn(
        'max-w-3xl h-screen mx-auto p-4 space-y-8 my-10',
        structure === 'grid' && 'max-w-5xl'
      )}
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="w-24 h-24 rounded-full bg-gray-500 mx-auto"></div>
        <p className="text-lg font-semibold">@username</p>
      </div>
      <SocialsList />
      <LinksList />
    </div>
  );
};

export default PublicProfile;
