import { Navigation } from "@/components/navigation";
import { Socials } from "@/components/socials";
import { AboutMe } from "@/components/about-me";
import { ProjectList } from "@/components/project-list";
import { SkillList } from "@/components/skill-list";

import styles from "./page.module.css";

import { ABOUT } from "@/data/about";
import { SKILLS } from "@/data/skills";
import { PROJECTS } from "@/data/projects";
import { LayoutLinkList } from "@/components/layout-link-list";

export default function Home() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <LayoutLinkList>
          <Navigation />
        </LayoutLinkList>
      </header>
      <main className={styles.main}>
        <AboutMe id="about" about={ABOUT} />
        <SkillList id="skills" skills={SKILLS} />
        <ProjectList id="projects" projects={PROJECTS} />
      </main>
      <footer className={styles.footer}>
        <LayoutLinkList>
          <Socials />
        </LayoutLinkList>
      </footer>
    </div>
  );
}
