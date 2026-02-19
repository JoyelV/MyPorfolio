import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[15%] py-16 scroll-mt-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg font-Ovo text-gray-600 dark:text-gray-300"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Outfit font-bold text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-12 my-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-80 rounded-2xl shadow-lg overflow-hidden"
        >
          <Image src={assets.profile_img} alt="Profile" className="w-full" sizes="(max-width: 768px) 320px, 384px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-8 max-w-2xl font-Outfit text-lg text-gray-600 dark:text-gray-300">
            I worked as a Project Engineer specializing in estimation at WALCO MIDDLE EAST WLL for five years before transitioning into Web Development. In 2024, I began my journey in this field and have since gained hands-on experience by building real-world applications, including a full-featured e-commerce website and an e-learning platform using the MERN stack.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05, ring: 2 }}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 cursor-pointer hover:shadow-lg hover:ring-emerald-500 transition-all duration-300 bg-white dark:bg-gray-800"
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-8 mb-4" />
                <h3 className="font-Outfit font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;