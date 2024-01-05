import { Inter, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const fonts = {
  montserrat,
  inter
};
