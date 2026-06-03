import { useMemo } from "react";
import { caseStudies } from "./data/caseStudies";
import { about } from "./data/about";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { TopBar } from "./components/TopBar";
import { SideIndex, type IndexEntry } from "./components/SideIndex";
import { CaseStudy } from "./components/CaseStudy";
import { About } from "./components/About";
import { ContactButton } from "./components/ContactButton";
import styles from "./App.module.css";

export default function App() {
  const entries = useMemo<IndexEntry[]>(
    () => [
      ...caseStudies.map((s) => ({
        id: s.id,
        label: s.shortTitle,
        meta: s.company,
        kind: "study",
      })),
      { id: "about", label: "About", kind: "about" },
    ],
    [],
  );
  const ids = useMemo(() => entries.map((e) => e.id), [entries]);
  const { activeId, progress } = useScrollSpy(ids);

  return (
    <>
      <span id="top" />
      <h1 className="visually-hidden">
        {about.name} — {about.tagline}
      </h1>
      <TopBar name={about.name} entries={entries} activeId={activeId} />

      <div className={styles.layout}>
        <main className={styles.content}>
          {caseStudies.map((study) => (
            <CaseStudy key={study.id} study={study} />
          ))}
          <About />
        </main>
        <aside className={styles.aside}>
          <SideIndex entries={entries} activeId={activeId} progress={progress} />
        </aside>
      </div>

      <ContactButton />
    </>
  );
}
