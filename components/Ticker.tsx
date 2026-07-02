"use client";

const tickerItems = [
  { symbol: "S&P 500", value: "6,912.40", change: "+0.54%", up: true },
  { symbol: "NASDAQ", value: "23,148.72", change: "+0.81%", up: true },
  { symbol: "FTSE 100", value: "9,134.65", change: "+0.28%", up: true },
  { symbol: "BTC/USD", value: "117,842.00", change: "-0.92%", up: false },
  { symbol: "ETH/USD", value: "3,486.20", change: "+1.47%", up: true },
  { symbol: "EUR/USD", value: "1.1742", change: "+0.11%", up: true },
  { symbol: "GBP/USD", value: "1.3648", change: "-0.06%", up: false },
  { symbol: "GOLD", value: "3,338.50", change: "+0.39%", up: true },
  { symbol: "BRENT", value: "68.74", change: "-1.05%", up: false },
  { symbol: "US 10Y", value: "4.28%", change: "-3bp", up: false },
  { symbol: "VIX", value: "16.42", change: "+2.18%", up: true },
  { symbol: "NIKKEI 225", value: "40,163.90", change: "+0.66%", up: true },
  { symbol: "UCL TS", value: "RECRUITING FOUNDING MEMBERS", change: "→", up: true },
];

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-8 bg-black border-b border-gray-800 overflow-hidden">
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
