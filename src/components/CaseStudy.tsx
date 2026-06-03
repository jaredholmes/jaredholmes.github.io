import type { CaseStudy as CaseStudyData } from "../data/caseStudies";
import { Section } from "./Section";
import { Visual } from "./Visual";
import { Stat } from "./Stat";
import styles from "./CaseStudy.module.css";

export function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <article id={study.id} className={styles.study}>
      <header className={styles.hero}>
        <span className={styles.company}>
          <a
            href={study.companyUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.logoLink}
          >
            <img
              src={study.logo}
              alt={study.company}
              className={styles.logo}
              style={study.logoHeight ? { height: study.logoHeight } : undefined}
              draggable={false}
            />
          </a>
        </span>
        <h2 className={styles.title}>{study.title}</h2>
        <p className={styles.framing}>{study.framing}</p>
        <div className={styles.meta}>
          <span>{study.meta.role}</span>
          {study.meta.team && <span>{study.meta.team}</span>}
        </div>
        <div className={styles.outcome}>
          <Stat value={study.outcome} />
        </div>
        {study.link && (
          <a
            className={styles.ctaSecondary}
            href={study.link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {study.link.label}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </header>

      <Visual
        caption={study.hero.caption}
        variant={study.hero.variant ?? "annotated"}
        video={study.hero.video}
      />

      <div className={styles.sections}>
        {study.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </article>
  );
}
