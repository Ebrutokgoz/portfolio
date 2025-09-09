"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
    </>
  );
}
