"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    content:
      "Andrew is a friendly and professional developer that did exactly what the job description asked for + suggested his own input to make the finished project better. Great code structure, beautiful responsiveness. Will absolutely hire again for future projects.",
    name: "W. Staels",
    location: "Belgium",
    imageSrc: "",
    link: "https://www.upwork.com/freelancers/~0187108b7dd6a6c2f2",
  },
  {
    content:
      "Very quick turnaround, efficient, and easy to work with. Had ready answers for most of my issues. Went above and beyond what was expected. I'd gladly recommend Drew to anyone looking for HTML5 responsive web dev work. :)",
    name: "S. Maddali",
    location: "United States",
    imageSrc: "",
    link: "https://www.upwork.com/freelancers/~0187108b7dd6a6c2f2",
  },
  {
    content:
      "Andrew is pleasant to work with, easy to get a hold of and understands web-design well. His communication was excellent and direct.",
    name: "M. W. Nielsen",
    location: "Denmark",
    imageSrc: "",
    link: "https://www.upwork.com/freelancers/~0187108b7dd6a6c2f2",
  },
  {
    content:
      "Andrew is very good in what he does! Very accurate, great communication AND dedication! Keep up the good work Andrew. Will be needing you a lot in the future!",
    name: "O. Lopes",
    location: "Netherlands",
    imageSrc: "",
    link: "https://www.upwork.com/freelancers/~0187108b7dd6a6c2f2",
  },
];

const animation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
      easings: ["easeIn", "easeOut"],
    },
  },
};

export const TestimonialSection = () => (
  <section
    id="testimonial"
    className="px-default mx-auto max-w-screen-xl py-16 md:py-20 lg:py-24"
  >
    <h2 className="text-center text-h2 font-bold text-t-primary">
      Voices of Confidence
    </h2>
    <p className="mx-auto mt-4 max-w-[800px] text-center text-body-large text-t-primary">
      Here's a collection of testimonials from colleagues, clients, and partners
      who've witnessed the impact of our collaborations firsthand.
    </p>

    <motion.div
      className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
      variants={animation}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 25 }}
          variants={animation}
          className="relative"
        >
          <div className="relative flex h-full flex-col rounded-card bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-200 md:p-10">
            <Link
              target="_blank"
              className="absolute left-0 top-0 h-full w-full"
              href={testimonial.link}
            ></Link>
            <p className="flex-1 text-pretty leading-normal text-t-primary">
              {testimonial.content}
            </p>

            <div className="mt-10">
              {testimonial?.imageSrc ? null : (
                <svg
                  className="mx-auto h-16 w-16"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="100"
                    height="100"
                    rx="50"
                    fill="currentColor"
                    className="text-primary"
                  />
                  <path
                    className="text-background"
                    d="M44 45.5H41.0219C42.4149 41.4657 43.6044 39.5338 47.5625 37.8844C48.2231 37.609 48.5968 36.9059 48.4561 36.2042C48.3155 35.5039 47.7002 35 46.9853 35H46.9823C38.725 35.0147 33.9818 38.3252 30.6185 46.417C29.545 48.9586 29 51.6786 29 54.5C29 58.8389 30.3125 61.2017 32.3135 64.3115C32.5889 64.7407 33.065 65 33.5747 65H44C46.4814 65 48.5 62.9814 48.5 60.5V50C48.5 47.5186 46.4814 45.5 44 45.5ZM66.5 45.5H63.5219C64.915 41.4657 66.1044 39.5338 70.0625 37.8844C70.7231 37.609 71.0967 36.9059 70.956 36.2042C70.8155 35.5039 70.2002 35 69.4853 35H69.4823C61.2249 35.0147 56.4818 38.3252 53.1185 46.417C52.045 48.9586 51.5 51.6786 51.5 54.5C51.5 58.8389 52.8125 61.2017 54.8135 64.3115C55.0889 64.7407 55.565 65 56.0747 65H66.5C68.9814 65 71 62.9814 71 60.5V50C71 47.5186 68.9814 45.5 66.5 45.5Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>

            <h4 className="mt-4 font-body text-base font-bold text-primary">
              {testimonial.name}
            </h4>
            <span className="text-xs text-t-secondary">
              {testimonial.location}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
