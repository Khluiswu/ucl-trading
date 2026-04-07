export default function Ticker() {
  return (
    <div className="bg-black border-b border-gray-800 overflow-hidden">
      <div className="whitespace-nowrap animate-scroll text-xs text-gray-400 py-1">
        <span className="mx-6">NASDAQ 9,420.15 <span className="text-red-500">-1.23%</span></span>
        <span className="mx-6">EUR/USD 1.0847 <span className="text-green-400">+0.15%</span></span>
        <span className="mx-6">GOLD 2,341.80 <span className="text-green-400">+0.63%</span></span>
        <span className="mx-6">VIX 13.25 <span className="text-red-500">-2.41%</span></span>
        <span className="mx-6">CRUDE 78.45 <span className="text-green-400">+1.12%</span></span>
      </div>
    </div>
  );
}