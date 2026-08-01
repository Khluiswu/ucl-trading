import type { Metadata } from "next";
import Insights from "@/components/Insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Interviews with market practitioners and research written by the divisions of UCL Trading Society.",
};

export default function InsightsPage() {
  return <Insights />;
}
