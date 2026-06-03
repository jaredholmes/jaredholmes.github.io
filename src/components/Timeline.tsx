import type { TimelineStep } from "../data/caseStudies";
import styles from "./Timeline.module.css";

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className={styles.timeline}>
      {steps.map((step) => (
        <li key={step.n} className={styles.step}>
          <div className={styles.rail} aria-hidden="true">
            <span className={styles.node}>{step.n}</span>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>{step.title}</h4>
            {step.visual && (
              <div className={styles.visualHint}>
                <span className={styles.visualTag}>Visual</span>
                <span className={styles.visualText}>{step.visual}</span>
              </div>
            )}
            <p className={styles.body}>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
