import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]
      dark:hidden"
      >
        <Image className="w-full" src={assets.header_bg_color} alt="header color" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
      >
        <a href="#top">
          <Image
            className="cursor-pointer w-28 mr-14"
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
          ></Image>
        </a>

        <ul
          className={`items-center hidden gap-6 px-12 py-3 rounded-full md:flex lg:gap-8
          ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/20 dark:bg-transparent"}`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#works">
              My Works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image className="w-6" src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme switch" />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10
          py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            href="#contact"
          >
            Contact
            <Image
              className="w-3"
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow icon"
            ></Image>
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image className="w-6" src={isDarkMode ? assets.menu_white : assets.menu_black} alt="theme switch" />
          </button>
        </div>

        {/* mobile */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
          top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
          dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              className="w-5 cursor-pointer"
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close button"
            />
          </div>
          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#works" onClick={closeMenu}>
              My Works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
