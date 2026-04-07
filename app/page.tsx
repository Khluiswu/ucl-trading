import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";
import StatsBar from "@/components/StatsBar";
import Events from "@/components/Events";
import CTA from "@/components/CTA";
import Research from "@/components/Research";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <StatsBar />
      <Overview />
      <Divisions />
      <Events />
      <CTA />
    </main>
  );
}