import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[15%] py-16 scroll-mt-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-lg font-Ovo text-gray-600 dark:text-gray-300"
      >
        My Projects
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Outfit font-bold text-gray-900 dark:text-white"
      >
        My Latest Works
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit text-lg text-gray-600 dark:text-gray-300"
      >
        Explore my collection of MERN Stack projects showcasing my expertise in
        web development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {workData.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group"
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              width={300}
              height={256}
              className="w-full h-64 object-cover"
              style={{ width: "auto" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-md p-4 flex items-center justify-between group-hover:shadow-xl transition-all duration-300">
              <div>
                <h2 className="font-Outfit font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-200">
                {assets.qrBridge && <Image src={assets.qrBridge} alt="Send" className="w-5" />}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/JoyelV"
        className="w-max mx-auto flex items-center gap-2 px-10 py-3 bg-emerald-500 text-white rounded-full font-Outfit hover:bg-emerald-600 transition-colors duration-200"
      >
        Show More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
