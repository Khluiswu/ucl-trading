import type { Metadata } from "next";
import Insights from "@/components/Insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Interviews with people working in the market, plus research from the desks at UCL Trading Society.",
};

export default function InsightsPage() {
  return <Insights />;
}
