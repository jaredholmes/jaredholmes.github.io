import { about } from "../data/about";
import { useReveal } from "../hooks/useReveal";
import styles from "./About.module.css";

export function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`${styles.about} ${visible ? styles.visible : ""}`}
    >
      <span className={styles.label}>About</span>
      <h2 className={styles.name}>{about.name}</h2>
      <p className={styles.tagline}>{about.tagline}</p>
      <div className={styles.metaRow}>
        <span>{about.location}</span>
        <span aria-hidden="true">·</span>
        <span>{about.availability}</span>
      </div>
      <div className={styles.body}>
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
