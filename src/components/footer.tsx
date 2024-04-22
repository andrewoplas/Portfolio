import React from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative flex min-h-[1000px] flex-col items-center bg-primary pb-20 pt-28">
      <div className="z-[1] flex flex-1 flex-col items-center px-4 md:px-8">
        <h2 className="max-w-[730px] text-center text-h2 font-bold leading-none text-background">
          Got an idea?
          <span className="block text-secondary">Let’s collaborate.</span>
        </h2>

        <Button
          href="mailto:hello@andrewmoplas.dev"
          variant="outline"
          className="group mt-12 flex items-center gap-3 border border-white text-white hover:!transform-none hover:bg-white hover:text-t-primary"
        >
          <svg
            className="h-6 w-6 transition-[transform,opacity,width] duration-200 group-hover:w-0 group-hover:-translate-x-full group-hover:opacity-0"
            width="53"
            height="42"
            viewBox="0 0 53 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.28125 13.7136V32.4844C3.28125 36.1087 6.21938 39.0469 9.84375 39.0469H42.6562C46.2806 39.0469 49.2188 36.1087 49.2188 32.4844V13.7136L29.6894 25.7317C27.5802 27.0297 24.9198 27.0297 22.8106 25.7317L3.28125 13.7136Z"
              fill="currentColor"
            />
            <path
              d="M49.2188 9.86087V9.51562C49.2188 5.89126 46.2806 2.95312 42.6562 2.95312H9.84375C6.21938 2.95312 3.28125 5.89126 3.28125 9.51562V9.86087L24.5303 22.9372C25.5849 23.5862 26.9151 23.5862 27.9697 22.9372L49.2188 9.86087Z"
              fill="currentColor"
            />
          </svg>
          hello@andrewmoplas.dev
          <svg
            className="group-hover:opacity-1 h-6 w-0 translate-x-full opacity-0 transition-[transform,opacity,width] duration-200 group-hover:w-6 group-hover:translate-x-0 group-hover:opacity-100"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.113 8.36298C18.4303 8.04567 18.9447 8.04567 19.262 8.36298L23.3245 12.4255C23.6418 12.7428 23.6418 13.2572 23.3245 13.5745L19.262 17.637C18.9447 17.9543 18.4303 17.9543 18.113 17.637C17.7957 17.3197 17.7957 16.8053 18.113 16.488L20.7885 13.8125H3.25C2.80127 13.8125 2.4375 13.4487 2.4375 13C2.4375 12.5513 2.80127 12.1875 3.25 12.1875H20.7885L18.113 9.51202C17.7957 9.19472 17.7957 8.68028 18.113 8.36298Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>

      <div className="relative -mt-[120px] w-full">
        <div
          className="z-1 absolute bottom-0 left-0 right-0 h-full w-full"
          style={{ background: "linear-gradient(rgba(0,0,0,0), #132a13)" }}
        ></div>

        <Image
          src="/images/homepage/footer-illustration.svg"
          width={1440}
          height={579}
          alt=""
          className="h-full w-full"
        />
      </div>

      <div className="z-[1] flex w-full max-w-section justify-between px-4 text-background md:px-8">
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com/in/aoplas"
            target="_blank"
            className="transition-colors duration-200 hover:text-secondary"
          >
            <svg
              className="h-8 w-8"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.0391 0H2.95312C1.32031 0 0 1.28906 0 2.88281V37.1094C0 38.7031 1.32031 40 2.95312 40H37.0391C38.6719 40 40 38.7031 40 37.1172V2.88281C40 1.28906 38.6719 0 37.0391 0ZM11.8672 34.0859H5.92969V14.9922H11.8672V34.0859ZM8.89844 12.3906C6.99219 12.3906 5.45312 10.8516 5.45312 8.95312C5.45312 7.05469 6.99219 5.51562 8.89844 5.51562C10.7969 5.51562 12.3359 7.05469 12.3359 8.95312C12.3359 10.8437 10.7969 12.3906 8.89844 12.3906ZM34.0859 34.0859H28.1562V24.8047C28.1562 22.5938 28.1172 19.7422 25.0703 19.7422C21.9844 19.7422 21.5156 22.1562 21.5156 24.6484V34.0859H15.5938V14.9922H21.2812V17.6016H21.3594C22.1484 16.1016 24.0859 14.5156 26.9688 14.5156C32.9766 14.5156 34.0859 18.4688 34.0859 23.6094V34.0859Z"
                fill="currentColor"
              />
            </svg>
          </Link>

          <Link
            href="https://github.com/andrewoplas"
            target="_blank"
            className="transition-colors duration-200 hover:text-secondary"
          >
            <svg
              className="h-8 w-8"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.3557 0C9.09955 0 0 9.16663 0 20.507C0 29.572 5.83039 37.2453 13.9187 39.9611C14.9299 40.1653 15.3004 39.5198 15.3004 38.9769C15.3004 38.5015 15.267 36.8719 15.267 35.174C9.60454 36.3965 8.42538 32.7295 8.42538 32.7295C7.51539 30.3528 6.16706 29.742 6.16706 29.742C4.31373 28.4857 6.30206 28.4857 6.30206 28.4857C8.35788 28.6215 9.43663 30.5907 9.43663 30.5907C11.2562 33.714 14.1883 32.8315 15.3679 32.2882C15.5362 30.964 16.0758 30.0474 16.6487 29.5382C12.1325 29.0628 7.3808 27.2974 7.3808 19.4203C7.3808 17.1795 8.18913 15.3462 9.46996 13.9204C9.26788 13.4112 8.55997 11.3058 9.67246 8.48788C9.67246 8.48788 11.3912 7.94455 15.2666 10.5929C16.9258 10.144 18.6369 9.91563 20.3557 9.91371C22.0745 9.91371 23.8266 10.1516 25.4445 10.5929C29.3203 7.94455 31.039 8.48788 31.039 8.48788C32.1515 11.3058 31.4432 13.4112 31.2411 13.9204C32.5557 15.3462 33.3307 17.1795 33.3307 19.4203C33.3307 27.2974 28.579 29.0286 24.0291 29.5382C24.7707 30.1832 25.4107 31.4053 25.4107 33.3407C25.4107 36.0907 25.3774 38.2978 25.3774 38.9765C25.3774 39.5198 25.7482 40.1652 26.7591 39.9615C34.8474 37.2448 40.6777 29.572 40.6777 20.507C40.7111 9.16663 31.5782 0 20.3557 0Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <p className="font-heading text-lg font-light">
            © 2024 Andrew Oplas
          </p>
          <span>·</span>
          <p className="font-heading text-lg font-light">Colophon</p>
        </div>
      </div>
    </footer>
  );
};
