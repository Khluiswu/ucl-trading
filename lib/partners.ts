export type Partner = {
  slug: string;
  name: string;
  /** Compact label used in the logo lockup when no image asset is present. */
  wordmark: string;
  href: string;
  category: string;
  blurb: string;
  /**
   * Per-logo height cap. Plates share a height but hug the logo's width, so
   * capping every logo at the same height would leave the square marks looking
   * light next to a 5:1 wordmark. Each is tuned to roughly equal optical area.
   */
  logoClass?: string;
  /**
   * Mono marks render bare on the black page (`plate: false`). Logos whose
   * brand colour cannot survive that — CCI is a JPEG with a baked-in white
   * background, ICE pairs a blue bracket with black text — keep a white plate,
   * since backing a logo is better than recolouring someone else's mark.
   */
  plate?: boolean;
  /** Flips solid-black artwork to white. Only valid on single-colour marks. */
  invert?: boolean;
};

/** The society itself, for co-branded lockups such as the competition card. */
export const uclts: Partner = {
  slug: "uclts",
  name: "UCL Trading Society",
  wordmark: "UCL Trading Society",
  href: "",
  logoClass: "max-h-11",
  plate: false,
  category: "Host",
  blurb: "UCL Trading Society.",
};

/**
 * UCL's maths society, our collaborator on the Maths & Trading Competition.
 * Not a society partner, so it is kept out of the `partners` list.
 */
export const adm: Partner = {
  slug: "adm",
  name: "ADM — UCL Maths Society",
  wordmark: "ADM",
  href: "",
  logoClass: "max-h-11",
  plate: false,
  invert: true,
  category: "Collaborator",
  blurb:
    "UCL's mathematics society, joining us to run the Maths & Trading Competition.",
};

export const partners: Partner[] = [
  {
    slug: "tradingview",
    name: "TradingView",
    wordmark: "TradingView",
    href: "https://www.tradingview.com/",
    logoClass: "max-h-10",
    plate: false,
    invert: true,
    category: "Markets Platform",
    blurb:
      "Professional charting, screeners and economic calendars. Our first 150 members receive access to TradingView's premium market analysis tools.",
  },
  {
    slug: "cci",
    name: "Castleton Commodities International",
    wordmark: "CCI",
    href: "https://www.cci.com/",
    logoClass: "max-h-8",
    category: "Commodities Merchant",
    blurb:
      "A leading global energy commodities merchant and infrastructure investor, trading physical and financial natural gas, power and oil markets.",
  },
  {
    slug: "ice",
    name: "Intercontinental Exchange",
    wordmark: "ICE",
    href: "https://www.theice.com/",
    logoClass: "max-h-11",
    category: "Exchange Group",
    blurb:
      "Operator of global exchanges and clearing houses, including the New York Stock Exchange — the infrastructure underpinning modern markets.",
  },
  {
    slug: "tradermath",
    name: "TraderMath",
    wordmark: "TraderMath",
    href: "https://tradermath.org/",
    logoClass: "max-h-7",
    plate: false,
    category: "Interview Preparation",
    blurb:
      "Mental maths, market-making games and firm-specific assessment practice built for candidates targeting trading and quant roles.",
  },
];
