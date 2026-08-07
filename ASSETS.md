# Image assets

Everything below has a graceful fallback, so the site never shows a broken
image. Drop a file in with the right name and it appears automatically — no
code changes needed.

## Sponsor and partner logos → `public/partners/`

Resolved in order: `<slug>.svg`, `.png`, `.webp`, then `.jpg`. Without a file,
the tile renders a typographic wordmark.

**Sponsors pay a fee. Partners give services rather than money.** The two are
listed separately in `lib/partners.ts` (`sponsors` and `partners`) and shown as
separate groups on the site. Keep that distinction when adding anyone new.

| File                | Organisation                        | Type      | Treatment           |
| ------------------- | ----------------------------------- | --------- | ------------------- |
| `jane-street.png`   | Jane Street                         | Sponsor   | Bare, inverted white |
| `cci.jpg`           | Castleton Commodities International  | Sponsor   | White plate         |
| `tradingview.webp`  | TradingView                         | Partner   | Bare, inverted white |
| `ice.png`           | Intercontinental Exchange           | Partner   | White plate         |
| `tradermath.svg`    | TraderMath                          | Partner   | Bare, recoloured    |
| `uclts.png`         | UCL Trading Society (our own mark)  | Us        | Bare, already white |
| `adm.png`           | ADM, UCL Maths Society              | Collab    | Bare, inverted white |

ADM and UCLTS are neither sponsors nor partners; they appear only on the Maths
& Trading Competition card.

### Why two treatments

Single-colour marks render **bare on the black page**, set to white, which is
the cleaner look. Jane Street, TradingView and ADM are solid black, so a CSS
`invert` flips them.
TraderMath was an SVG with dark grey text, so its wordmark fill was edited to
white directly in `public/partners/tradermath.svg` while the red arrow keeps its
brand colours (inverting the whole file would have turned the red cyan).

CCI and ICE **can't** be treated that way and keep a white plate:

- CCI ships as a JPEG with a baked-in white background — there's no transparency
  to remove.
- ICE pairs a light-blue bracket with black text; inverting would turn the
  bracket orange.

Recolouring a partner's mark is worse than backing it, so those two stay plated.
**If CCI or ICE supply a white/reversed version**, drop it in and set
`plate: false` for them in `lib/partners.ts` — the whole row then goes uniformly
plate-free, which would look better still. Most brand teams have one; it's worth
asking.

Each logo's height cap is tuned individually in `lib/partners.ts` (`logoClass`)
so a square mark and a 5:1 wordmark carry equal optical weight. Plates share a
fixed height but hug the logo's width, so square logos get square-ish plates
rather than floating in a letterbox.

## Committee head-shots → `public/team/`

Resolved in order: `<slug>.jpg`, then `.png`. Without a file the card shows an
initials monogram. Cropped square — 400×400 or larger. Rendered greyscale,
fading to colour on hover.

| File               | Member          | Status      |
| ------------------ | --------------- | ----------- |
| `kaihao-wu.jpg`    | Kaihao Luis Wu  | ✅ In place |
| `zijia-zhao.jpg`   | Zijia Zhao      | ✅ In place |
| `anies-desai.jpg`  | Anies Desai     | ✅ In place |
| `rahul-shafia.jpg` | Rahul Shafia    | ✅ In place |
| `wenhao-wang.jpg`  | Wenhao Wang     | ✅ In place |
| `james-bridel.jpg` | James Bridel    | ✅ In place |
| `micah-zheng.jpg`  | Micah Zheng     | **Missing** |

Collect head-shots from members directly rather than saving them from LinkedIn —
their terms don't permit it, and members should agree to their photo appearing
on a public site.

## Interview assets → `public/insights/`

Used on the Samuel Basi interview and its card on the Insights index.

| File               | Use                          | Status      |
| ------------------ | ---------------------------- | ----------- |
| `samuel-basi.png`  | Portrait, cropped 4:5        | ✅ In place |
| `trafigura.webp`   | Editorial mark under his bio | ✅ In place |

Without the portrait the figure shows a neutral placeholder; without the logo
the caption reads "11 years at Trafigura" as plain text.

The Trafigura file is a 16:9 canvas with a square mark centred in it and
transparent side margins, so it renders in a square `object-cover` box to trim
that padding. The mark has no wordmark, so the name is always spelled out in the
caption rather than relying on the logo to carry it.

Trafigura is **not** a partner — its logo is used purely editorially to caption
where Basi spent his career, and deliberately never appears in a partnership
context.
