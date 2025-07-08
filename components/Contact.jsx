import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import * as gtag from '@/lib/gtag'; 

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
  event.preventDefault();
  setResult('Sending...');
  const formData = new FormData(event.target);
  formData.append('access_key', '9bd21b46-a012-481c-9ac1-03388daf4e47');

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? 'Form Submitted Successfully' : data.message);

    if (data.success) {
      event.target.reset();

      // ✅ Send custom GA event
      gtag.event({
        action: 'submit_contact_form',
        category: 'Contact',
        label: 'Contact Form',
        value: 1,
      });
    }

  } catch (error) {
    setResult('Something went wrong. Please try again.');
  }
};

  return (
    <motion.div
      id="contact"
      className="w-full px-[15%] py-16 scroll-mt-20 bg-gradient-to-b bg-gray-50 dark:from-gray-900 dark:to-gray-800"
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
        Connect with Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Outfit font-bold text-gray-900 dark:text-white"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit text-lg text-gray-600 dark:text-gray-300"
      >
        I'd love to hear from you! Please use the form below to reach out.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Your Name"
            required
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-200"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Your Email"
            required
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-200"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all duration-200"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="mt-6 px-10 py-3 bg-gradient-to-r from-emerald-500 to-indigo-500 text-white rounded-full font-Outfit flex items-center gap-2 mx-auto hover:from-emerald-600 hover:to-indigo-600 transition-all duration-200"
        >
          Submit Now <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.button>
        <p className={`mt-4 text-center font-Outfit ${result.includes('Successfully') ? 'text-emerald-500' : 'text-red-500'}`}>{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;