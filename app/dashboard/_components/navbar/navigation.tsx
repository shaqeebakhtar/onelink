import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navigation = () => {
  const navStyle =
    'm-1 rounded-sm px-2 md:px-3 py-1.5 transition-all duration-75 hover:bg-gray-100 font-medium text-gray-500 hover:text-black text-sm md:text-base';

  return (
    <nav className="flex h-full items-center space-x-1">
      <Link className="relative" href="/dashboard">
        <div className={navStyle}>Links</div>
        <div className="absolute bottom-0 md:-bottom-3 w-full px-1.5">
          <div className="h-0.5 bg-black"></div>
        </div>
      </Link>
      <Link className="relative" href="/dashboard/appearance">
        <div className={navStyle}>Appearance</div>
      </Link>
      <Link className="relative" href="/dashboard/analytics">
        <div className={navStyle}>Analytics</div>
      </Link>
      <Link className="relative" href="/dashboard/settings">
        <div className={cn(navStyle)}>Settings</div>
      </Link>
    </nav>
  );
};

export default Navigation;
