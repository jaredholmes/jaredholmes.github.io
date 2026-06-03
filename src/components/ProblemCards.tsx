import type { ProblemCard } from "../data/caseStudies";
import styles from "./ProblemCards.module.css";

export function ProblemCards({ cards }: { cards: ProblemCard[] }) {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div key={card.title} className={styles.card}>
          <h4 className={styles.title}>{card.title}</h4>
          <ul className={styles.points}>
            {card.points.map((point, i) => (
              <li key={i} className={styles.point}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
