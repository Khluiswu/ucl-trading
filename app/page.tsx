import Hero from "@/components/Hero";
import SupporterStrip from "@/components/SupporterStrip";
import Divisions from "@/components/Divisions";
import Events from "@/components/Events";
import Supporters from "@/components/Supporters";
import CTA from "@/components/CTA";
import Overview from "@/components/Overview";
import AnnouncementsModal from "@/components/AnnouncementsModal";

export default function Home() {
  return (
    <main className="bg-black">
      <AnnouncementsModal />
      <Hero />
      <SupporterStrip />
      <Overview />
      <Divisions />
      <Events />
      <Supporters />
      <CTA />
    </main>
  );
}
