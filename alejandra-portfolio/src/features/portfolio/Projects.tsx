import { useTranslations } from "next-intl";
import { Satellite, Radio, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { images } from "@/data/images";
import styles from "./Projects.module.css";

const PROJECT_ICONS = {
  iot: Satellite,
  antenna: Radio,
  thesis: ShieldCheck,
} as const;

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader index="03" slug="deployments" title={t("title")} />

        <div className={styles.grid}>
          {projects.map((project, i) => {
            const Icon = PROJECT_ICONS[project.id];
            const points = t.raw(`items.${project.id}.points`) as string[];
            return (
              <Reveal
                key={project.id}
                delay={i * 0.1}
                className={project.featured ? styles.featured : undefined}
              >
                <article className={`glass glass-hover ${styles.card}`}>
                  <div className={styles.thumb}>
                    <img
                      src={images.projects[project.id]}
                      alt={t(`items.${project.id}.title`)}
                      loading="lazy"
                      width={1200}
                      height={675}
                    />
                  </div>
                  <header className={styles.cardHeader}>
                    <span className={styles.iconWrap}>
                      <Icon size={20} />
                    </span>
                    <p className={styles.meta}>
                      {t(`items.${project.id}.org`)} ·{" "}
                      {t(`items.${project.id}.period`)}
                    </p>
                  </header>

                  <h3 className={styles.title}>
                    {t(`items.${project.id}.title`)}
                  </h3>

                  <ul className={styles.points}>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <ul className={styles.tech}>
                    {project.technologies.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
