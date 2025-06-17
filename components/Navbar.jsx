import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full px-6 lg:px-12 xl:px-[10%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? 'bg-[#F9FAFB] dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-24 sm:w-28 md:w-36 rounded-sm p-1"
            priority
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 144px"
          />
        </a>
        <ul className="hidden md:flex items-center gap-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-10 py-2.5 shadow-md transition-all duration-300">
          {['Home', 'About me', 'My Works', 'Contact me'].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-Outfit text-gray-700 dark:text-gray-200 hover:text-emerald-500 transition-colors duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            {isDarkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-700" />}
          </button>
          <a href="#contact" className="hidden lg:flex items-center gap-2 px-8 py-2.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-200 font-Outfit">
            Contact
          </a>
          <button className="md:hidden p-2" onClick={() => sideMenuRef.current.style.transform = 'translateX(0)'}>
            <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 w-64 h-screen bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-transform duration-500">
          <button className="absolute right-6 top-6" onClick={() => sideMenuRef.current.style.transform = 'translateX(16rem)'}>
            <XMarkIcon className="w-6 h-6" />
          </button>
          {['Home', 'About me', 'My Works', 'Contact me'].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-Outfit hover:text-emerald-500 transition-colors duration-200" onClick={() => sideMenuRef.current.style.transform = 'translateX(16rem)'}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;