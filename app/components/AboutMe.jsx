import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const AboutMe = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image className="w-full rounded-3xl" src={assets.user_image} alt="photo" />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            Web developer with solid hands-on experience in building responsive and user-centric web applications using
            JavaScript, HTML, and CSS. Actively improving skills in modern JavaScript frameworks such as Vue.js, React
            and React Native through real-world projects and continuous learning. Proficient in RESTful API integration,
            version control, and working within Agile teams. Focused on clean code, component-based design, and
            enhancing user experience.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
              hover:bg-amber-200 hover:-translate-y-1 duration-500 hover:shadow-black
              dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image className="w-7 mt-3" src={isDarkMode ? iconDark : icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center
              w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg
              cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image className="w-5 sm:w-7" src={tool} alt="Tool" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
