"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";
import styles from "./Navigation.module.css";

const NAV_ITEMS: { href: Exclude<AppPathname, "/">; key: string }[] = [
  { href: "/sobre-mi", key: "about" },
  { href: "/experiencia", key: "experience" },
  { href: "/proyectos", key: "projects" },
  { href: "/educacion", key: "education" },
  { href: "/contacto", key: "contact" },
];

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (next: string) => {
    if (next !== locale) {
      router.replace(pathname, { locale: next });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} glass`} aria-label={t("ariaLabel")}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandDot} />
          am<span className={styles.brandTld}>.dev</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {NAV_ITEMS.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={href}
                className={`${styles.link} ${
                  pathname === href ? styles.linkActive : ""
                }`}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <div
            className={styles.localeSwitch}
            role="group"
            aria-label={t("switchLocale")}
          >
            {routing.locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLocale(l)}
                className={`${styles.localeBtn} ${
                  l === locale ? styles.localeActive : ""
                }`}
                aria-pressed={l === locale}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
