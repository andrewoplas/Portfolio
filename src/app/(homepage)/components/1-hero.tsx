import { Button } from "@/components/button";
import Image from "next/image";

export const HeroSection = () => (
  <section id="hello" className="w-full bg-primary">
    <div className="relative z-[1] -mb-[30%] md:-mb-[12%]">
      <h1 className="relative px-4 pt-32 text-center text-h1 font-bold leading-none text-background md:pt-44">
        <div>
          Hi. I’m <span className="text-secondary">Andrew.</span>
        </div>
        <div>
          A <span className="text-secondary">Developer.</span>
        </div>
      </h1>

      <p className="mx-auto mt-6 max-w-[550px] px-4 text-center text-body-large text-background">
        Turning Coffee into Code: Crafting Fun, Functional, and Fabulous
        Software!
      </p>

      <div className="mt-6 text-center md:mt-10">
        <Button href="#projects">View Projects</Button>
      </div>
    </div>

    <Image
      src="/images/homepage/hero-illustration.svg"
      width={1440}
      height={579}
      alt=""
      className="h-[400px] w-screen object-cover lg:h-auto lg:w-screen"
    />
  </section>
);
