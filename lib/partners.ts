export type Org = {
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

/**
 * Sponsors pay a fee to support the society. Partners contribute tools,
 * access or training rather than money. The distinction is deliberate and
 * should be preserved wherever these are shown.
 */
export const sponsors: Org[] = [
  {
    slug: "jane-street",
    name: "Jane Street",
    wordmark: "Jane Street",
    href: "https://www.janestreet.com/",
    logoClass: "max-h-7",
    plate: false,
    invert: true,
    category: "Quantitative Trading",
    blurb:
      "A global quantitative trading firm and liquidity provider, active in equities, ETFs, bonds, options and commodities across markets worldwide.",
  },
  {
    slug: "cci",
    name: "Castleton Commodities International",
    wordmark: "CCI",
    href: "https://www.cci.com/",
    logoClass: "max-h-8",
    category: "Commodities Merchant",
    blurb:
      "A global energy commodities merchant, trading physical and financial natural gas, power and oil, and investing in the infrastructure behind it.",
  },
];

export const partners: Org[] = [
  {
    slug: "tradingview",
    name: "TradingView",
    wordmark: "TradingView",
    href: "https://www.tradingview.com/blog/en/university-college-london-59143/",
    logoClass: "max-h-10",
    plate: false,
    invert: true,
    category: "Markets Platform",
    blurb:
      "Charting, screeners and economic calendars. Our first 150 members get a TradingView subscription.",
  },
  {
    slug: "ice",
    name: "Intercontinental Exchange",
    wordmark: "ICE",
    href: "https://www.theice.com/",
    logoClass: "max-h-11",
    category: "Exchange Group",
    blurb:
      "Runs exchanges and clearing houses around the world, the New York Stock Exchange among them.",
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
      "Mental maths drills, market-making games and practice assessments for people going after trading and quant roles.",
  },
];

/** Everyone backing the society, for counts and listings. */
export const allSupporters: Org[] = [...sponsors, ...partners];

/** The society itself, for co-branded lockups such as the competition card. */
export const uclts: Org = {
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
 * Neither a sponsor nor a partner, so it is kept out of both lists.
 */
export const adm: Org = {
  slug: "adm",
  name: "ADM, UCL Maths Society",
  wordmark: "ADM",
  href: "",
  logoClass: "max-h-11",
  plate: false,
  invert: true,
  category: "Collaborator",
  blurb:
    "UCL's mathematics society, joining us to run the Maths & Trading Competition.",
};
