import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandSpotify,
  IconBrandSteam,
  IconBrandTelegram,
} from "@tabler/icons-react";

import { LayoutLink } from "./layout-link";

import styles from "./socials.module.css";

export const Socials = () => {
  return (
    <div className={styles["socials"]}>
      <LayoutLink
        icon={<IconBrandTelegram />}
        href="https://t.me/Mazd3"
        text="Telegram"
      />
      <LayoutLink
        icon={<IconBrandGithub />}
        href="https://github.com/Mazd3"
        text="Github"
      />
      <LayoutLink
        icon={<IconBrandDiscord />}
        href="https://discord.com/users/249552049526538241"
        text="Discord"
      />
      <LayoutLink
        icon={<IconBrandSpotify />}
        href="https://open.spotify.com/user/nikitahz"
        text="Spotify"
      />
      <LayoutLink
        icon={<IconBrandSteam />}
        href="https://steamcommunity.com/id/m4zd3/"
        text="Steam"
      />
    </div>
  );
};
