"use client";

import { cn } from "@/lib/utils";
import { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Work = {
  projectName: string;
  projectTag: string;
  imageSrc: string;
  imageClass: string;
  bgClass: string;
  span: string;
  link: string;
};

const works: Work[] = [
  {
    projectName: "point of sale",
    projectTag: "EJJY",
    imageSrc: "/images/projects/pos.png",
    imageClass: "w-[140vw] md:w-[1000px] lg:w-[1200px] h-auto",
    bgClass: "bg-[#ECF39E]",
    span: "lg:col-span-7",
    link: "/pos",
  },
  {
    projectName: "goodtime",
    projectTag: "ALGERT",
    imageSrc: "/images/projects/goodtime.png",
    imageClass: "mx-auto max-w-[100%] md:max-w-[55%] lg:max-w-full h-auto",
    bgClass: "bg-[#B5D897]",
    span: "lg:col-span-5",
    link: "/goodtime",
  },
  {
    projectName: "inventory",
    projectTag: "FREELANCE",
    imageSrc: "/images/projects/inventory.png",
    imageClass: "w-[170vw] md:w-[1000px] lg:w-[1200px] h-auto",
    bgClass: "bg-[#E2F3E2]",
    span: "lg:col-span-5",
    link: "/marigold",
  },
  {
    projectName: "digirent",
    projectTag: "FREELANCE",
    imageSrc: "/images/projects/digirent.png",
    imageClass: "w-[130vw] lg:w-[1000px] h-auto",
    bgClass: "bg-[#B9DFB9]",
    span: "lg:col-span-7",
    link: "/digirent",
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
  <section
    id="projects"
    className="mx-auto max-w-section px-4 py-16 md:px-8 md:py-20 lg:py-24"
  >
    <h2 className="text-t-primary text-center text-h2 font-bold">
      Bits & Bytes
    </h2>
    <p className="text-t-primary text-body-large mx-auto mt-4 max-w-[950px] text-center">
      Discover the projects that have marked my journey: from client visions to
      company milestones, crafted with care, creativity, and code. Each piece is
      a step forward in innovation.
    </p>

    <div className="mx-auto mt-14 grid grid-cols-1 items-center justify-center gap-8 lg:gap-14 lg:mt-20 lg:grid-cols-12">
      {works.map((work) => (
        <div className={work.span} key={work.projectName}>
          <ProjectItem key={work.projectName} work={work} />
        </div>
      ))}
    </div>

    <div className="mt-16 lg:mt-24 flex items-center justify-end">
      <Link
        href="archive"
        className="text-t-primary hover:animate-text flex gap-4 bg-gradient-to-r from-teal-500 via-purple-500
       to-orange-500 bg-clip-text text-h6 font-bold uppercase leading-none hover:text-transparent transition-all duration-300 hover:translate-x-2
        "
      >
        Browse Projects <div className="-mt-1">→</div>
      </Link>
    </div>
  </section>
);

type ProjectItemProps = {
  work: Work;
};
const ProjectItem = ({ work }: ProjectItemProps) => (
  <Link href={work.link}>
    <div className={"group relative h-[325px] md:h-[400px] lg:h-[500px]"}>
      <Image
        src="/images/icon-1.svg"
        alt=""
        width={50}
        height={50}
        className="absolute -top-[2%] left-[5%] z-[1] h-40 w-40 opacity-0 transition-all duration-500 group-hover:-top-[10%] group-hover:opacity-100"
      />

      <div
        className={cn(
          "rounded-card h-full w-full overflow-hidden px-6 py-5 text-right text-textBold transition-all duration-500 hover:-translate-y-[6px] hover:shadow-cards hover:saturate-[1.2] md:px-8 md:py-7 lg:px-10 lg:py-8",
          work.bgClass,
        )}
      >
        <span className="text-body-large text-t-secondary uppercase tracking-widest">
          {work.projectTag}
        </span>
        <h3 className="text-t-primary mb-7 text-h4 font-bold leading-tight md:mb-10">
          {work.projectName}
        </h3>

        <Image
          src={work.imageSrc}
          width={1300}
          height={600}
          alt={work.projectName}
          className={cn(
            "h-full max-w-max transition-all duration-500 group-hover:translate-y-4",
            work.imageClass,
          )}
        />
      </div>
    </div>
  </Link>
);
