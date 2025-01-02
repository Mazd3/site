import styles from "./layout-link-list.module.css";

export const LayoutLinkList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles["layout-link-list"]}>{children}</div>;
};
