import { Kaisei_Decol } from 'next/font/google';
import './globals.css';

const kaiseiDecol = Kaisei_Decol({
  subsets: ['latin'], // 日本語フォントでも latin でOK
  weight: ['400', '700'], // 太さを選択（必要なだけ）
  display: 'swap',
});

export const metadata = {
  title: '王朱海の招福占い',
  description: '王朱海の招福占い',
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
