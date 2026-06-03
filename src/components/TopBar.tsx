import { useState, useCallback, useEffect } from "react";
import type { IndexEntry } from "./SideIndex";
import styles from "./TopBar.module.css";

export function TopBar({
  name,
  entries,
  activeId,
}: {
  name: string;
  entries: IndexEntry[];
  activeId: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = useCallback(() => setMenuOpen((o) => !o), []);
  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.bar}>
        <a href="#top" className={styles.name}>
          {name}
        </a>
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={toggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </header>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Page sections">
          <ul className={styles.mobileList}>
            {entries.map((entry, i) => {
              const active = entry.id === activeId;
              return (
                <li
                  key={entry.id}
                  className={styles.mobileItem}
                  style={{ "--stagger": i } as React.CSSProperties}
                >
                  <a
                    href={`#${entry.id}`}
                    className={`${styles.mobileLink} ${active ? styles.mobileActive : ""}`}
                    onClick={close}
                    aria-current={active ? "true" : undefined}
                  >
                    <span className={styles.mobileNum}>
                      {entry.kind === "about"
                        ? "—"
                        : String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.mobileLabel}>{entry.label}</span>
                    {entry.meta && (
                      <span className={styles.mobileMeta}>{entry.meta}</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
