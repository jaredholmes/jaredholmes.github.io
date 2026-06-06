import styles from "./Disclaimer.module.css";

export function Disclaimer({ text }: { text: string }) {
  return (
    <p className={styles.disclaimer}>
      <svg
        className={styles.icon}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        {/* shackle */}
        <path
          d="M3.5 5V3.5a2.5 2.5 0 0 1 5 0V5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        {/* body */}
        <rect
          x="1.5"
          y="5"
          width="9"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.25"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* keyhole dot */}
        <circle cx="6" cy="8" r="1" fill="currentColor" />
      </svg>
      {text}
    </p>
  );
}
