import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "My Projects", href: "#my-projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Me", href: "#contact-me" },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "/Joyel_Varghese_Resume_Full Stack Developer.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Joyel_Varghese_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full px-6 lg:px-12 xl:px-[10%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-[#F9FAFB] dark:bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <a href="#home" class="group relative inline-block">
          <span class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 text-transparent bg-clip-text transition duration-300 group-hover:scale-110 group-hover:blur-[1px]">
            JOYEL
          </span>
          <span class="absolute inset-0 animate-pulse opacity-0 group-hover:opacity-100 transition duration-300 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text pointer-events-none">
            JOYEL
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-10 py-2.5 shadow-md transition-all duration-300">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-Outfit text-gray-700 dark:text-gray-200 hover:text-emerald-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>
          <button
            onClick={handleDownloadResume}
            className="hidden lg:flex items-center gap-2 px-8 py-2.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-200 font-Outfit"
          >
            Download Resume
          </button>
          <button
            className="md:hidden p-2"
            onClick={() =>
              (sideMenuRef.current.style.transform = "translateX(0)")
            }
          >
            <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 w-64 h-screen bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-transform duration-500 translate-x-64"
        >
          <button
            className="absolute right-6 top-6"
            onClick={() =>
              (sideMenuRef.current.style.transform = "translateX(16rem)")
            }
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-Outfit hover:text-emerald-500 transition-colors duration-200"
                onClick={() =>
                  (sideMenuRef.current.style.transform = "translateX(16rem)")
                }
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleDownloadResume}
              className="font-Outfit hover:text-emerald-500 transition-colors duration-200"
            >
              Download Resume
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
