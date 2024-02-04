import Link from 'next/link';

const Navigation = () => {
  const navStyle =
    'm-1 rounded-sm px-3 py-1.5 transition-all duration-75 hover:bg-gray-100 font-semibold text-gray-500 hover:text-black';

  return (
    <div className="flex h-full items-center space-x-2">
      <Link className="relative" href="/dashboard">
        <div className={navStyle}>Links</div>
        <div className="absolute -bottom-3 w-full px-1.5">
          <div className="h-0.5 bg-black"></div>
        </div>
      </Link>
      <Link href="/dashboard/appearance">
        <div className={navStyle}>Appearance</div>
      </Link>
      <Link href="/dashboard/analytics">
        <div className={navStyle}>Analytics</div>
      </Link>
      <Link href="/dashboard/settings">
        <div className={navStyle}>Settings</div>
      </Link>
    </div>
  );
};

export default Navigation;
