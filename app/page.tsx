import Hero from "@/components/Hero";
import PartnerStrip from "@/components/PartnerStrip";
import Divisions from "@/components/Divisions";
import StatsBar from "@/components/StatsBar";
import Events from "@/components/Events";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <PartnerStrip />
      <StatsBar />
      <Overview />
      <Divisions />
      <Events />
      <Partners />
      <CTA />
    </main>
  );
}
