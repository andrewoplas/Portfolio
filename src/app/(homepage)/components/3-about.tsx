"use client";

import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const workExperiences = [
  {
    company: "Algert",
    role: "Lead Developer",
    year: "22~",
    className: "md:col-start-[16] md:col-span-13",
    link: "https://algert.co/",
  },
  {
    company: "CodeChum",
    role: "Full Stack Developer",
    year: "21–22",
    className: "md:col-start-[11] md:col-span-6 row-start-2",
    link: "https://www.codechum.com/",
  },
  {
    company: "Rococo",
    role: "Full Stack Developer",
    year: "19–21",
    className: "md:col-span-11 row-start-3",
    link: "https://rococoglobaltechnologies.com/",
  },
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 0.65], ["30%", "5%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mx-auto max-w-section px-4 py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="relative grid grid-cols-1 rounded-card bg-primary md:grid-cols-12">
        <div className="z-[1] col-span-8 self-center px-6 py-8 text-background sm:px-8 md:py-8 md:pl-8 lg:col-span-7 lg:py-14 lg:pl-14">
          <h2 className="text-h6 font-bold">Hello there! I'm Andrew</h2>
          <h3 className="my-4 text-h4 font-bold sm:text-h3 md:my-0">
            <span className="text-secondary">Andrew</span>...who
            <span className="hidden sm:inline">oo</span>?!
          </h3>
          <p className="text-body-large">
            In 2014, I entered a web development contest without knowing any
            coding, driven by my curiosity and lots of late-night studying. Even
            though I finished last, it didn't stop me; it was just the
            beginning. Now, I've used that experience to grow, and today I'm
            making creative software for everyone from exciting new startups to
            big companies.
            <br />
            <br />
            Right now, I'm focused on making user interfaces that are easy to
            use and look great for our clients at Algert. I love mixing design
            with coding—creating things that not only look good but also work
            really well. When I'm not working, I like to check out new tech
            tools, which keeps my coding skills sharp and up to date.
          </p>
        </div>

        <div className="bottom-0 left-auto right-0 top-auto -mt-12 block aspect-[709/736] w-full overflow-hidden rounded-ee-card md:absolute md:mt-0 md:w-[55%] lg:w-[44%]">
          <motion.div
            className="h-full w-full"
            style={{ translateY: translateY }}
          >
            <Image
              src="/images/homepage/headshot-andrew-oplas.png"
              alt="headshot of Andrew Oplas"
              width={951}
              height={913}
              className="relative h-full w-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mx-auto max-w-[30rem] text-center text-h4 font-bold leading-none text-t-primary md:mx-0 md:text-left">
          What’s my work experience?
        </h2>

        <div className="mt-8 text-center md:mt-14 md:text-left">
          <Button href="#" target="_blank" className="group" variant="outline">
            <div className="flex items-center gap-4">
              <span>VIEW FULL RESUME</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:-translate-y-1"
              >
                <path
                  d="M3.75 16.25L16.25 3.75M16.25 3.75L6.875 3.75M16.25 3.75V13.125"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Button>
        </div>

        <section
          className="grid-cols-30 mt-14 grid gap-y-3 md:-mt-[10%]"
          id="experience"
        >
          {workExperiences.map((workExperience) => (
            <div
              key={workExperience.company}
              className={cn(
                "relative flex items-center rounded-card bg-primary p-6 text-background transition-all duration-300  hover:drop-shadow-2xl hover:shadow-secondary hover:-translate-y-1 hover:saturate-200 md:px-7 md:py-8",
                workExperience.className,
              )}
            >
              <Link
                href={workExperience.link}
                target="_blank"
                className="absolute left-0 top-0 h-full w-full"
              ></Link>
              <div className="flex-1">
                <h3 className="font-body text-2xl font-bold">
                  {workExperience.company}
                </h3>
                <p className="font-body text-secondary">
                  {workExperience.role}
                </p>
              </div>
              <span className="font-heading text-h6 font-bold">
                {workExperience.year}
              </span>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
