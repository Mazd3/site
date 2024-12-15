import Image from "next/image";

import { About } from "@/types/about";

import styles from "./about-me.module.css";

interface AboutProps {
  about: About;
  id: string;
}

export const AboutMe: React.FC<AboutProps> = ({ about, id }) => {
  return (
    <div id={id} className={styles["about-me"]}>
      <Image
        className={styles["about-me__image"]}
        width={240}
        height={240}
        src={about.image}
        alt="Avatar"
      />
      <Image
        className={styles["about-me__image-blurred"]}
        width={240}
        height={240}
        src={about.image}
        alt="Avatar blurred"
      />
      <div className={styles["about-me__info"]}>
        <span className={styles["about-me__info-subtitle"]}>
          {about.subtitle}
        </span>
        <h1 className={styles["about-me__info-title"]}>{about.name}</h1>
        <p className={styles["about-me__info-description"]}>
          {about.description}
        </p>
      </div>
    </div>
  );
};
