import { NextResponse } from "next/server";

type MarketKind = "price" | "fx" | "yield";

type MarketDefinition = {
  symbol: string;
  providerSymbol: string;
  kind: MarketKind;
};

type YahooChartResponse = {
  chart?: {
    result?: Array<{
      meta?: {
        regularMarketPrice?: number;
        chartPreviousClose?: number;
        previousClose?: number;
        regularMarketTime?: number;
      };
    }>;
    error?: unknown;
  };
};

const MARKETS: MarketDefinition[] = [
  { symbol: "S&P 500", providerSymbol: "^GSPC", kind: "price" },
  { symbol: "NASDAQ", providerSymbol: "^IXIC", kind: "price" },
  { symbol: "FTSE 100", providerSymbol: "^FTSE", kind: "price" },
  { symbol: "BTC/USD", providerSymbol: "BTC-USD", kind: "price" },
  { symbol: "ETH/USD", providerSymbol: "ETH-USD", kind: "price" },
  { symbol: "EUR/USD", providerSymbol: "EURUSD=X", kind: "fx" },
  { symbol: "GBP/USD", providerSymbol: "GBPUSD=X", kind: "fx" },
  { symbol: "GOLD", providerSymbol: "GC=F", kind: "price" },
  { symbol: "BRENT", providerSymbol: "BZ=F", kind: "price" },
  { symbol: "US 10Y", providerSymbol: "^TNX", kind: "yield" },
  { symbol: "VIX", providerSymbol: "^VIX", kind: "price" },
  { symbol: "NIKKEI 225", providerSymbol: "^N225", kind: "price" },
];

function signed(value: number, suffix: string) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}${suffix}`;
}

function formatValue(value: number, kind: MarketKind) {
  if (kind === "fx") return value.toFixed(4);
  if (kind === "yield") return `${value.toFixed(2)}%`;

  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

async function fetchMarket(market: MarketDefinition) {
  const providerSymbol = encodeURIComponent(market.providerSymbol);
  const response = await fetch(
    `https://query1.finance.yahoo.com/v8/finance/chart/${providerSymbol}?interval=1d&range=5d`,
    {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 300 },
    },
  );

  if (!response.ok) {
    throw new Error(`Market feed returned ${response.status}`);
  }

  const payload = (await response.json()) as YahooChartResponse;
  const meta = payload.chart?.result?.[0]?.meta;
  const price = meta?.regularMarketPrice;
  const previousClose = meta?.chartPreviousClose ?? meta?.previousClose;

  if (
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    typeof previousClose !== "number" ||
    !Number.isFinite(previousClose) ||
    previousClose === 0
  ) {
    throw new Error("Market feed did not return a valid price");
  }

  const change =
    market.kind === "yield"
      ? signed((price - previousClose) * 100, "bp")
      : signed(((price - previousClose) / previousClose) * 100, "%");

  return {
    symbol: market.symbol,
    value: formatValue(price, market.kind),
    change,
    up: price >= previousClose,
    marketTime: meta?.regularMarketTime,
  };
}

export async function GET() {
  const results = await Promise.allSettled(MARKETS.map(fetchMarket));
  const items = results.flatMap((result) =>
    result.status === "fulfilled" ? [result.value] : [],
  );

  if (items.length === 0) {
    return NextResponse.json(
      { error: "Market data is temporarily unavailable" },
      { status: 503 },
    );
  }

  const latestMarketTime = Math.max(
    ...items.map((item) => item.marketTime ?? 0),
  );

  return NextResponse.json(
    {
      items: items.map((item) => ({
        symbol: item.symbol,
        value: item.value,
        change: item.change,
        up: item.up,
      })),
      updatedAt: latestMarketTime
        ? new Date(latestMarketTime * 1000).toISOString()
        : new Date().toISOString(),
      delayed: true,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    },
  );
}
