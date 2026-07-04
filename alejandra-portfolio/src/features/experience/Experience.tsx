import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader index="02" slug="traceroute" title={t("title")} />

        <ol className={styles.timeline}>
          {experiences.map((exp, i) => {
            const points = t.raw(`items.${exp.id}.points`) as string[];
            return (
              <li key={exp.id} className={styles.hop}>
                <div className={styles.hopMarker} aria-hidden="true">
                  <span className={styles.hopIndex}>
                    hop {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.hopNode} />
                </div>

                <Reveal delay={i * 0.1}>
                  <article className={`glass glass-hover ${styles.card}`}>
                    <header className={styles.cardHeader}>
                      <h3 className={styles.role}>{t(`items.${exp.id}.role`)}</h3>
                      <p className={styles.meta}>
                        <span className={styles.company}>
                          {t(`items.${exp.id}.company`)}
                        </span>
                        <span className={styles.period}>
                          {t(`items.${exp.id}.period`)}
                        </span>
                      </p>
                    </header>

                    <ul className={styles.points}>
                      {points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <ul className={styles.tech}>
                      {exp.technologies.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
