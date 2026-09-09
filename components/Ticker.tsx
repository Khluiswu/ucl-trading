"use client";

import { useEffect, useState } from "react";

type TickerItem = {
  symbol: string;
  value: string;
  change: string;
  up: boolean;
};

type MarketResponse = {
  items?: TickerItem[];
  updatedAt?: string;
};

const tickerFallback: TickerItem[] = [
  { symbol: "S&P 500", value: "7,636.36", change: "+0.06%", up: true },
  { symbol: "NASDAQ", value: "26,253.34", change: "+0.59%", up: true },
  { symbol: "FTSE 100", value: "10,670.06", change: "-0.80%", up: false },
  { symbol: "BTC/USD", value: "77,852.15", change: "-2.47%", up: false },
  { symbol: "ETH/USD", value: "2,445.24", change: "-1.43%", up: false },
  { symbol: "EUR/USD", value: "1.1640", change: "+0.47%", up: true },
  { symbol: "GBP/USD", value: "1.3550", change: "+0.49%", up: true },
  { symbol: "GOLD", value: "4,447.70", change: "-0.98%", up: false },
  { symbol: "BRENT", value: "102.34", change: "+7.14%", up: true },
  { symbol: "US 10Y", value: "4.84%", change: "+4.10bp", up: true },
  { symbol: "VIX", value: "16.46", change: "+14.94%", up: true },
  { symbol: "NIKKEI 225", value: "65,142.78", change: "+1.45%", up: true },
];

export default function Ticker() {
  const [tickerItems, setTickerItems] = useState(tickerFallback);
  const [updatedAt, setUpdatedAt] = useState<string>();
  const items = [...tickerItems, ...tickerItems];

  useEffect(() => {
    let active = true;

    async function refreshMarkets() {
      try {
        const response = await fetch("/api/markets", { cache: "no-store" });
        if (!response.ok) return;

        const payload = (await response.json()) as MarketResponse;
        if (!active || !payload.items?.length) return;

        const updates = new Map(
          payload.items.map((item) => [item.symbol, item]),
        );
        setTickerItems((current) =>
          current.map((item) => updates.get(item.symbol) ?? item),
        );
        setUpdatedAt(payload.updatedAt);
      } catch {
        // Keep the latest known prices if the delayed feed is temporarily unavailable.
      }
    }

    void refreshMarkets();
    const refreshTimer = window.setInterval(refreshMarkets, 5 * 60 * 1000);

    return () => {
      active = false;
      window.clearInterval(refreshTimer);
    };
  }, []);

  const priceTimestamp = updatedAt
    ? new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(updatedAt))
    : "latest available snapshot";

  return (
    <div
      aria-label="Delayed market price ticker"
      title={`Delayed market prices · Updated ${priceTimestamp}`}
      className="fixed top-0 left-0 right-0 z-50 h-8 bg-black border-b border-gray-800 overflow-hidden"
    >
      <div className="flex items-center h-full whitespace-nowrap animate-scroll">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-6 font-mono text-xs"
          >
            <span className="text-gray-500">{item.symbol}</span>
            <span className="text-white">{item.value}</span>
            <span className={item.up ? "text-green-400" : "text-red-500"}>
              {item.change}
            </span>
          </span>
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
