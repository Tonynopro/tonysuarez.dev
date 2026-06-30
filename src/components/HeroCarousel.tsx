"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { carouselImages } from "@/data/carousel";

const INTERVAL = 4000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % carouselImages.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  if (carouselImages.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      
      className="hidden lg:block w-[38%] shrink-0"
    >
      <div className="relative rounded-lg border border-border bg-surface shadow-[0_0_0_1px_rgb(var(--terra-rgb)/0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)] overflow-hidden aspect-[5/5]">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-2 relative z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] text-ink-faint tracking-wide">
            galeria.png
          </span>
        </div>

        <div className="relative w-full h-[calc(100%-41px)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={carouselImages[index].src}
              src={carouselImages[index].src}
              alt={carouselImages[index].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {carouselImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {carouselImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-terra" : "w-1.5 bg-ink-faint/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
