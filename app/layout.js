import { Kaisei_Decol } from 'next/font/google';
import './globals.css';

const kaiseiDecol = Kaisei_Decol({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://ouakemi.com'),
  title: '王朱海の招福占い',
  description: '王朱海の招福占い。運命を読み解き、福を招きます。',
  applicationName: '王朱海の招福占い',
  authors: [{ name: '王朱海' }],
  keywords: ['占い', '開運', '王朱海', '招福', '人生相談'],
  openGraph: {
    title: '王朱海の招福占い',
    description: '王朱海の招福占い。運命を読み解き、福を招きます。',
    url: 'https://ouakemi.com',
    siteName: '王朱海の招福占い',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '王朱海の招福占い',
    description: '王朱海の招福占い。運命を読み解き、福を招きます。',
    images: ['/ogp.png'],
    creator: '@ouakemi',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${kaiseiDecol.className} text-[#403B47] antialiased bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
