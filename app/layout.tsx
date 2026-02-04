import { RootProvider } from 'fumadocs-ui/provider/next';
import '@/styles/global.css';
import { Inter } from 'next/font/google';
import { TopNav } from '@/components/layout/TopNav';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const baseUrl = 'https://lib.dogecoin.org';
const ogTitle = 'libdogecoin - Dogecoin building blocks';
const ogDescription =
  'libdogecoin documentation: a clean C library of Dogecoin building blocks. Complete implementation of Dogecoin protocols, addresses, transactions, signing, and more.';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'libdogecoin Docs',
  description: 'libdogecoin documentation: a clean C library of Dogecoin building blocks.',
  openGraph: {
    type: 'website',
    siteName: 'libdogecoin',
    title: ogTitle,
    description: ogDescription,
    url: baseUrl,
    images: [
      {
        url: '/img/social-card.png',
        width: 1200,
        height: 630,
        alt: ogTitle,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dogecoin',
    creator: '@dogecoin',
    title: ogTitle,
    description: ogDescription,
    images: ['/img/social-card.png'],
    imagesAlt: ogTitle,
  },
  icons: { icon: '/img/libdogecoin-logo-purple.png', apple: '/img/libdogecoin-logo-purple.png' },
};

export const viewport = { themeColor: '#8B5CF6' };

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
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
