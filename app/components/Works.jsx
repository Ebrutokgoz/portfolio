import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Works = ({ isDarkMode }) => {
  return (
    <motion.div
      id="works"
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
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Latest Works
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
        className="grid grid-cols-4 my-10 gap-5 dark:text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.map((project, index) => (
          <motion.div
            className="aspect-square bg-no-repeat
          bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5
            left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
            duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div
                className="border rounded-full border-black w-9
              aspect-square flex items-center justify-center
              shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
              >
                <Image className="w-5" src={assets.send_icon} alt="send icon" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        className="w-max flex items-center justify-center
      gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
      py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
      dark:text-white dark:border-white dark:hover:bg-darkHover"
        href=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Show more
        <Image
          className="w-4"
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="right arrow"
        />
      </motion.a>
    </motion.div>
  );
};

export default Works;
