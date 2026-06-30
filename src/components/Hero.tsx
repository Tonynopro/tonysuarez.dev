"use client";

import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";
import { HeroCarousel } from "./HeroCarousel";
import { carouselImages } from "@/data/carousel";
import { LinkedInIcon, GithubIcon } from "./Icons";
import { LanguageContext } from "./LanguageProvider";

export function Hero() {
  const [introDone, setIntroDone] = useState(false);
  const { t } = useContext(LanguageContext);

  const coreTech = [
    {
      category: t("hero.coreTech.fullStack"),
      items: ["Next.js", "React", "Node.js", "FastAPI"],
    },
    {
      category: t("hero.coreTech.software"),
      items: ["C#", "Unity", "Java"],
    },
    {
      category: t("hero.coreTech.databases"),
      items: ["PostgreSQL", "MySQL"],
    },
  ];

  const introLines = [
    t("hero.introLine1"),
    t("hero.introLine2"),
    t("hero.introLine3"),
    t("hero.introLine4"),
  ];

  const heroHighlights = [
    { value: "8+", label: t("hero.highlights.applications") },
    { value: "4", label: t("hero.highlights.technologies") },
    { value: "2", label: t("hero.highlights.awards") },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col mt-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-[60%] max-w-3xl pt-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="shrink-0"
              >
                <div className="relative w-28 h-28 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-lg border border-terra/30 scale-110" />
                  <img
                    src="/Yo.jpg"
                    alt="Ricardo Suarez"
                    className="w-full h-full rounded-lg object-cover object-top relative z-10 grayscale-[20%] contrast-[1.05]"
                  />
                </div>
              </motion.div>

              <div className="max-w-xl">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-sm text-terra font-medium tracking-widest uppercase mb-3"
                >
                  {t("hero.role")}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="font-mono font-semibold text-3xl md:text-5xl text-ink leading-[1.15] mb-2"
                >
                  {t("hero.hello")} <span className="text-terra">Tony</span>.
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 mb-8 max-w-2xl"
            >
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/80 bg-surface/80 px-3 py-3 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)]"
                >
                  <p className="text-xl md:text-2xl font-semibold text-ink leading-none mb-1">
                    {item.value}
                  </p>
                  <p className="text-xs md:text-sm text-ink-muted leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-ink-muted mb-6"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg border border-border bg-surface shadow-[0_0_0_1px_rgb(var(--terra-rgb)/0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)] overflow-hidden max-w-2xl"
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] text-ink-faint tracking-wide">
                  {t("hero.terminalLabel")}
                </span>
              </div>
              <div className="p-5 md:p-6 text-sm md:text-[15px] leading-relaxed min-h-[140px]">
                <Typewriter
                  lines={introLines}
                  speed={22}
                  lineDelay={300}
                  onDone={() => setIntroDone(true)}
                  className="text-ink-muted whitespace-pre-wrap"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: introDone ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap mt-8"
            >
              <a
                href="#proyectos"
                className="px-6 py-2.5 bg-terra text-cream rounded-md text-sm font-semibold hover:opacity-85 hover:shadow-[0_0_24px_-4px_rgb(var(--terra-rgb)/0.5)] transition-all duration-300"
              >
                {t("hero.viewProjects")}
              </a>
              <a
                href="https://linkedin.com/in/ricardoantoniosuarez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 border border-border text-ink rounded-md text-sm font-medium hover:border-terra/50 hover:bg-terra/5 transition-all duration-300"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Tonynopro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 border border-border text-ink rounded-md text-sm font-medium hover:border-terra/50 hover:bg-terra/5 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          </div>

          {carouselImages.length > 0 && <HeroCarousel />}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between gap-8 md:gap-12"
        >
          {coreTech.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
              className="flex-1"
            >
              <h3 className="text-xs font-bold text-ink-faint uppercase tracking-widest mb-4"></h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-md border border-border text-ink-muted bg-surface hover:border-terra/40 hover:text-terra transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
