"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useViewportScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const routes = [
  {
    path: "/#hello",
    name: "Hello",
  },
  {
    path: "/#projects",
    name: "Projects",
  },
  {
    path: "/#about",
    name: "About",
  },
  {
    path: "/#experience",
    name: "Experience",
  },
  {
    path: "/#contact",
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
        <ul className="flex gap-x-1">
          {routes.map((route) => (
            <li
              key={route.name}
              className="relative"
              onClick={() => setActiveItem(route.path)}
            >
              <Link
                className="relative z-10 block px-5 py-3 leading-none"
                href={route.path}
              >
                {route.name}
              </Link>

              {activeItem === route.path && (
                <motion.div
                  layoutId="active-item"
                  className="absolute left-0 top-0 h-full w-full rounded-[200px] bg-white/40 backdrop-blur-lg"
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
