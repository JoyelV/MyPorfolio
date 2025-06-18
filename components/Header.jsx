import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="text-center px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full opacity-50 blur-xl"></div>
          <Image src={assets.profile_img} alt="Profile" className="relative rounded-full w-40 md:w-48" priority sizes="(max-width: 768px) 160px, 192px" />
        </motion.div>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 text-xl md:text-2xl font-Outfit text-gray-700 dark:text-gray-200"
        >
          Hi! I'm Joyel Varghese <Image src={assets.hand_icon} alt="Hand" className="w-6" />
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-Outfit font-bold text-gray-900 dark:text-white"
        >
          MERN Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-3xl mx-auto text-lg font-Outfit text-gray-600 dark:text-gray-300"
        >
          I am a Full Stack developer(Nodejs & MongoDB) with a focus on creating(an occasionally designing) exceptional digital experiences that are fast, accessible ,visually appealing and responsive. I have over a 1.5 years of hands-on experience building projects like an e-commerce website and an e-learning platform.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 bg-emerald-500 text-white rounded-full font-Outfit hover:bg-emerald-600 transition-colors duration-200 flex items-center gap-2"
          >
            Contact Me <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/Joyel_Varghese_Resume_Full Stack Developer.pdf"
            download
            className="px-10 py-3 border border-emerald-500 text-emerald-500 rounded-full font-Outfit hover:bg-emerald-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
          >
            My Resume <Image src={assets.download_icon} alt="Download" className="w-4" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;