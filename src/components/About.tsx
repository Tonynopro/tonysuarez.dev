"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "./LanguageProvider";

export function About() {
  const { t } = useContext(LanguageContext);

  const highlights = [
    {
      label: t("about.highlights.education"),
      value: t("about.highlights.educationValue"),
      sub: t("about.highlights.educationSub"),
    },
    {
      label: t("about.highlights.recognition"),
      value: t("about.highlights.recognitionValue"),
      sub: t("about.highlights.recognitionSub"),
    },
    {
      label: t("about.highlights.languages"),
      value: t("about.highlights.languagesValue"),
      sub: t("about.highlights.languagesSub"),
    },
    {
      label: t("about.highlights.recognition"),
      value: t("about.highlights.secondRecognitionValue"),
      sub: t("about.highlights.secondRecognitionSub"),
    },
  ];
  return (
    <section
      id="sobre-mi"
      className="px-6 md:px-10 py-24 border-t border-ink/[0.06]"
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-terra font-medium uppercase tracking-widest mb-3">
            {t("about.eyebrow")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-8">
            {t("about.title")}
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
            {t("about.intro1")}
          </p>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mt-4">
            {t("about.intro2")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={`${item.label}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-5 rounded-xl border border-border bg-surface"
            >
              <p className="text-[11px] font-medium text-ink-faint uppercase tracking-wider mb-1.5">
                {item.label}
              </p>
              <p className="font-serif text-lg text-ink mb-0.5">{item.value}</p>
              <p className="text-sm text-ink-muted">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
