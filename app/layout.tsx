import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OneLink',
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
            'min-h-screen bg-gray-50 text-foreground font-sans antialiased',
            inter.className
          )}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
