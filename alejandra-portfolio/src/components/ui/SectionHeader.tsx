import Reveal from "./Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  index: string;
  slug: string;
  title: string;
};

export default function SectionHeader({ index, slug, title }: SectionHeaderProps) {
  return (
    <Reveal className={styles.header}>
      <p className="eyebrow">
        {"//"} {index} · {slug}
      </p>
      <h2 className={styles.title}>{title}</h2>
    </Reveal>
  );
}
