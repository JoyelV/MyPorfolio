import { assets } from '@/assets/assets';
import Image from 'next/image';
import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline';

const Footer = ({ isDarkMode }) => {
  return (
    <div className="w-full px-[15%] py-12 bg-[#F9FAFB] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-24 sm:w-28 md:w-36 rounded-sm p-1"
            priority
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
          />
        <a
          href="mailto:Varghesejoyel71@gmail.com"
          className="flex items-center gap-2 justify-center font-Outfit text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors duration-200"
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Email" className="w-6" />
          Varghesejoyel71@gmail.com
        </a>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
        <ul className="flex items-center gap-8">
          {[
            { name: 'GitHub', href: 'https://github.com/JoyelV', icon: CodeBracketIcon },
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joyel-varghese-8a47501aa/', icon: LinkIcon },
            { name: 'Leetcode', href: 'https://leetcode.com/u/JOYELv/', icon: CodeBracketIcon }, 
          ].map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                className="flex items-center gap-2 font-Outfit text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors duration-200"
              >
                <link.icon className="w-5 h-5" /> {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;