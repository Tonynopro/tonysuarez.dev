"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { LanguageContext } from "./LanguageProvider";

export function Nav() {
  const { t } = useContext(LanguageContext);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
      style={{
        background: "rgb(var(--cream-rgb) / 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgb(var(--terra-rgb) / 0.1)",
      }}
    >
      <Link
        href="/"
        className="font-mono text-ink text-lg hover:text-terra transition-colors duration-200"
      >
        <span className="text-terra">~/</span>ricardo-tony-suarez
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        <a
          href="#proyectos"
          className="hidden sm:inline text-sm text-ink-muted hover:text-terra transition-colors duration-200"
        >
          {t("nav.projects")}
        </a>
        <a
          href="#sobre-mi"
          className="hidden sm:inline text-sm text-ink-muted hover:text-terra transition-colors duration-200"
        >
          {t("nav.about")}
        </a>
        <a
          href="mailto:tony.suarez1002@gmail.com"
          className="hidden sm:inline text-sm px-4 py-1.5 rounded-md border border-border text-ink hover:border-terra hover:text-terra transition-all duration-200"
        >
          {t("nav.contact")}
        </a>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
