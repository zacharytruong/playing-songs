import './globals.css';

import { ColorModeScript } from '@chakra-ui/react';
import type { Metadata } from 'next';

import Hydrate from '@/Hydrate';
import Navigation from '@/Navigation';
import { Providers } from '@/Provider';
import theme from '@/theme';

export const metadata: Metadata = {
  title: 'Play Songs',
  description: 'Sing along to your favorite songs',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
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
