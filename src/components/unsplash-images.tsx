"use client";
import { UnsplashImage } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  images: UnsplashImage[];
};

export const UnsplashImages = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {images?.length > 0 &&
          images.map((image) => (
            <div
              className="group relative aspect-[157/104] max-h-36 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              key={image.name}
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                className="h-full w-full object-cover"
                layoutId={image.src}
                width={157}
                height={104}
                src={image.src}
                alt={image.src}
              />

              <div className="bg-textPrimary absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden opacity-70 duration-200 group-hover:opacity-0" />
            </div>
          ))}
      </div>

      <AnimatePresence initial={false} mode="wait">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center"
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-full bg-slate-800/80"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div className="relative z-10 overflow-hidden rounded-2xl">
              <motion.img
                layoutId={selectedImage.src}
                src={selectedImage.src}
                alt={selectedImage.src}
                className="max-h-[80vh] w-full max-w-[800px]"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-textPrimary absolute bottom-4 left-4 inline-block rounded-lg bg-white/70 px-4 py-2 text-lg leading-none backdrop-blur-sm transition-all hover:bg-white"
              >
                {selectedImage.name}
              </motion.span>
              <motion.button
                className="bg text-textPrimary absolute right-4 top-4 h-8 w-8 rounded-full bg-white/70 p-1 backdrop-blur-lg transition-all hover:bg-white"
                onClick={() => setSelectedImage(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M15 5L5 15M5 5l5.03 5.03L15 15"
                    fill="transparent"
                    stroke-width="2"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
