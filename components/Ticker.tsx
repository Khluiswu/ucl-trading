"use client";

const tickerItems = [
  { symbol: "S&P 500", value: "5,243.77", change: "+0.87%", up: true },
  { symbol: "FTSE 100", value: "8,147.32", change: "+0.42%", up: true },
  { symbol: "BTC/USD", value: "69,420.15", change: "-1.23%", up: false },
  { symbol: "EUR/USD", value: "1.0847", change: "+0.15%", up: true },
  { symbol: "GOLD", value: "2,341.80", change: "+0.63%", up: true },
  { symbol: "VIX", value: "13.25", change: "-2.41%", up: false },
  { symbol: "CRUDE OIL", value: "78.45", change: "+1.12%", up: true },
  { symbol: "GBP/USD", value: "1.2634", change: "-0.08%", up: false },
  { symbol: "NIKKEI 225", value: "39,821.55", change: "+1.34%", up: true },
  { symbol: "UCL TS", value: "NEXT EVENT: APR 15", change: "→", up: true },
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
            <span className="text-gray-400">{item.symbol}</span>
            <span className="text-white">{item.value}</span>
            <span className={item.up ? "text-green-400" : "text-red-500"}>
              {item.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}