import Ticker from "@/components/Ticker";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Ticker />
      <Navbar />

      <div className="flex justify-between">
        <Hero />
        <div className="mt-40 mr-20">
          <StatsCard />
        </div>
      </div>
    </main>
  );
}