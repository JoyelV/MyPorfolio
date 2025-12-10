import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { LinkIcon } from '@heroicons/react/24/outline';
import { useRef, useEffect, useState } from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      content:
        "Joyel is an exceptional web developer with a keen eye for detail. He built a website for our ship chandling management that was outstanding, delivering a seamless user experience. He's a pleasure to collaborate with!",
      name: 'Shanu Shajahan',
      role: 'Owner, Bon Marine Asia',
      linkedin: 'https://www.linkedin.com/in/shanushajahan1/',
    },
    {
      content:
        "Joyel's ability to translate complex requirements into clean, efficient code is impressive. His contributions to our project were invaluable, and he consistently exceeded expectations.",
      name: 'Sibin TR',
      role: 'Founder, QRBridge',
      linkedin: 'https://www.linkedin.com/in/sibinyou/',
    },
  ];

  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth / 2); 
    }
  }, []);

  // Animation settings
  const carouselAnimation = {
    x: [0, -carouselWidth],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40, 
        ease: 'linear',
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 md:py-20 text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center"
      >
        <span className="text-xs font-Outfit uppercase tracking-wider bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 px-4 py-1.5 rounded-full mb-4 shadow-sm">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-Outfit font-bold text-gray-900 dark:text-white mb-4">
          Testimonials
        </h2>
        <p className="text-base md:text-lg font-Outfit text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Nice things people have said about me
        </p>

        <div className="w-full overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-6 px-4"
            animate={carouselAnimation}
            whileHover={{ animationPlayState: 'paused' }} 
          >
            {extendedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`} 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-between p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 text-left min-w-[280px] md:min-w-[320px] max-w-[360px]"
              >
                <div className="flex-1">
                  <Image
                    src={assets.user_image || '/assets/user_image.png'}
                    alt="Quote"
                    className="w-8 h-8 mb-4 opacity-50"
                    width={32}
                    height={32}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p className="text-sm md:text-base font-Outfit text-gray-700 dark:text-gray-200 mb-4">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center justify-between w-full mt-4">
                  <div>
                    <h4 className="text-base font-Outfit font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-Outfit text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label={`LinkedIn profile of ${testimonial.name}`}
                  >
                    <LinkIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;