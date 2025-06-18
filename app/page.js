'use client';
import { useEffect, useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Work from '../components/Work';
import Image from 'next/image';
import { assets } from '../assets/assets';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="pt-15 md:pt-20">
        <section id="home">
          <Header isDarkMode={isDarkMode} />
        </section>
        <section id="about-me">
          <About isDarkMode={isDarkMode} />
        </section>
        <section id="skills">
          <Skills isDarkMode={isDarkMode} />
        </section>
        <section id="my-projects">
          <Work isDarkMode={isDarkMode} />
        </section>
        <section id="testimonials">
          <Testimonials isDarkMode={isDarkMode} />
        </section>
        <section id="contact-me">
          <Contact isDarkMode={isDarkMode} />
        </section>
        <Footer isDarkMode={isDarkMode} />
      </main>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Scroll Up"
            className="w-5 h-5 rotate-[-90deg]"
          />
        </button>
      )}
    </>
  );
}