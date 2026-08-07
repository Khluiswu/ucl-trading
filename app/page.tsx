import Hero from "@/components/Hero";
import SupporterStrip from "@/components/SupporterStrip";
import Divisions from "@/components/Divisions";
import StatsBar from "@/components/StatsBar";
import Events from "@/components/Events";
import Supporters from "@/components/Supporters";
import CTA from "@/components/CTA";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <SupporterStrip />
      <StatsBar />
      <Overview />
      <Divisions />
      <Events />
      <Supporters />
      <CTA />
    </main>
  );
}
