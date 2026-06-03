import styles from "./Stat.module.css";

export function Stat({ value }: { value: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.label}>Outcome</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
