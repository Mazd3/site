import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandSpotify,
  IconBrandSteam,
  IconBrandTelegram,
} from "@tabler/icons-react";

import { LayoutLink } from "./layout-link";

import styles from "./layout-link-list.module.css";

export const LayoutLinkList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles["layout-link-list"]}>{children}</div>;
};
