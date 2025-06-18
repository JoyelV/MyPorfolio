import { motion } from 'framer-motion';
import Image from 'next/image';
import { toolsData } from '@/assets/assets';

const Skills = () => {
  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center"
      >
        <span className="text-xs font-Outfit uppercase tracking-wider bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 px-4 py-1.5 rounded-full mb-4 shadow-sm">
          My Skills
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-Outfit font-bold text-gray-900 dark:text-white mb-8">
          Tools & Technologies I Excel In
        </h2>
        <p className="text-base md:text-lg font-Outfit text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          A collection of skills and tools I’ve mastered to build fast, responsive, and visually appealing web applications.
        </p>

        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mt-8 px-4 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {toolsData.map((tool, index) => (
            <motion.li
              key={index}
              variants={gridItemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 dark:from-emerald-600/20 dark:to-indigo-600/20 rounded-lg shadow-inner">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-sm md:text-base font-Outfit text-gray-700 dark:text-gray-200">
                {tool.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Skills;