import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image className="w-36 mx-auto mb-2" src={assets.logo} alt="logo" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image className="w-6" src={assets.mail_icon} alt="mail icon" />
          ebrutokgozb@gmail.com
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between
      border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Ebru Tokgöz Bayram. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Ebrutokgoz" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ebru-tokg%C3%B6z-417981238/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
