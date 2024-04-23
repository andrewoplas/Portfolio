"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => (
  <section id="hello" className="w-full bg-primary">
    <div className="relative z-[1] -mb-[30%] md:-mb-[12%]">
      <h1 className="relative px-8 pt-32 text-center text-h3 font-bold leading-none text-background sm:text-h1 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            easings: ["easeIn", "easeOut"],
            duration: 0.5,
          }}
        >
          Hi. I’m <span className="text-secondary">Andrew.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            easings: ["easeIn", "easeOut"],
            duration: 0.5,
            delay: 0.25,
          }}
        >
          A <span className="text-secondary">Developer.</span>
        </motion.div>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          delay: 1,
        }}
        className="mx-auto mt-6 max-w-[400px] px-8 text-center text-body-large text-background sm:max-w-[550px]"
      >
        Turning Coffee into Code: Crafting Fun, Functional, and Fabulous
        Software!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          delay: 1,
        }}
        className="mt-6 text-center md:mt-10"
      >
        <Button href="#projects">View Projects</Button>
      </motion.div>
    </div>

    <Image
      src="/images/homepage/hero-illustration.svg"
      width={1440}
      height={579}
      alt=""
      className="h-[400px] w-screen object-cover lg:h-auto lg:w-screen"
      priority
    />
  </section>
);
