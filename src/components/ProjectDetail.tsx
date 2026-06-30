"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project, ContentBlock } from "@/data/projects";
import { DeviceMockup } from "./DeviceMockup";
import { LanguageContext } from "./LanguageProvider";
import { getLocalizedProject } from "@/i18n/translations";

function Block({ block, i }: { block: ContentBlock; i: number }) {
  const base = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay: i * 0.05 },
  };

  switch (block.type) {
    case "text":
      return (
        <motion.p
          {...base}
          className="text-base text-ink-muted leading-relaxed"
        >
          {block.content}
        </motion.p>
      );

    case "heading":
      return (
        <motion.h3 {...base} className="font-serif text-2xl text-ink mt-2">
          {block.content}
        </motion.h3>
      );

    case "list":
      return (
        <motion.ul {...base} className="space-y-2">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-sm text-ink-muted"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terra shrink-0" />
              {item}
            </li>
          ))}
        </motion.ul>
      );

    case "image":
      return (
        <motion.figure
          {...base}
          className="rounded-xl overflow-hidden border border-ink/[0.07]"
        >
          <img
            src={block.src}
            alt={block.caption ?? ""}
            className="w-full object-cover"
          />
          {block.caption && (
            <figcaption className="px-4 py-2 text-xs text-ink-faint bg-ink/[0.03]">
              {block.caption}
            </figcaption>
          )}
        </motion.figure>
      );

    case "images":
      return (
        <motion.div {...base} className="grid grid-cols-2 gap-3">
          {block.srcs.map((src, j) => (
            <div
              key={j}
              className="rounded-xl overflow-hidden border border-ink/[0.07]"
            >
              <img src={src} alt="" className="w-full object-cover" />
            </div>
          ))}
          {block.caption && (
            <p className="col-span-2 text-xs text-ink-faint">{block.caption}</p>
          )}
        </motion.div>
      );

    case "video": {
      const isDirectMp4 = block.url.toLowerCase().includes(".mp4");

      return (
        <motion.div
          {...base}
          className="rounded-xl overflow-hidden border border-ink/[0.07] aspect-video"
        >
          {isDirectMp4 ? (
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
              onClick={(event) => {
                const video = event.currentTarget;
                if (video.paused) {
                  void video.play();
                } else {
                  void video.pause();
                }
              }}
            >
              <source src={block.url} type="video/mp4" />
            </video>
          ) : (
            <iframe
              src={block.url}
              title={block.caption ?? "Video"}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {block.caption && (
            <p className="px-4 py-2 text-xs text-ink-faint bg-ink/[0.03]">
              {block.caption}
            </p>
          )}
        </motion.div>
      );
    }

    case "highlight":
      return (
        <motion.div
          {...base}
          className="p-5 rounded-xl border border-terra/20 bg-terra/[0.04] flex items-center gap-5"
        >
          <span className="text-xs font-medium text-terra uppercase tracking-widest shrink-0">
            {block.label}
          </span>
          <span className="font-serif text-xl text-ink">{block.value}</span>
        </motion.div>
      );

    default:
      return null;
  }
}

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { language, t } = useContext(LanguageContext);
  const localizedProject = getLocalizedProject(project, language);
  const { detail } = localizedProject;
  if (!detail) return null;

  const platformLabel: Record<string, string> = {
    web: t("projectDetail.platform.web"),
    mobile: t("projectDetail.platform.mobile"),
    desktop: t("projectDetail.platform.desktop"),
    "web+mobile": t("projectDetail.platform.web+mobile"),
  };

  return (
    <main className="min-h-screen bg-cream">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between bg-cream/80 backdrop-blur-sm border-b border-ink/[0.06]">
        <Link
          href="/#proyectos"
          className="flex items-center gap-2 text-sm text-ink-muted hover:text-terra transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t("projectDetail.projects")}
        </Link>
        <span className="font-serif text-ink text-sm">
          {localizedProject.title}
        </span>
      </nav>

      <div className="pt-24 pb-12 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-8 mb-12"
          >
            <div
              className="rounded-2xl flex items-end justify-center pt-8 pb-6 px-8 overflow-hidden shrink-0"
              style={{ background: localizedProject.color, minWidth: 160 }}
            >
              <DeviceMockup
                platform={project.platform}
                color={project.color}
                image={localizedProject.images ?? localizedProject.image}
              />
            </div>

            <div className="pt-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-ink-faint uppercase tracking-widest">
                  {platformLabel[localizedProject.platform]}
                </span>
                <span className="text-ink-faint/40">·</span>
                <span className="text-xs font-medium text-ink-faint">
                  {localizedProject.year}
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-3">
                {localizedProject.title}
              </h1>

              {localizedProject.importance === "ACT" && (
                <div className="mb-4 rounded-2xl border border-amber-300/70 bg-amber-400/15 p-3 shadow-[0_10px_35px_-20px_rgba(245,158,11,0.55)]">
                  <p className="text-sm font-medium text-amber-900">
                    {t("projectDetail.working")}
                  </p>
                </div>
              )}

              {detail.tagline && (
                <p className="text-base text-terra font-medium mb-4">
                  {detail.tagline}
                </p>
              )}

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
            </div>
          </motion.div>

          <div className="space-y-6 border-t border-ink/[0.06] pt-10">
            {detail.content.map((block, i) => (
              <Block key={i} block={block} i={i} />
            ))}
          </div>

          {detail.links && detail.links.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 pt-8 border-t border-ink/[0.06] flex flex-wrap gap-3"
            >
              {detail.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/20 text-sm font-medium text-ink hover:border-terra hover:text-terra transition-all duration-200"
                >
                  {link.label}
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
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
