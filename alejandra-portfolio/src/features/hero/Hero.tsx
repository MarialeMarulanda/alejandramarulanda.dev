import { useTranslations } from "next-intl";
import { ArrowDown, FileDown, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { images } from "@/data/images";
import styles from "./Hero.module.css";

const HERO_TAGS = ["IoT", "5G", "TCP/IP", "Antennas", "Node.js", "Cybersecurity"];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <Reveal>
            <h1 className={styles.title}>
              <span className={styles.greeting}>{t("greeting")}</span>
              <span className={styles.name}>{t("name")}</span>
              <span className={`gradient-text ${styles.role}`}>{t("role")}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={styles.tagline}>{t("tagline")}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className={styles.tags} aria-hidden="true">
              {HERO_TAGS.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className={styles.ctas}>
              <Link href="/proyectos" className="btn btn-primary">
                {t("ctaProjects")}
              </Link>
              <Link href="/contacto" className="btn btn-ghost">
                <Send size={16} /> {t("ctaContact")}
              </Link>
              <a href={profile.cvPath} className="btn btn-ghost" download>
                <FileDown size={16} /> {t("ctaCv")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className={styles.socials}>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialBtn}
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialBtn}
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className={styles.portraitWrap}>
          <div className={styles.portraitRing}>
            <img
              src={images.profile}
              alt={t("name")}
              className={styles.portrait}
              width={800}
              height={800}
            />
          </div>
        </Reveal>
      </div>

      <a href="#home-more" className={styles.scrollHint}>
        <span>{t("scroll")}</span>
        <ArrowDown size={16} className={styles.scrollArrow} />
      </a>

      <p className={styles.locationBadge}>
        <MapPin size={14} /> {t("location")}
      </p>
    </section>
  );
}
