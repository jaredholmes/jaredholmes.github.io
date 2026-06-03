import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import styles from "./Prose.module.css";

const components: Components = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer noopener" className={styles.link}>
      {children}
    </a>
  ),
  // Markdown ### sub-sections render one level below the section heading (h3).
  h3: ({ children }) => <h4 className={styles.subheading}>{children}</h4>,
};

export function Prose({ children }: { children: string }) {
  return (
    <div className={styles.prose}>
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
}
