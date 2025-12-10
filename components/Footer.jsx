import { assets } from '@/assets/assets';
import Image from 'next/image';
import { RadioIcon, ShareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/JoyelV',
      icon: RadioIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joyel-varghese-8a47501aa/',
      icon: ShareIcon,
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/JOYELv/',
      icon: RadioIcon,
    },
  ];

  const contactInfo = {
    email: 'Varghesejoyel71@gmail.com',
    phone: '+91 8921504778',
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer
      className="w-full px-6 md:px-[10%] lg:px-[15%] py-12 bg-gradient-to-t from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        {/* Logo */}
        <a href="#home" className="group relative inline-block">
          <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 text-transparent bg-clip-text transition duration-300 group-hover:scale-110 group-hover:blur-[1px]">
            JOYEL
          </span>
          <span className="absolute inset-0 animate-pulse opacity-0 group-hover:opacity-100 transition duration-300 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text pointer-events-none">
            JOYEL
          </span>
        </a>


        {/* Get in Touch Section */}
        <span className="text-xs font-Outfit uppercase tracking-wider bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 px-4 py-1.5 rounded-full mb-4 shadow-sm">
          Get in Touch
        </span>
        <h2 className="text-2xl md:text-3xl font-Outfit font-bold text-gray-900 dark:text-white mb-4">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-base font-Outfit text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
          Got a project in mind or just want to chat about code? I’m all ears (or rather, all emails and calls)! Reach out, and let’s turn your ideas into reality.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 font-Outfit text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors duration-200"
            aria-label="Email Joyel Varghese"
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="Email"
              className="w-5 h-5"
              width={20}
              height={20}
              style={{ width: "100%", height: "auto" }}
            />
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 font-Outfit text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors duration-200"
            aria-label="Call Joyel Varghese"
          >
            {contactInfo.phone}
          </a>
        </div>

        {/* Social Links */}
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {socialLinks.map((link, index) => (
            <motion.li
              key={index}
              variants={fadeInVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-Outfit text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </footer>
  );
};

export default Footer;