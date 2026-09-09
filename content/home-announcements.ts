import { SOCIETY_LINKS } from "@/lib/society";

export const homeAnnouncementVersion = "2026-27-preview-1";

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
    eyebrow: "Industry access / Limited seats",
    title: "In-house insight day",
    description:
      "Applications will open soon for a small-group insight day. The host, date and application form will be revealed when applications launch.",
    status: "Limited places",
    cta: "Join the updates",
    href: SOCIETY_LINKS.whatsapp,
    accent: "green" as const,
  },
] as const;
