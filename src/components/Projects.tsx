"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { LanguageContext } from "./LanguageProvider";

export function Projects() {
  const { t } = useContext(LanguageContext);
  const orderedProjects = [...projects].sort((a, b) => {
    const rank = { ACT: 0, 3: 1, 2: 2, 1: 3 } as const;
    return (rank[a.importance ?? 1] ?? 3) - (rank[b.importance ?? 1] ?? 3);
  });

  return (
    <section
      id="proyectos"
      className="px-6 md:px-10 py-24 border-t border-ink/[0.06]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs text-terra font-medium uppercase tracking-widest mb-3">
          {t("projects.eyebrow")}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight max-w-md">
          {t("projects.title")}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 items-stretch">
        {orderedProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
