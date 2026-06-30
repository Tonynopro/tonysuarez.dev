"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import { DeviceMockup } from "./DeviceMockup";
import { LanguageContext } from "./LanguageProvider";
import { getLocalizedProject } from "@/i18n/translations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language, t } = useContext(LanguageContext);
  const localizedProject = getLocalizedProject(project, language);
  const hasDetail = !!localizedProject.detail;
  const importance = localizedProject.importance ?? 1;
  const isAct = importance === "ACT";
  const spanClass =
    importance === 3 || isAct
      ? "md:col-span-2 xl:col-span-3"
      : importance === 2
        ? "md:col-span-2"
        : "";
  const previewHeightClass =
    importance === 3 || isAct
      ? "min-h-[250px] md:min-h-[320px]"
      : importance === 2
        ? "min-h-[220px] md:min-h-[260px]"
        : "min-h-[200px] md:min-h-[240px]";
  const titleClass =
    importance === 3 || isAct
      ? "font-serif text-xl md:text-2xl text-ink leading-tight"
      : importance === 2
        ? "font-serif text-lg md:text-xl text-ink leading-tight"
        : "font-serif text-lg text-ink leading-tight";
  const descriptionClass =
    importance === 3 || isAct
      ? "text-sm md:text-[15px] text-ink-muted leading-relaxed mb-4"
      : importance === 2
        ? "text-sm text-ink-muted leading-relaxed mb-4"
        : "text-sm text-ink-muted leading-relaxed mb-4";
  const platformLabel: Record<string, string> = {
    web: t("projectDetail.platform.web"),
    mobile: t("projectDetail.platform.mobile"),
    desktop: t("projectDetail.platform.desktop"),
    "web+mobile": t("projectDetail.platform.web+mobile"),
  };

  const cardClass = isAct
    ? "group relative bg-surface rounded-[30px] border border-amber-400/50 overflow-hidden shadow-[0_28px_90px_-28px_rgba(245,158,11,0.45)] hover:border-amber-400/70 hover:-translate-y-1.5 hover:shadow-[0_35px_100px_-28px_rgba(245,158,11,0.55)] h-full flex flex-col"
    : importance === 3
      ? "group relative bg-surface rounded-[28px] border border-terra/25 overflow-hidden shadow-[0_24px_80px_-28px_rgba(15,23,42,0.38)] hover:border-terra/40 hover:-translate-y-1 hover:shadow-[0_30px_90px_-28px_rgba(15,23,42,0.45)] h-full flex flex-col"
      : importance === 2
        ? "group relative bg-surface rounded-[22px] border border-border/90 overflow-hidden shadow-[0_16px_45px_-24px_rgba(15,23,42,0.28)] hover:border-terra/30 hover:-translate-y-0.5 hover:shadow-[0_20px_55px_-24px_rgba(15,23,42,0.34)] h-full flex flex-col"
        : "group relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-terra/30 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col";

  const cardInner = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cardClass}
    >
      <div
        className={`relative flex items-end justify-center pt-10 pb-6 px-6 overflow-hidden ${previewHeightClass}`}
        style={{ background: localizedProject.color }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1A1916 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <motion.div
          whileHover={{ scale: 1.04, y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <DeviceMockup
            platform={localizedProject.platform}
            color={localizedProject.color}
            image={localizedProject.images ?? localizedProject.image}
            importance={importance}
          />
        </motion.div>

        {importance === 3 && (
          <div className="absolute left-4 top-4 z-10">
            <span className="rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink backdrop-blur-sm">
              {t("projects.featured")}
            </span>
          </div>
        )}

        {isAct && (
          <div className="absolute left-4 top-4 z-10">
            <span className="rounded-full border border-amber-300/70 bg-amber-400/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-950 shadow-[0_0_18px_rgba(251,191,36,0.35)]">
              {t("projects.working")}
            </span>
          </div>
        )}

        {hasDetail && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-terra text-cream tracking-wide">
              Ver detalle →
            </span>
          </div>
        )}
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={titleClass}>{localizedProject.title}</h3>
          <div className="flex flex-col items-end gap-1 shrink-0 mt-0.5">
            <span className="text-[11px] font-medium text-ink-muted uppercase tracking-wider">
              {platformLabel[localizedProject.platform]}
            </span>
            <span
              className="text-[11px] px-2 py-0.5 rounded-full font-medium"
              style={{
                background:
                  localizedProject.type === "game"
                    ? "rgba(255, 196, 92, 0.12)"
                    : "rgb(var(--terra-rgb) / 0.1)",
                color:
                  localizedProject.type === "game"
                    ? "#ffc45c"
                    : "rgb(var(--terra-rgb))",
              }}
            >
              {localizedProject.type === "game"
                ? t("projects.game")
                : t("projects.application")}
            </span>
          </div>
        </div>

        <p className={descriptionClass}>{localizedProject.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {localizedProject.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full bg-ink/[0.06] text-ink-muted font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[12px] text-ink-faint font-medium shrink-0 ml-3">
            {localizedProject.year}
          </span>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {hasDetail && (
            <span className="flex items-center gap-1.5 text-[13px] text-terra font-medium group-hover:gap-2.5 transition-all duration-200">
              {t("projects.fullDescription")}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          {localizedProject.link && !hasDetail && (
            <a
              href={localizedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-[13px] text-terra font-medium hover:gap-2.5 transition-all duration-200"
            >
              {t("projects.viewProject")}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );

  if (hasDetail) {
    return (
      <div className={`h-full ${spanClass}`}>
        <Link
          href={`/proyectos/${localizedProject.id}`}
          className="block h-full"
        >
          {cardInner}
        </Link>
      </div>
    );
  }

  return <div className={`h-full ${spanClass}`}>{cardInner}</div>;
}
