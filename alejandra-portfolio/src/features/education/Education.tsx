import { useTranslations } from "next-intl";
import { GraduationCap, Award } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { education } from "@/data/education";
import styles from "./Education.module.css";

export default function Education() {
  const t = useTranslations("education");
  const certifications = t.raw("certifications") as string[];

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader index="04" slug="handshake" title={t("title")} />

        <div className={styles.grid}>
          <div className={styles.degrees}>
            {education.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <article className={`glass glass-hover ${styles.degree}`}>
                  <span className={styles.degreeIcon}>
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <h3 className={styles.degreeTitle}>
                      {t(`items.${item.id}.degree`)}
                    </h3>
                    <p className={styles.school}>{t(`items.${item.id}.school`)}</p>
                  </div>
                  <span className={styles.period}>
                    {t(`items.${item.id}.period`)}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <aside className={`glass ${styles.certs}`}>
              <h3 className={styles.certsTitle}>
                <Award size={18} className={styles.certsIcon} />
                {t("certificationsTitle")}
              </h3>
              <ul className={styles.certsList}>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
