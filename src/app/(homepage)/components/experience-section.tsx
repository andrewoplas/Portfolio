"use client";

import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    position: "Lead Developer",
    company: "Algert",
    logo: "/images/algert.png",
    link: "https://algert.co/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript", "WordPress", "PHP", "Elementor", "HTML & SCSS"],
    date: "Jan 2022 - Present",
  },
  {
    position: "Frontend Developer",
    company: "EJJY",
    logo: "/images/ejjy.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript"],
    date: "Jan 2021 - Present",
  },
  {
    position: "Full Stack Developer",
    company: "CodeChum",
    logo: "/images/codechum.png",
    link: "https://www.codechum.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript"],
    date: "May 2021 - Jan 2022",
  },
  {
    position: "Full Stack Developer",
    company: "Rococo",
    logo: "/images/rococo.png",
    link: "https://rococoglobaltechnologies.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tools: ["JavaScript"],
    date: "May 2019 - June 2021",
  },
];

export const ExperienceSection = () => (
  <section className="mx-auto w-full max-w-[1200px] px-6 py-40" id="experience">
    <h2 className="text-textPrimary text-center text-h1 font-bold leading-none">
      Experience
    </h2>

    <ol className="group/list mt-24 space-y-20">
      {experiences.map((experience) => (
        <motion.div
          key={experience.company}
          variants={{
            hidden: { opacity: 0, translateY: 50 },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <li className="group/link group relative grid grid-cols-12 gap-x-4 transition-all duration-200 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-6 -inset-y-6 z-0 hidden rounded-[2rem] transition-all duration-200 motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>

            <span className="col-span-3 text-h6 font-semibold">
              {experience.date}
            </span>

            <div className="col-span-9">
              <h3 className="font-body">
                <div>
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-textPrimary flex items-center text-h5 font-bold leading-none gap-x-2"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

                    <span className="text-appRust brightness-50">{experience.position}</span>
                    <span>·</span>
                    <span>
                      {experience.company}
                      {experience.link && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </a>
                </div>
              </h3>

              <p className="mt-2 text-lg">{experience.description}</p>

              <div className="mt-3 flex gap-2 transition-all">
                {experience.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border-textSecondary text-textSecondary group-hover:bg-textPrimary group-hover:border-textPrimary block rounded-full border-2 px-3 py-1 text-xs leading-none transition-all group-hover:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </li>
        </motion.div>
      ))}
    </ol>
  </section>
);
