import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import styles from "./Contact.module.css";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className={`glass ${styles.panel}`}>
            <p className="eyebrow">{"//"} 05 · ping</p>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.body}>{t("body")}</p>

            <div className={styles.actions}>
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={16} /> {t("emailCta")}
              </a>
            </div>

            <ul className={styles.details}>
              <li>
                <Mail size={15} className={styles.detailIcon} />
                <a href={`mailto:${profile.email}`} className={styles.detailLink}>
                  {profile.email}
                </a>
              </li>
              <li>
                <Phone size={15} className={styles.detailIcon} />
                <a href={profile.phoneHref} className={styles.detailLink}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <MapPin size={15} className={styles.detailIcon} />
                <span>{t("location")}</span>
              </li>
              <li>
                <GitHubIcon size={15} className={styles.detailIcon} />
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailLink}
                >
                  GitHub
                </a>
              </li>
              <li>
                <LinkedInIcon size={15} className={styles.detailIcon} />
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailLink}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
