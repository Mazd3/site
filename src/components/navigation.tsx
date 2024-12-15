import { IconHome, IconPackage, IconStack } from "@tabler/icons-react";

import { LayoutLink } from "./layout-link";

import styles from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <LayoutLink icon={<IconHome />} href="#about" text="Home" />
      <LayoutLink icon={<IconStack />} href="#skills" text="Skills" />
      <LayoutLink icon={<IconPackage />} href="#projects" text="Projects" />
    </nav>
  );
};
