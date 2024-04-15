"use client";

import { showVariants } from "@/lib/animation";
import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Work = {
  projectName: string;
  projectTag: string;
  bgClass: string;
  span: string;
};

const works: Work[] = [
  {
    projectName: "Aeon",
    projectTag: "Mobile",
    bgClass: "bg-appPink",
    span: "col-span-7",
  },
  {
    projectName: "Aeon1",
    projectTag: "Mobile",
    bgClass: "bg-appMint",
    span: "col-span-5",
  },
  {
    projectName: "Aeon2",
    projectTag: "Mobile",
    bgClass: "bg-appRust",
    span: "col-span-5",
  },
  {
    projectName: "Aeo3",
    projectTag: "Mobile",
    bgClass: "bg-appBabyblue",
    span: "col-span-7",
  },
];

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, translateY: 25 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { type: "tween", ease: "linear", duration: 0.25 },
  },
};

export const ProjectsSection = () => (
  <motion.section
    id="projects"
    variants={parentVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="mx-auto -mt-40 grid max-w-[1600px] grid-cols-12 items-center justify-center gap-20 px-4 pt-40">
      {works.map((work) => (
        <motion.div
          className={work.span}
          key={work.projectName}
          variants={childVariants}
        >
          <ProjectItem key={work.projectName} work={work} />
        </motion.div>
      ))}
    </div>

    <div className="mt-24 text-center">
      <motion.a
        href="/"
        className="border-textPrimary hover:bg-textPrimary mx-auto inline-block rounded-full border-2 px-6 py-4 leading-none [transition:padding_0.35s] hover:px-8 hover:text-white"
        variants={childVariants}
      >
        View All Projects
      </motion.a>
    </div>
  </motion.section>
);

type ProjectItemProps = {
  work: Work;
};
const ProjectItem = ({ work }: ProjectItemProps) => (
  <div className={"group relative h-[550px]"}>
    <Image
      src="/images/icon-1.svg"
      alt=""
      width={50}
      height={50}
      className="group-hover:opacity-100 absolute -top-[2%] group-hover:-top-[10%] left-[5%] z-[1] h-40 w-40 opacity-0 transition-all duration-500"
    />

    <div
      className={cn(
        "hover:shadow-cards text-textBold h-full w-full overflow-hidden rounded-[3.5rem] px-10 py-8 text-right transition-all duration-500 hover:-translate-y-[6px] hover:saturate-[1.2]",
        work.bgClass,
      )}
    >
      <span className="text-sm uppercase tracking-wide">{work.projectTag}</span>
      <h3 className="text-5xl">{work.projectName}</h3>

      <Image
        src="/images/sample-project.png"
        width={1300}
        height={600}
        alt={work.projectName}
        className="mt-10 h-full max-w-min transition-all duration-500 group-hover:translate-y-4"
      />
    </div>
  </div>
);
