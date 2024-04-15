"use client";

import { showVariants } from "@/lib/animation";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section
    id="hello"
    className="relative flex flex-col items-center justify-center py-40 lg:min-h-[100dvh] lg:py-56"
  >
    <h1 className="text-textPrimary relative text-center text-h1 font-extrabold leading-none">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 1 }}
        className="absolute -right-14 -top-10 h-14 w-14"
      >
        <motion.img
          src="/images/star-1.svg"
          alt=""
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.25, rotate: 25 }}
          whileTap={{ scale: 1.5, rotate: 360 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          easings: ["easeIn", "easeOut"],
          duration: 0.5,
        }}
      >
        Hi. I&apos;m Andrew.
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
        A Developer.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 1 }}
        className="absolute -bottom-10 -left-14 h-14 w-14"
      >
        <motion.img
          src="/images/star-3.svg"
          alt=""
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.25, rotate: -25 }}
          whileTap={{ scale: 1.5, rotate: 360 }}
        />
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
      className="mt-8 text-center text-body"
    >
      I build pixel-perfect, engaging, and accessible digital experiences.
    </motion.p>

    <div className="mt-16 text-center">
      <motion.a
        href="/"
        className="border-textPrimary hover:bg-textPrimary mx-auto inline-block rounded-full border-2 px-6 py-4 leading-none [transition:padding_0.35s] hover:px-8 hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          delay: 1,
        }}
      >
        Say Hello{" "}
        <motion.span
          className="ml-1 inline-block"
          variants={{
            normal: { rotate: 0 },
            active: { rotate: 25 },
          }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        >
          👋
        </motion.span>
      </motion.a>
    </div>
  </section>
);
