import { Icons } from '@/components/icons';
import Link from 'next/link';
import React from 'react';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-white">
      <header>
        <div className="container py-4 px-4 md:px-8">
          <Link href="/">
            <Icons.logo />
          </Link>
        </div>
      </header>
      <main className="grid place-items-center h-[calc(100vh-64px)]">
        <div className="max-w-sm w-full space-y-6 px-4">{children}</div>
      </main>
    </div>
  );
};

export default AuthLayout;
