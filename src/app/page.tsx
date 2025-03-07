"use client";

import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 max-w-[1200px] mx-auto mt-10 md:mt-20 relative mb-[50px] md:mb-[100px] px-4 sm:px-6 md:px-8">
      <section id="work" className="flex flex-col items-center gap-3 md:gap-5 md:mb-10">
        <div className="flex flex-col text-[#0083C4]">
          <h1 className="acorn text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold text-center leading-tight md:leading-22">
            Hi! I&apos;m Jose.
          </h1>
          <h1 className="acorn text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold text-center leading-tight md:leading-22">
            A Frontend Developer.
          </h1>
        </div>
        <p className="roboto text-lg sm:text-xl md:text-2xl text-center text-[#0082C4]">
          I create experiences, not just applications.
        </p>
      </section>
      <HeroSection />
      <motion.img
        src="/assets/react_icon.svg"
        alt="React Icon"
        className="w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 absolute top-[50px] -left-2 sm:left-6"
        animate={{ rotate: 360 }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.img
        src="/assets/javascript_icon.svg"
        alt="Javascript Icon"
        className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 absolute -right-0 sm:right-0"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <section id="projects" className="w-full">
        <Projects />
      </section>
    </main>
  );
}
