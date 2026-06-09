import { useEffect, useRef, useState } from "react";
import { about, type Highlight } from "../data/about";
import { useReveal } from "../hooks/useReveal";
import { Prose } from "./Prose";
import jaredPhoto from "../img/jared/jared.jpeg";
import iconProductDesign from "../img/icons/product-design-strategy.svg";
import iconPrototyping from "../img/icons/prototyping.svg";
import iconServiceDesign from "../img/icons/service-design.svg";
import iconDesignSystems from "../img/icons/design-systems.svg";
import iconResearch from "../img/icons/research.svg";
import iconDesignOps from "../img/icons/design-ops.svg";
import styles from "./About.module.css";

const disciplineIcons: Record<string, string> = {
  "Holistic product design and strategy": iconProductDesign,
  "Prototyping": iconPrototyping,
  "Service design": iconServiceDesign,
  "Design systems": iconDesignSystems,
  "User research": iconResearch,
  "Design ops and org building": iconDesignOps,
};

function useGmt2Time(): string {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Johannesburg",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function HighlightCard({
  item,
  active,
  time,
}: {
  item: Highlight;
  active: boolean;
  time: string;
}) {
  return (
    <div className={`${styles.card} ${active ? styles.cardActive : ""}`}>
      <span className={styles.cardLabel}>{item.label}</span>
      {"live" in item ? (
        <>
          <span className={styles.cardValue}>{time}</span>
          <span className={styles.cardSuffix}>{item.suffix}</span>
        </>
      ) : (
        <span className={styles.cardValue}>{item.value}</span>
      )}
      {"live" in item && item.note && (
        <span className={styles.cardNote}>{item.note}</span>
      )}
    </div>
  );
}

function Highlights() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const time = useGmt2Time();
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!visible || reduceMotion()) return;
    // Start cycling after the reveal animation completes (~600ms = --dur-long).
    const timer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActiveIdx((i) => (i + 1) % about.highlights.length);
      }, 2000);
    }, 700);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`${styles.highlights} ${visible ? styles.visible : ""}`}
    >
      {about.highlights.map((item, i) => (
        <HighlightCard
          key={item.label}
          item={item}
          active={visible && activeIdx === i}
          time={time}
        />
      ))}
    </div>
  );
}

export function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`${styles.about} ${visible ? styles.visible : ""}`}
    >
      <span className={styles.label}>About</span>
      <div className={styles.nameRow}>
        <h2 className={styles.name}>{about.name}</h2>
        <img className={styles.photo} src={jaredPhoto} alt="Jared Holmes" />
      </div>

      <Highlights />

      <Prose>{about.intro}</Prose>

      <div className={styles.disciplines}>
        {about.disciplines.map((d) => (
          <div key={d} className={styles.disciplineCard}>
            {disciplineIcons[d] && (
              <img
                className={styles.disciplineIcon}
                src={disciplineIcons[d]}
                alt=""
                aria-hidden="true"
              />
            )}
            {d}
          </div>
        ))}
      </div>

      <Prose>{about.outro}</Prose>
    </section>
  );
}
