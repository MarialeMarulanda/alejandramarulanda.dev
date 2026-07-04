import { useTranslations } from "next-intl";
import {
  ArrowRight,
  GraduationCap,
  Mail,
  Route,
  Satellite,
  User,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/routing";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { images } from "@/data/images";
import styles from "./HomeContent.module.css";

const EXPLORE_ITEMS: {
  href: Exclude<AppPathname, "/">;
  key: "about" | "experience" | "projects" | "education" | "contact";
  icon: typeof User;
}[] = [
  { href: "/sobre-mi", key: "about", icon: User },
  { href: "/experiencia", key: "experience", icon: Route },
  { href: "/proyectos", key: "projects", icon: Satellite },
  { href: "/educacion", key: "education", icon: GraduationCap },
  { href: "/contacto", key: "contact", icon: Mail },
];

export default function HomeContent() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const tProjects = useTranslations("projects");

  const stats = t.raw("stats") as { value: string; label: string }[];
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const featuredPoints = (
    tProjects.raw(`items.${featured.id}.points`) as string[]
  ).slice(0, 2);

  return (
    <div id="home-more">
      {/* Stats strip */}
      <section className="section" aria-label={t("exploreTitle")}>
        <div className="container">
          <Reveal>
            <ul className={`glass ${styles.stats}`}>
              {stats.map((stat) => (
                <li key={stat.label} className={styles.stat}>
                  <span className={`gradient-text ${styles.statValue}`}>
                    {stat.value}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Explore grid */}
          <Reveal delay={0.1}>
            <p className={`eyebrow ${styles.exploreEyebrow}`}>
              {"//"} {t("exploreSubtitle")}
            </p>
            <h2 className={styles.exploreTitle}>{t("exploreTitle")}</h2>
          </Reveal>

          <div className={styles.exploreGrid}>
            {EXPLORE_ITEMS.map(({ href, key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 0.07}>
                <Link href={href} className={`glass glass-hover ${styles.exploreCard}`}>
                  <span className={styles.exploreIcon}>
                    <Icon size={20} />
                  </span>
                  <span className={styles.exploreName}>{tNav(key)}</span>
                  <span className={styles.exploreDesc}>{t(`explore.${key}`)}</span>
                  <span className={styles.exploreGo}>
                    {t("goTo")} <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="section" aria-label={t("featuredTitle")}>
        <div className="container">
          <Reveal>
            <div className={`glass ${styles.featured}`}>
              <div className={styles.featuredImage}>
                <img
                  src={images.projects[featured.id]}
                  alt={tProjects(`items.${featured.id}.title`)}
                  loading="lazy"
                  width={1200}
                  height={675}
                />
              </div>
              <div className={styles.featuredBody}>
                <p className="eyebrow">
                  {"//"} {t("featuredTitle")}
                </p>
                <h2 className={styles.featuredTitle}>
                  {tProjects(`items.${featured.id}.title`)}
                </h2>
                <p className={styles.featuredMeta}>
                  {tProjects(`items.${featured.id}.org`)} ·{" "}
                  {tProjects(`items.${featured.id}.period`)}
                </p>
                <ul className={styles.featuredPoints}>
                  {featuredPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className={styles.featuredTech}>
                  {featured.technologies.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link href="/proyectos" className="btn btn-ghost">
                  {t("viewAllProjects")} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" aria-label={t("ctaTitle")}>
        <div className="container">
          <Reveal>
            <div className={`glass ${styles.cta}`}>
              <h2 className={styles.ctaTitle}>{t("ctaTitle")}</h2>
              <p className={styles.ctaBody}>{t("ctaBody")}</p>
              <Link href="/contacto" className="btn btn-primary">
                {t("ctaButton")} <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
