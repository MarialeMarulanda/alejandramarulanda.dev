import { useTranslations } from "next-intl";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {profile.name}. {t("rights")}
        </p>

        <div className={styles.socials}>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialLink}
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <LinkedInIcon size={18} />
          </a>
        </div>

        <p className={styles.builtWith}>{t("builtWith")}</p>
      </div>
    </footer>
  );
}
