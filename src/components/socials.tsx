import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandSpotify,
  IconBrandSteam,
  IconBrandTelegram,
} from "@tabler/icons-react";

import { LayoutLink } from "./layout-link";

export const Socials = () => {
  return (
    <>
      <LayoutLink
        type="socials"
        icon={<IconBrandTelegram />}
        href="https://t.me/Mazd3"
        text="Telegram"
      />
      <LayoutLink
        type="socials"
        icon={<IconBrandGithub />}
        href="https://github.com/Mazd3"
        text="Github"
      />
      <LayoutLink
        type="socials"
        icon={<IconBrandDiscord />}
        href="https://discord.com/users/249552049526538241"
        text="Discord"
      />
      <LayoutLink
        type="socials"
        icon={<IconBrandSpotify />}
        href="https://open.spotify.com/user/nikitahz"
        text="Spotify"
      />
      <LayoutLink
        type="socials"
        icon={<IconBrandSteam />}
        href="https://steamcommunity.com/id/m4zd3/"
        text="Steam"
      />
    </>
  );
};
