"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { LinkedInIcon, GithubIcon } from "./Icons";
import { LanguageContext } from "./LanguageProvider";

export function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="border-t border-ink/[0.06]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-10 py-20 md:py-28 text-center"
      >
        <p className="text-xs tracking-widest uppercase text-terra font-medium mb-4">
          {t("footer.eyebrow")}
        </p>
        <h2 className="font-serif text-ink text-4xl md:text-6xl leading-tight mb-8">
          {t("footer.title")}
          <br />
          {t("footer.subtitle")}{" "}
          <span className="text-terra italic">{t("footer.highlight")}</span>.
        </h2>

        <a
          href="mailto:tony.suarez1002@gmail.com"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-7 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:border-terra hover:bg-terra hover:text-cream"
        >
          {t("footer.email")}
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-6 md:px-10 py-6 border-t border-ink/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <p className="text-sm text-ink-muted">Ricardo Antonio Suarez Perez</p>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/ricardoantoniosuarez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-ink-faint hover:text-terra transition-colors duration-200"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Tonynopro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-ink-faint hover:text-terra transition-colors duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
