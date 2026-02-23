import { RootProvider } from 'fumadocs-ui/provider/next';
import '@/styles/global.css';
import { Comic_Neue } from 'next/font/google';
import { TopNav } from '@/components/layout/TopNav';

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const baseUrl = 'https://lib.dogecoin.org';
const title = 'libdogecoin - Dogecoin building blocks';
const description =
  'libdogecoin documentation: a clean C library of Dogecoin building blocks. Complete implementation of Dogecoin protocols, addresses, transactions, signing, and more.';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  openGraph: {
    type: 'website',
    siteName: 'libdogecoin',
    title,
    description,
    url: baseUrl,
    images: [
      {
        url: '/img/social-card.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dogecoin',
    creator: '@dogecoin',
    title,
    description,
    images: ['/img/social-card.png'],
    imagesAlt: title,
  },
  icons: { icon: '/img/libdogecoin-logo-purple.png', apple: '/img/libdogecoin-logo-purple.png' },
};

export const viewport = { themeColor: '#8B5CF6' };

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={comicNeue.className} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{ enabled: true, options: { type: 'static' } }}
          theme={{ defaultTheme: 'dark' }}
        >
          <TopNav />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
