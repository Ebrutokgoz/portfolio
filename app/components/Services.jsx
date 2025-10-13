import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Build responsive and user-centric web applications using JavaScript, HTML, and CSS and modern JavaScript
        frameworks such as Vue.js, React and React Native. RESTful API integration, version control, and work within
        Agile teams. Clean code, component-based design, and enhance user experience.
      </motion.p>
      {/* tailwind.config düzeltilince grid-cols-auto kullanılacak */}
      <motion.div
        className="grid grid-cols-4 gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          // tailwind.config düzeltilince hover:shadow-black ve hover:bg-lightHover çalışacak
          <motion.div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12
          hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
          dark:hover:bg-darkHover dark:hover:shadow-white"
            whileHover={{ scale: 1.05 }}
          >
            <Image className="w-10" src={icon} alt="service image" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a className="flex items-center gap-2 text-sm mt-5" href={link}>
              Read more <Image className="w-4" src={assets.right_arrow} alt="right arrow" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
