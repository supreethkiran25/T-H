/**
 * TAHRAD brand system — single source of truth for logo assets & tokens.
 * Values follow TAHRAD Brand Guidelines 2026–2027.
 */

import logoPrimaryBlue from "../assets/brand/tahrad-logo-primary-blue.png";
import logoPrimaryWhite from "../assets/brand/tahrad-logo-primary-white.png";
import logoPrimaryBlack from "../assets/brand/tahrad-logo-primary-black.png";
import logoIconBlue from "../assets/brand/tahrad-icon-blue.png";
import logoIconWhite from "../assets/brand/tahrad-icon-white.png";
import logoIconBlack from "../assets/brand/tahrad-icon-black.png";
import logoWordmarkBlue from "../assets/brand/tahrad-wordmark-blue.png";
import logoWordmarkWhite from "../assets/brand/tahrad-wordmark-white.png";
import logoWordmarkBlack from "../assets/brand/tahrad-wordmark-black.png";

/** Exact palette from brand guidelines Color page */
export const brandColors = {
  blue: "#0028FA",
  white: "#FFFFFF",
  gray: "#435058",
  green: "#5CD94A",
  yellow: "#F0F431",
} as const;

/**
 * Logo hierarchy (order of usage):
 * 1. Primary (icon + wordmark)
 * 2. Wordmark
 * 3. Icon
 *
 * Color treatments by background:
 * - White / light → blue
 * - Brand blue → white
 * - Black / dark → white
 * - Light gray → black
 */
export const brandLogos = {
  primary: {
    blue: logoPrimaryBlue,
    white: logoPrimaryWhite,
    black: logoPrimaryBlack,
  },
  wordmark: {
    blue: logoWordmarkBlue,
    white: logoWordmarkWhite,
    black: logoWordmarkBlack,
  },
  icon: {
    blue: logoIconBlue,
    white: logoIconWhite,
    black: logoIconBlack,
  },
} as const;

export const brandFonts = {
  heading: "'Syne', sans-serif",
  body: "'Plus Jakarta Sans', sans-serif",
} as const;

/** Google Fonts URL — Syne + Plus Jakarta Sans with required weights */
export const BRAND_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=Syne:wght@400;500;600;700;800&display=swap";

export type LogoVariant = "primary" | "wordmark" | "icon";
export type LogoTone = "blue" | "white" | "black";

export function getBrandLogo(variant: LogoVariant = "primary", tone: LogoTone = "blue") {
  return brandLogos[variant][tone];
}
