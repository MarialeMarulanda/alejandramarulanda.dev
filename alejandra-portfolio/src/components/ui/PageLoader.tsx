"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./PageLoader.module.css";

const MAX_WAIT_MS = 2000;

export default function PageLoader() {
  const t = useTranslations("loader");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let done = false;
    const hide = () => {
      if (done) return;
      done = true;
      setHidden(true);
    };

    if (document.readyState === "complete") {
      hide();
      return;
    }

    window.addEventListener("load", hide);
    const timeout = window.setTimeout(hide, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`${styles.loader} ${hidden ? styles.loaderHidden : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={hidden}
    >
      <span className={styles.mark}>
        <span className={styles.ring} />
        <span className={styles.dot}>AM</span>
      </span>
      <span className="sr-only">{t("label")}</span>
    </div>
  );
}
