import { useTranslations } from "next-intl";
import Image from "next/image";
import { Network, Code2, Wrench } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { images } from "@/data/images";
import styles from "./About.module.css";

const GROUP_ICONS = {
  networks: Network,
  development: Code2,
  tools: Wrench,
} as const;

const GROUPS = ["networks", "development", "tools"] as const;

/** Signal strength per language level, rendered as bars (telecom metaphor). */
const LEVEL_BARS: Record<string, number> = {
  Nativo: 5,
  Native: 5,
  Avanzado: 4,
  Advanced: 4,
  "Básico": 2,
  Basic: 2,
};

export default function About() {
  const t = useTranslations("about");
  const languages = t.raw("languages") as { name: string; level: string }[];
  const soft = t.raw("soft") as string[];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader index="01" slug="whoami" title={t("title")} />

        <div className={styles.grid}>
          <Reveal className={styles.bio}>
            <div className={styles.photoFrame}>
              <Image
                src={images.profile}
                alt={t("title")}
                className={styles.photo}
                width={800}
                height={800}
                sizes="(max-width: 520px) 55vw, 240px"
              />
            </div>
            <p className={styles.paragraph}>{t("body1")}</p>
            <p className={styles.paragraph}>{t("body2")}</p>

            <h3 className={styles.subheading}>{t("languagesTitle")}</h3>
            <ul className={styles.languages}>
              {languages.map((lang) => (
                <li key={lang.name} className={styles.language}>
                  <span
                    className={styles.signal}
                    aria-hidden="true"
                  >
                    {[1, 2, 3, 4, 5].map((bar) => (
                      <span
                        key={bar}
                        className={`${styles.bar} ${
                          bar <= (LEVEL_BARS[lang.level] ?? 3)
                            ? styles.barOn
                            : ""
                        }`}
                        style={{ height: `${4 + bar * 2}px` }}
                      />
                    ))}
                  </span>
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langLevel}>{lang.level}</span>
                </li>
              ))}
            </ul>

            <h3 className={styles.subheading}>{t("softTitle")}</h3>
            <ul className={styles.soft}>
              {soft.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className={styles.skills}>
            {GROUPS.map((group, i) => {
              const Icon = GROUP_ICONS[group];
              const items = t.raw(`groups.${group}.items`) as string[];
              return (
                <Reveal key={group} delay={i * 0.1}>
                  <article className={`glass glass-hover ${styles.skillCard}`}>
                    <h3 className={styles.skillTitle}>
                      <Icon size={18} className={styles.skillIcon} />
                      {t(`groups.${group}.title`)}
                    </h3>
                    <ul className={styles.skillList}>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
