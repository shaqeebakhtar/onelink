'use client';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import Navigation from './navigation';
import { useMediaQuery } from 'usehooks-ts';

const Navbar = () => {
  const destopOrTab = useMediaQuery('(min-width: 768px)');

  return (
    <header className="sticky left-0 right-0 top-0 z-20 border-b border-gray-200 bg-white px-4">
      <div className="flex h-16 items-center justify-between">
        <Link href="/dashboard">
          <Icons.logo />
        </Link>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        </div>
      </div>
      {!destopOrTab && (
        <div className="md:hidden">
          <Navigation />
        </div>
      )}
    </header>
  );
};

export default Navbar;
