import { useEffect, useRef, useState } from "react";
import { contactLinks } from "../data/contact";
import { CopyButton } from "./CopyButton";
import styles from "./ContactButton.module.css";

export function ContactButton() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.root}>
      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        role="dialog"
        aria-label="Contact links"
        aria-hidden={!open}
      >
        <span className={styles.panelTitle}>Get in touch</span>
        <ul className={styles.links}>
          {contactLinks.map((link) => (
            <li key={link.id} className={styles.row}>
              <a
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel="noreferrer noopener"
                className={styles.link}
                tabIndex={open ? 0 : -1}
              >
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkValue}>{link.display}</span>
              </a>
              <CopyButton value={link.copyValue} label={`${link.label} ${link.id === "email" ? "address" : "link"}`} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact links" : "Open contact links"}
        data-open={open || undefined}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 6.5C4 5.7 4.7 5 5.5 5h13c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-13C4.7 19 4 18.3 4 17.5v-11Zm1.6.2 6.4 4.8 6.4-4.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>
    </div>
  );
}
