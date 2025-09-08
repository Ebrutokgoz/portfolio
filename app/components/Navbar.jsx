import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50"
      >
        <a href="#top">
          <Image className="cursor-pointer w-28 mr-14" src={assets.logo} alt="logo"></Image>
        </a>

        <ul className="items-center hidden gap-6 px-12 py-3 rounded-full md:flex lg:gap-8">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#works">My Works</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div>
          <a
            className="hidden lg:flex items-center gap-3 px-10
          py-2.5 border border-gray-500 rounded-full ml-4"
            href="#contact"
          >
            Contact
            <Image className="w-3" src={assets.arrow_icon} alt="arrow icon"></Image>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
