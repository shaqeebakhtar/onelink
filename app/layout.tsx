import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Providers from './providers';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Onelink',
  description:
    'Create a personalized landing page with all your important links that you want to share with your audience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(
            inter.className,
            'min-h-screen bg-gray-50 text-foreground'
          )}
        >
          {children}
          <Toaster richColors closeButton />
        </body>
      </Providers>
    </html>
  );
}
