import { Icons } from '@/components/icons';
import Link from 'next/link';
import Navigation from './navigation';

const Navbar = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-20 border-b border-gray-200 bg-white px-4">
      <div className="w-full">
        <div className="flex h-16 items-center justify-between">
          <Link href="/dashboard" className="px-3">
            <Icons.logo />
          </Link>
          <Navigation />
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
