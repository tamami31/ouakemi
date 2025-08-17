import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="grid gap-8">
        <div className="grid gap-6">
          <h1 className="text-5xl font-bold">王朱海の招福占い</h1>
          <h2 className="text-2xl font-bold pl-1">現在ページを作成中です</h2>
        </div>

        <div className="grid gap-3 pl-2">
          <h3 className="text-xl font-bold mb-2">SNSで更新中</h3>
          <a
            href="https://x.com/ouakemi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#6f5298] hover:font-bold transition-all duration-300"
          >
            <FaXTwitter className="text-xl" />
            <div className="font-normal">@ouakemi</div>
          </a>
          <a
            href="https://www.instagram.com/ouakemi_fortune"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#6f5298] hover:font-bold transition-all duration-300"
          >
            <FaInstagram className="text-xl" />
            <div className="font-normal">@ouakemi_fortune</div>
          </a>
        </div>
      </div>
    </div>
  );
}
