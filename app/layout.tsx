import './globals.css';

import type { Metadata } from 'next';

import { fonts } from '@/fonts';
import Hydrate from '@/Hydrate';
import Navigation from '@/Navigation';
import { Providers } from '@/Provider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.inter.variable}>
      <body>
        <Providers>
          <Hydrate>
            <Navigation />
            {children}
          </Hydrate>
        </Providers>
      </body>
    </html>
  );
}
