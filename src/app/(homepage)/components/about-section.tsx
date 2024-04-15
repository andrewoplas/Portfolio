"use client";

import { UnsplashImages } from "@/components/unsplash-images";
import { UnsplashImage } from "@/lib/types";
import { useEffect, useLayoutEffect, useState } from "react";
import { images } from "../data/images";
import { delay, motion } from "framer-motion";
import Image from "next/image";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 1,
      pathLength: { type: "spring", duration: 2 },
      opacity: { duration: 0.01 },
    },
  },
};

export const AboutSection = () => {
  const [shuffledImages, setShuffledImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    setShuffledImages(
      images
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0, 4),
    );
  }, []);

  return (
    <section
      className="mx-auto mt-40 w-full max-w-[1200px] px-6 pb-20 pt-40"
      id="about"
    >
      <div className="grid grid-cols-12 items-center gap-x-20">
        <div className="col-span-8">
          <h2 className="text-textPrimary mb-8 text-6xl font-bold leading-[1.1]">
            Driven by the magic of turning{" "}
            <span className="relative">
              ideas into reality
              <motion.svg
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "all" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 360 55"
                width="360"
                height="55"
                preserveAspectRatio="xMidYMid meet"
                className="text-appRust absolute -bottom-8 left-0 w-full saturate-150"
              >
                <defs>
                  <clipPath id="__lottie_element_8">
                    <rect width="360" height="55" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_8)">
                  <g transform="matrix(1,0,0,1,13.5,23.5)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <motion.path
                        variants={draw}
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="4"
                        stroke="currentColor"
                        strokeOpacity="1"
                        strokeWidth="8"
                        d=" M0,7.998000144958496 C145.71299743652344,-8.329000473022461 280.47198486328125,4.888999938964844 331,8"
                      ></motion.path>
                    </g>
                  </g>
                </g>
              </motion.svg>
            </span>{" "}
            through code.
          </h2>

          <div>
            <p className="mb-6 text-xl leading-normal">
              In 2014, I entered a web development contest without knowing any
              coding, driven by my curiosity and lots of late-night studying.
              Even though I finished last, it didn&apos;t stop me; it was just
              the beginning. Now, I&apos;ve used that experience to grow, and
              today I&apos;m making creative software for everyone from exciting
              new startups to big companies.
            </p>

            <p className="text-xl leading-normal">
              Right now, I&apos;m focused on making user interfaces that are
              easy to use and look great for our clients at Algert. I love
              mixing design with coding—creating things that not only look good
              but also work really well. When I&apos;m not working, I like to
              check out new tech tools, which keeps my coding skills sharp and
              up to date.
            </p>
          </div>
        </div>

        <div className="col-span-4">
          <Image
            src="/images/andrew-oplas.png"
            alt="Image of andrew oplas"
            className="bg-appRust h-auto w-full rounded-t-full px-4 pt-8"
            width={500}
            height={500}
          />
          <div className="bg-textPrimary w-full rounded-b-lg px-2 py-4">
            <p className="text-center text-lg font-bold text-white">
              Andrew Oplas
            </p>
            <p className="text-center text-white/60">Cebu City, Philippines</p>
          </div>

          <div className="mt-4">
            <UnsplashImages images={shuffledImages} />
          </div>
        </div>
      </div>
    </section>
  );
};
