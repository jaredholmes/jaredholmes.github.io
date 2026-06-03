import type { Section as SectionData } from "../data/caseStudies";
import { useReveal } from "../hooks/useReveal";
import { Prose } from "./Prose";
import { Visual } from "./Visual";
import { ProblemCards } from "./ProblemCards";
import { Timeline } from "./Timeline";
import styles from "./Section.module.css";

export function Section({ section }: { section: SectionData }) {
  const { ref, visible, delay } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={section.id}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {section.heading && <h3 className={styles.heading}>{section.heading}</h3>}
      {section.nodes.map((node, i) => {
        switch (node.type) {
          case "prose":
            return <Prose key={i}>{node.md}</Prose>;
          case "visual":
            return <Visual key={i} caption={node.caption} variant={node.variant} />;
          case "problemCards":
            return <ProblemCards key={i} cards={node.cards} />;
          case "timeline":
            return <Timeline key={i} steps={node.steps} />;
          default:
            return null;
        }
      })}
    </section>
  );
}
