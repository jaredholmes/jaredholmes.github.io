import styles from "./TopBar.module.css";

export function TopBar({ name }: { name: string }) {
  return (
    <header className={styles.bar}>
      <a href="#top" className={styles.name}>
        {name}
      </a>
    </header>
  );
}
