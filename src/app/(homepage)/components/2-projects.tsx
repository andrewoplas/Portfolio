"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Work = {
  projectName: string;
  projectTag: string;
  imageSrc: string;
  imageClassname: string;
  iconSrc: string;
  iconClassname?: string;
  bgClass: string;
  span: string;
  link: string;
};

const works: Work[] = [
  {
    projectName: "point of sale",
    projectTag: "EJJY",
    imageSrc: "/images/projects/pos.png",
    imageClassname: "w-[140vw] md:w-[1000px] lg:w-[1200px] h-auto",
    iconSrc: "/images/icon-cart.svg",
    iconClassname: "-rotate-[20deg]",
    bgClass: "bg-[#ECF39E]",
    span: "lg:col-span-7",
    link: "/pos",
  },
  {
    projectName: "goodtime",
    projectTag: "ALGERT",
    imageSrc: "/images/projects/goodtime.png",
    imageClassname: "mx-auto max-w-[100%] md:max-w-[55%] lg:max-w-full h-auto",
    iconSrc: "/images/icon-chat.svg",
    iconClassname: "",
    bgClass: "bg-[#B5D897]",
    span: "lg:col-span-5",
    link: "/goodtime",
  },
  {
    projectName: "inventory",
    projectTag: "FREELANCE",
    imageSrc: "/images/projects/inventory.png",
    imageClassname: "w-[170vw] md:w-[1000px] lg:w-[1200px] h-auto",
    iconSrc: "/images/icon-archive.svg",
    iconClassname: "-rotate-[15deg]",
    bgClass: "bg-[#E2F3E2]",
    span: "lg:col-span-5",
    link: "/marigold",
  },
  {
    projectName: "digirent",
    projectTag: "FREELANCE",
    imageSrc: "/images/projects/digirent.png",
    imageClassname: "w-[130vw] lg:w-[1000px] h-auto",
    iconSrc: "/images/icon-home.svg",
    iconClassname: "rotate-[10deg]",
    bgClass: "bg-[#B9DFB9]",
    span: "lg:col-span-7",
    link: "/digirent",
  },
];

const animation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.25,
      when: "beforeChildren",
      easings: ["easeIn", "easeOut"],
    },
  },
};

export const ProjectsSection = () => (
  <section
    id="projects"
    className="px-default mx-auto max-w-section py-16 md:py-20 lg:py-24"
  >
    <h2 className="text-center text-h2 font-bold text-t-primary">
      Bits & Bytes
    </h2>
    <p className="mx-auto mt-4 max-w-[950px] text-center text-body-large text-t-primary">
      Discover the projects that have marked my journey: from client visions to
      company milestones, crafted with care, creativity, and code. Each piece is
      a step forward in innovation.
    </p>

    <motion.div
      className="mx-auto mt-14 grid grid-cols-1 items-center justify-center gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-14"
      variants={animation}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {works.map((work) => (
        <div className={work.span} key={work.projectName}>
          <ProjectItem key={work.projectName} work={work} />
        </div>
      ))}
    </motion.div>

    <div className="mt-16 flex items-center justify-end lg:mt-24">
      <Link
        href="archive"
        className="flex gap-4 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text
       text-h6 font-bold uppercase leading-none text-t-primary transition-all duration-300 hover:translate-x-2 hover:animate-text hover:text-transparent
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
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    variants={animation}
    className="group relative h-[325px] md:h-[400px] lg:h-[500px]"
  >
    <Link
      href={work.link}
      className="absolute left-0 top-0 z-[1] h-full w-full"
    ></Link>
    <Image
      src={work.iconSrc}
      alt=""
      width={50}
      height={50}
      className={cn(
        "absolute -top-[2%] left-[5%] z-[1] h-40 w-40 opacity-0 transition-all duration-500 group-hover:-top-[10%] group-hover:opacity-100",
        work.iconClassname,
      )}
    />

    <div
      className={cn(
        "text-textBold h-full w-full overflow-hidden rounded-card px-6 py-5 text-right transition-all duration-500 hover:-translate-y-[6px] hover:shadow-cards hover:saturate-[1.2] md:px-8 md:py-7 lg:px-10 lg:py-8",
        work.bgClass,
      )}
    >
      <span className="text-body-large uppercase tracking-widest text-t-secondary">
        {work.projectTag}
      </span>
      <h3 className="mb-7 text-h4 font-bold leading-tight text-t-primary md:mb-10">
        {work.projectName}
      </h3>

      <Image
        src={work.imageSrc}
        width={1300}
        height={600}
        alt={work.projectName}
        className={cn(
          "h-full max-w-max transition-all duration-500 group-hover:translate-y-4",
          work.imageClassname,
        )}
      />
    </div>
  </motion.div>
);
