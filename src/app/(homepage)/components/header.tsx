"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const routes = [
  {
    path: "hello",
    name: "Hello",
  },
  {
    path: "projects",
    name: "Projects",
  },
  {
    path: "about",
    name: "About",
  },
  {
    path: "experience",
    name: "Experience",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

export const Header = () => {
  const [activeItem, setActiveItem] = useState("/#hello");
  const [isActive, setIsActive] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsActive(value > 75);
  });

  return (
    <header className="fixed z-10 mt-5 flex w-full items-center justify-center">
      <nav
        className={cn("rounded-full px-3 py-2 duration-300", {
          "bg-white/70 backdrop-blur-lg": isActive,
        })}
      >
        <ul className="flex gap-0 md:gap-x-1">
          {routes.map((route) => (
            <li
              key={route.name}
              className="relative"
              onClick={() => setActiveItem(route.path)}
            >
              <Link
                spy={true}
                smooth={true}
                duration={300}
                offset={-15}
                className={cn(
                  "relative z-10 block cursor-pointer px-3 py-2 text-xs font-semibold uppercase leading-none sm:px-5 sm:py-3 md:text-sm",
                  {
                    "text-background": !isActive,
                    "font-bold": activeItem === route.path,
                  },
                )}
                to={route.path}
                onSetActive={(item) => {
                  setActiveItem(item);
                }}
              >
                {route.name}
              </Link>

              {activeItem === route.path && (
                <motion.div
                  layoutId="active-item"
                  className={cn(
                    "absolute left-0 top-0 h-full w-full rounded-[200px] bg-white/40 shadow-md backdrop-blur-lg",
                    {
                      "bg-white/10": !isActive,
                    },
                  )}
                  transition={{
                    type: "spring",
                    duration: 0.55,
                    bounce: 0.35,
                  }}
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
