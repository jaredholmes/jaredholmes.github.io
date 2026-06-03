import styles from "./SideIndex.module.css";

export interface IndexEntry {
  id: string;
  label: string;
  meta?: string;
  kind?: string;
}

export function SideIndex({
  entries,
  activeId,
  progress,
}: {
  entries: IndexEntry[];
  activeId: string;
  progress: number;
}) {
  return (
    <nav className={styles.index} aria-label="Page sections">
      <ul className={styles.list}>
        {entries.map((entry, i) => {
          const active = entry.id === activeId;
          return (
            <li key={entry.id} className={styles.item}>
              <a
                href={`#${entry.id}`}
                className={`${styles.link} ${active ? styles.active : ""}`}
                aria-current={active ? "true" : undefined}
              >
                <span className={styles.num}>
                  {entry.kind === "about" ? "—" : String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.label}>{entry.label}</span>
                {entry.meta && <span className={styles.meta}>{entry.meta}</span>}
              </a>
              {active && (
                <span
                  className={styles.progress}
                  style={{ "--progress": progress } as React.CSSProperties}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
