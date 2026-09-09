import { SOCIETY_LINKS } from "@/lib/society";
import { MAVEN_EVENT } from "@/content/maven-event";

export const homeAnnouncementVersion = "2026-27-maven-launch-1";

export const homeAnnouncements = [
  {
    eyebrow: "Committee / Coming soon",
    title: "Join the team",
    description:
      "Committee applications are opening soon. New opportunities across the society, full details and the application form will be announced shortly.",
    status: "Applications opening soon",
    cta: "Follow for the launch",
    href: SOCIETY_LINKS.instagram,
    accent: "yellow" as const,
  },
  {
    eyebrow: "Maven Securities / In-house",
    title: MAVEN_EVENT.name,
    description:
      "Visit Maven's London office on 24 September or 8 October. Meet its traders, take on market-making games and explore careers in trading and quantitative research.",
    status: "Applications open · 15 places per day",
    cta: "Apply by 15 September",
    href: MAVEN_EVENT.applicationUrl,
    accent: "green" as const,
  },
] as const;
