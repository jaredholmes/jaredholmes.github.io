import { useState, useRef, useEffect } from "react";
import type { VisualVariant } from "../data/caseStudies";
import mobileHome from "../img/rental-applications/RA-mobile-home.png";
import mobileApplications from "../img/rental-applications/RA-mobile-applications.png";
import mobileHousing from "../img/rental-applications/RA-mobile-housing.png";
import mobileOther from "../img/rental-applications/RA-mobile-other.png";
import cc1 from "../img/credit-coach/cc-1.png";
import cc2 from "../img/credit-coach/cc-2.png";
import cc3 from "../img/credit-coach/cc-3.png";
import cc4 from "../img/credit-coach/cc-4.png";
import creditCoachDiagramSrc from "../img/credit-coach/credit_coach3.png";
import styles from "./Visual.module.css";

const MOBILE_SCREENS = [mobileHome, mobileApplications, mobileHousing, mobileOther];
const CC_SCREENS = [cc1, cc2, cc3, cc4];

// ── NYSHEX design-system colors (used inside component drawings) ──────────────
// These are NOT the portfolio tokens — they represent NYSHEX's shipped system.
const NX = {
  navy: "#0D1B2A",
  navyMid: "#1E3A5F",
  blue: "#1B6AE0",
  blueLight: "#DBEAFE",
  blueMid: "#93C5FD",
  surface: "#F5F7FA",
  surfaceDark: "#EDF0F4",
  border: "#E2E8F0",
  borderDark: "#CBD5E1",
  text: "#374151",
  textMuted: "#94A3B8",
  textFaint: "#C8D0DA",
  danger: "#DC3545",
  dangerLight: "#FEE2E2",
  warning: "#D97706",
  warningLight: "#FEF3C7",
  success: "#059669",
  successLight: "#D1FAE5",
  white: "#FFFFFF",
  shadow: "rgba(15,23,42,0.08)",
};

// Font used inside NYSHEX product SVG drawings (not the portfolio display font)
const PRODUCT_FONT = "'IBM Plex Sans', system-ui, sans-serif";

// ── Stylized component drawings ───────────────────────────────────────────────

function TooltipDrawing() {
  const F = PRODUCT_FONT;
  const M = "var(--font-mono)";
  return (
    <svg
      viewBox="0 0 240 240"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
    >
      {/* Column headers */}
      <text x="68" y="10" textAnchor="middle" fill={NX.textMuted} style={{ fontSize: "4px", fontFamily: F, letterSpacing: "0.1em" }}>default</text>
      <text x="172" y="10" textAnchor="middle" fill={NX.textMuted} style={{ fontSize: "4px", fontFamily: F, letterSpacing: "0.1em" }}>rich</text>

      {/* ── Row 1: placement=top ── */}
      <text x="4" y="30" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.04em" }}>top</text>

      {/* Default top tooltip */}
      <rect x="24" y="16" width="88" height="24" rx="4" fill={NX.navy} />
      <text x="32" y="27" fill={NX.white} style={{ fontSize: "5px", fontFamily: F, fontWeight: 500 }} opacity="0.95">Rate comparison</text>
      <text x="32" y="34" fill={NX.white} style={{ fontSize: "3.5px", fontFamily: F }} opacity="0.5">Hover to see benchmarks</text>
      <path d="M64,40 L68,45 L72,40 Z" fill={NX.navy} />
      {/* Trigger */}
      <rect x="46" y="49" width="44" height="8" rx="2" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      <rect x="52" y="52" width="32" height="3" rx="1.5" fill={NX.textFaint} />

      {/* Rich top tooltip — contract detail */}
      <rect x="126" y="16" width="102" height="42" rx="4" fill={NX.white} stroke={NX.border} strokeWidth="0.6" />
      <text x="133" y="27" fill={NX.navy} style={{ fontSize: "5px", fontFamily: F, fontWeight: 500 }}>Contract #4821</text>
      <text x="133" y="34" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>Shanghai → Rotterdam · 40ft</text>
      <text x="133" y="41" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>$2,840 / TEU · Valid Jun 2026</text>
      <text x="133" y="50" fill={NX.blue} style={{ fontSize: "3.5px", fontFamily: F }}>View commitment →</text>
      <path d="M172,58 L176,63 L180,58 Z" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <rect x="155" y="67" width="44" height="8" rx="2" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      <rect x="161" y="70" width="32" height="3" rx="1.5" fill={NX.textFaint} />

      {/* ── Row 2: placement=right ── */}
      <text x="4" y="100" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.04em" }}>right</text>

      {/* Default right */}
      <rect x="24" y="90" width="12" height="12" rx="2" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      <path d="M36,95 L41,93 L41,99 Z" fill={NX.navy} />
      <rect x="41" y="86" width="68" height="20" rx="4" fill={NX.navy} />
      <text x="48" y="95" fill={NX.white} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }} opacity="0.95">Benchmark: $2,600</text>
      <text x="48" y="101" fill={NX.white} style={{ fontSize: "3px", fontFamily: F }} opacity="0.5">NYFI Index weekly avg</text>

      {/* Rich right — rate comparison */}
      <rect x="126" y="88" width="12" height="12" rx="2" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      <path d="M138,93 L143,91 L143,97 Z" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <rect x="143" y="82" width="88" height="30" rx="4" fill={NX.white} stroke={NX.border} strokeWidth="0.6" />
      <text x="150" y="91" fill={NX.navy} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>Lane: CNSHA–NLRTM</text>
      <text x="150" y="98" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>Carrier: Maersk · 40ft HC</text>
      <text x="150" y="105" fill={NX.success} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>↓ 8% below index</text>

      {/* ── Row 3: error + warning variants ── */}
      <text x="4" y="140" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.04em" }}>status</text>

      {/* Error tooltip */}
      <rect x="24" y="126" width="88" height="24" rx="4" fill={NX.dangerLight} stroke={NX.danger} strokeWidth="0.5" />
      <circle cx="34" cy="138" r="4" fill="none" stroke={NX.danger} strokeWidth="0.8" />
      <text x="34" y="140" fill={NX.danger} textAnchor="middle" style={{ fontSize: "5px", fontFamily: F, fontWeight: 700 }}>!</text>
      <text x="42" y="136" fill={NX.danger} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>Rate expired</text>
      <text x="42" y="143" fill={NX.text} style={{ fontSize: "3px", fontFamily: F }}>Filing no longer valid for booking</text>
      <path d="M64,150 L68,155 L72,150 Z" fill={NX.dangerLight} />

      {/* Warning tooltip */}
      <rect x="126" y="126" width="104" height="24" rx="4" fill={NX.warningLight} stroke={NX.warning} strokeWidth="0.5" />
      <path d="M136,134 L132,141 L140,141 Z" fill="none" stroke={NX.warning} strokeWidth="0.8" strokeLinejoin="round" />
      <text x="136" y="140" fill={NX.warning} textAnchor="middle" style={{ fontSize: "4px", fontFamily: F, fontWeight: 700 }}>!</text>
      <text x="145" y="136" fill={NX.warning} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>Nearing expiry</text>
      <text x="145" y="143" fill={NX.text} style={{ fontSize: "3px", fontFamily: F }}>Valid for 3 more days · Renegotiate</text>
      <path d="M172,150 L176,155 L180,150 Z" fill={NX.warningLight} />

      {/* ── Spacing annotation ── */}
      {/* Redline for tooltip padding */}
      <line x1="24" y1="168" x2="24" y2="176" stroke={NX.danger} strokeWidth="0.3" opacity="0.6" />
      <line x1="32" y1="168" x2="32" y2="176" stroke={NX.danger} strokeWidth="0.3" opacity="0.6" />
      <line x1="24" y1="172" x2="32" y2="172" stroke={NX.danger} strokeWidth="0.3" opacity="0.6" />
      <text x="28" y="170" textAnchor="middle" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }} opacity="0.7">8</text>

      <line x1="36" y1="168" x2="36" y2="176" stroke={NX.danger} strokeWidth="0.3" opacity="0.6" />
      <line x1="48" y1="168" x2="48" y2="176" stroke={NX.danger} strokeWidth="0.3" opacity="0.6" />
      <line x1="36" y1="172" x2="48" y2="172" stroke={NX.danger} strokeWidth="0.3" opacity="0.6" />
      <text x="42" y="170" textAnchor="middle" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }} opacity="0.7">12</text>

      {/* Props table */}
      <rect x="24" y="180" width="206" height="56" rx="3" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      <text x="30" y="189" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.05em" }}>PROPS</text>
      <line x1="24" y1="193" x2="230" y2="193" stroke={NX.border} strokeWidth="0.4" />

      <text x="30" y="200" fill={NX.blue} style={{ fontSize: "3.2px", fontFamily: M }}>variant</text>
      <text x="70" y="200" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M }}>"default" | "rich" | "error" | "warning"</text>

      <text x="30" y="208" fill={NX.blue} style={{ fontSize: "3.2px", fontFamily: M }}>placement</text>
      <text x="70" y="208" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M }}>"top" | "right" | "bottom" | "left"</text>

      <text x="30" y="216" fill={NX.blue} style={{ fontSize: "3.2px", fontFamily: M }}>hasLink</text>
      <text x="70" y="216" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M }}>boolean — shows action link in rich variant</text>

      <text x="30" y="224" fill={NX.blue} style={{ fontSize: "3.2px", fontFamily: M }}>delay</text>
      <text x="70" y="224" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M }}>number — ms before show (default: 200)</text>

      <text x="30" y="232" fill={NX.blue} style={{ fontSize: "3.2px", fontFamily: M }}>maxWidth</text>
      <text x="70" y="232" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M }}>number — clamps at 320px</text>
    </svg>
  );
}

function AlertDrawing() {
  const F = PRODUCT_FONT;
  const M = "var(--font-mono)";
  // Helper for a single alert cell
  const Alert = ({ x, y, w, h, variant, title, desc, size }: {
    x: number; y: number; w: number; h: number;
    variant: "primary" | "danger" | "success" | "warning";
    title: string; desc: string; size: "lg" | "sm";
  }) => {
    const colors = {
      primary: { bg: NX.blueLight, accent: NX.blue, icon: "i" },
      danger: { bg: NX.dangerLight, accent: NX.danger, icon: "✕" },
      success: { bg: NX.successLight, accent: NX.success, icon: "✓" },
      warning: { bg: NX.warningLight, accent: NX.warning, icon: "!" },
    }[variant];
    const isLg = size === "lg";
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} rx={3} fill={colors.bg} stroke={colors.accent} strokeWidth="0.4" opacity="0.85" />
        <rect x={x} y={y} width={2.5} height={h} rx={1.2} fill={colors.accent} />
        <circle cx={x + (isLg ? 14 : 10)} cy={y + h / 2} r={isLg ? 4.5 : 3.5} fill="none" stroke={colors.accent} strokeWidth="0.8" />
        <text x={x + (isLg ? 14 : 10)} y={y + h / 2 + 1.5} fill={colors.accent} textAnchor="middle" style={{ fontSize: isLg ? "5px" : "4px", fontFamily: F, fontWeight: 600 }}>{colors.icon}</text>
        <text x={x + (isLg ? 24 : 18)} y={y + (isLg ? 11 : 9)} fill={NX.navy} style={{ fontSize: isLg ? "4.5px" : "3.5px", fontFamily: F, fontWeight: 500 }}>{title}</text>
        <text x={x + (isLg ? 24 : 18)} y={y + (isLg ? 18 : 15)} fill={NX.text} style={{ fontSize: isLg ? "3.2px" : "2.8px", fontFamily: F }} opacity="0.8">{desc}</text>
        {isLg && <text x={x + 24} y={y + 24} fill={colors.accent} style={{ fontSize: "3px", fontFamily: F }}>descriptionLink</text>}
      </g>
    );
  };

  return (
    <svg
      viewBox="0 0 240 240"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
    >
      {/* Column headers — 3 columns (danger, success, warning) */}
      <text x="53" y="10" textAnchor="middle" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, letterSpacing: "0.1em" }}>danger</text>
      <text x="127" y="10" textAnchor="middle" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, letterSpacing: "0.1em" }}>success</text>
      <text x="201" y="10" textAnchor="middle" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, letterSpacing: "0.1em" }}>warning</text>

      {/* Row labels */}
      <text x="2" y="27" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>size</text>
      <text x="2" y="33" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M, fontWeight: 500 }}>lg</text>

      <text x="2" y="62" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>size</text>
      <text x="2" y="68" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M, fontWeight: 500 }}>sm</text>

      {/* Dashed grid frame */}
      <rect x="14" y="14" width="224" height="62" rx="2" fill="none" stroke={NX.border} strokeWidth="0.4" strokeDasharray="2 2" />

      {/* ── Row 1: size=lg (3 columns, w=70 each) ── */}
      <Alert x={18} y={18} w={70} h={28} variant="danger" title="Ingestion failed" desc="Unable to parse xlsx format" size="lg" />
      <Alert x={92} y={18} w={70} h={28} variant="success" title="Rates published" desc="124 lanes now active" size="lg" />
      <Alert x={166} y={18} w={70} h={28} variant="warning" title="Variance detected" desc="3 lanes exceed ±15% NYFI" size="lg" />

      {/* ── Row 2: size=sm ── */}
      <Alert x={18} y={52} w={70} h={20} variant="danger" title="Parse error" desc="Check file format" size="sm" />
      <Alert x={92} y={52} w={70} h={20} variant="success" title="Published" desc="All lanes active" size="sm" />
      <Alert x={166} y={52} w={70} h={20} variant="warning" title="Near expiry" desc="3 days remaining" size="sm" />

      {/* ── Row 3: banner=true ── */}
      <text x="2" y="96" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>banner</text>
      <text x="2" y="102" fill={NX.text} style={{ fontSize: "3.2px", fontFamily: M, fontWeight: 500 }}>true</text>

      {/* Full-width banners */}
      <rect x="14" y="86" width="224" height="52" rx="2" fill="none" stroke={NX.border} strokeWidth="0.4" strokeDasharray="2 2" />

      {/* Info banner */}
      <rect x={18} y={90} width={216} height={18} rx={3} fill={NX.blueLight} stroke={NX.blue} strokeWidth="0.3" />
      <circle cx={30} cy={99} r={3.5} fill="none" stroke={NX.blue} strokeWidth="0.7" />
      <text x={30} y={100.5} fill={NX.blue} textAnchor="middle" style={{ fontSize: "4px", fontFamily: F, fontWeight: 600 }}>i</text>
      <text x={38} y={98} fill={NX.navy} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>Rate sheet #2847 is being processed.</text>
      <text x={38} y={104} fill={NX.text} style={{ fontSize: "2.8px", fontFamily: F }} opacity="0.7">Estimated completion: 4 hours. You'll be notified when ingestion finishes.</text>
      <text x={224} y={100} fill={NX.blue} textAnchor="end" style={{ fontSize: "3px", fontFamily: F }}>Dismiss</text>

      {/* Danger banner */}
      <rect x={18} y={112} width={216} height={18} rx={3} fill={NX.dangerLight} stroke={NX.danger} strokeWidth="0.3" />
      <circle cx={30} cy={121} r={3.5} fill="none" stroke={NX.danger} strokeWidth="0.7" />
      <line x1={28} y1={119} x2={32} y2={123} stroke={NX.danger} strokeWidth="0.7" strokeLinecap="round" />
      <line x1={32} y1={119} x2={28} y2={123} stroke={NX.danger} strokeWidth="0.7" strokeLinecap="round" />
      <text x={38} y={120} fill={NX.navy} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>Ingestion failed for carrier_rates_maersk.xlsx</text>
      <text x={38} y={126} fill={NX.text} style={{ fontSize: "2.8px", fontFamily: F }} opacity="0.7">Check file format and retry. See error log for details.</text>
      <text x={224} y={122} fill={NX.danger} textAnchor="end" style={{ fontSize: "3px", fontFamily: F }}>View log</text>

      {/* ── Anatomy / spec section ── */}
      <text x="14" y="150" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.06em" }}>ANATOMY</text>

      {/* Exploded anatomy diagram */}
      <rect x="14" y="156" width="130" height="36" rx="3" fill={NX.blueLight} stroke={NX.blue} strokeWidth="0.4" />
      <rect x="14" y="156" width="3" height="36" rx="1.5" fill={NX.blue} />

      {/* Icon circle */}
      <circle cx="30" cy="174" r="6" fill="none" stroke={NX.blue} strokeWidth="0.8" />
      <text x="30" y="176" fill={NX.blue} textAnchor="middle" style={{ fontSize: "6px", fontFamily: F, fontWeight: 600 }}>i</text>

      {/* Labels */}
      <text x="42" y="168" fill={NX.navy} style={{ fontSize: "5px", fontFamily: F, fontWeight: 500 }}>Alert title</text>
      <text x="42" y="176" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F }}>The description for an alert.</text>
      <text x="42" y="184" fill={NX.blue} style={{ fontSize: "3.5px", fontFamily: F }}>descriptionLink</text>

      {/* Red-line annotations */}
      <line x1="148" y1="157" x2="156" y2="157" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="148" y1="162" x2="156" y2="162" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="152" y1="157" x2="152" y2="162" stroke={NX.danger} strokeWidth="0.3" />
      <text x="158" y="160" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }}>12px</text>

      <line x1="148" y1="167" x2="156" y2="167" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="148" y1="175" x2="156" y2="175" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="152" y1="167" x2="152" y2="175" stroke={NX.danger} strokeWidth="0.3" />
      <text x="158" y="172" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }}>8px</text>

      <line x1="148" y1="180" x2="156" y2="180" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="148" y1="191" x2="156" y2="191" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="152" y1="180" x2="152" y2="191" stroke={NX.danger} strokeWidth="0.3" />
      <text x="158" y="186" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }}>12px</text>

      {/* Token ref */}
      <text x="158" y="198" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>border-left</text>
      <text x="158" y="204" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>3px solid var(--color-[variant])</text>

      {/* Props reference */}
      <rect x="14" y="210" width="224" height="26" rx="3" fill={NX.surface} stroke={NX.border} strokeWidth="0.4" />
      <text x="20" y="218" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M, letterSpacing: "0.05em" }}>PROPS</text>
      <text x="42" y="218" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>variant</text>
      <text x="62" y="218" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>"primary" | "danger" | "success" | "warning"</text>
      <text x="42" y="226" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>size</text>
      <text x="62" y="226" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>"sm" | "md" | "lg"</text>
      <text x="110" y="226" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>banner</text>
      <text x="130" y="226" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>boolean — full-width mode</text>
      <text x="42" y="233" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>dismissible</text>
      <text x="72" y="233" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>boolean</text>
      <text x="110" y="233" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>descriptionLink</text>
      <text x="150" y="233" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>ReactNode — inline action</text>
    </svg>
  );
}

function ButtonGroupDrawing() {
  const F = PRODUCT_FONT;
  const M = "var(--font-mono)";
  return (
    <svg
      viewBox="0 0 240 240"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
    >
      {/* ── Section: variant=filled ── */}
      <text x="8" y="12" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.08em" }}>variant=filled</text>

      {/* Filled group — use clipPath so active button rounds only on left */}
      <defs>
        <clipPath id="filledClip">
          <rect x="8" y="18" width="148" height="22" rx="5" />
        </clipPath>
        <clipPath id="outlineActiveClip">
          <rect x="8" y="62" width="50" height="22" rx="5" />
        </clipPath>
      </defs>
      <rect x="8" y="18" width="148" height="22" rx="5" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      {/* Active segment clipped to group shape */}
      <rect x="8" y="18" width="50" height="22" fill={NX.blue} clipPath="url(#filledClip)" />
      <text x="33" y="31" textAnchor="middle" fill={NX.white} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>Head haul</text>
      <line x1="58" y1="18" x2="58" y2="40" stroke={NX.border} strokeWidth="0.4" />
      <text x="82" y="31" textAnchor="middle" fill={NX.text} style={{ fontSize: "4.5px", fontFamily: F }}>Backhaul</text>
      <line x1="106" y1="18" x2="106" y2="40" stroke={NX.border} strokeWidth="0.4" />
      <text x="130" y="31" textAnchor="middle" fill={NX.text} style={{ fontSize: "4.5px", fontFamily: F }}>Round trip</text>

      {/* State annotations on right */}
      <circle cx="170" cy="22" r="3" fill={NX.blue} />
      <text x="176" y="24" fill={NX.text} style={{ fontSize: "3px", fontFamily: F }}>active</text>
      <circle cx="170" cy="30" r="3" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      <text x="176" y="32" fill={NX.text} style={{ fontSize: "3px", fontFamily: F }}>default</text>
      <rect x="167" y="36" width="6" height="6" rx="1" fill={NX.blue} opacity="0.15" stroke={NX.blue} strokeWidth="0.4" />
      <text x="176" y="41" fill={NX.text} style={{ fontSize: "3px", fontFamily: F }}>hover</text>

      {/* ── Section: variant=outline ── */}
      <text x="8" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.08em" }}>variant=outline</text>

      <rect x="8" y="62" width="148" height="22" rx="5" fill={NX.white} stroke={NX.border} strokeWidth="0.6" />
      {/* Active outline — clipped blue border only on the left segment */}
      <rect x="8" y="62" width="50" height="22" rx="5" fill="none" stroke={NX.blue} strokeWidth="1" clipPath="url(#outlineActiveClip)" />
      <text x="33" y="75" textAnchor="middle" fill={NX.blue} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>20ft</text>
      <line x1="58" y1="62" x2="58" y2="84" stroke={NX.border} strokeWidth="0.4" />
      <text x="82" y="75" textAnchor="middle" fill={NX.text} style={{ fontSize: "4.5px", fontFamily: F }}>40ft</text>
      <line x1="106" y1="62" x2="106" y2="84" stroke={NX.border} strokeWidth="0.4" />
      <text x="130" y="75" textAnchor="middle" fill={NX.text} style={{ fontSize: "4.5px", fontFamily: F }}>40ft HC</text>

      {/* Hover state preview */}
      <rect x="168" y="62" width="50" height="22" rx="5" fill={NX.blue} opacity="0.06" stroke={NX.blue} strokeWidth="0.6" />
      <text x="193" y="75" textAnchor="middle" fill={NX.blue} style={{ fontSize: "4.5px", fontFamily: F }}>:hover</text>

      {/* ── Section: with icons — wider to fit all 5 buttons ── */}
      <text x="8" y="100" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.08em" }}>withIcons=true</text>

      <rect x="8" y="106" width="226" height="22" rx="5" fill={NX.white} stroke={NX.border} strokeWidth="0.6" />
      {/* Btn 1 — list icon */}
      <rect x="20" y="113" width="6" height="1.2" rx="0.6" fill={NX.text} />
      <rect x="20" y="116" width="6" height="1.2" rx="0.6" fill={NX.text} />
      <rect x="20" y="119" width="6" height="1.2" rx="0.6" fill={NX.text} />
      <text x="30" y="118" fill={NX.text} style={{ fontSize: "4px", fontFamily: F }}>List</text>
      <line x1="52" y1="106" x2="52" y2="128" stroke={NX.border} strokeWidth="0.4" />
      {/* Btn 2 — grid icon (active) */}
      <rect x="64" y="112" width="3.5" height="3.5" rx="0.6" fill={NX.blue} />
      <rect x="69" y="112" width="3.5" height="3.5" rx="0.6" fill={NX.blue} />
      <rect x="64" y="117" width="3.5" height="3.5" rx="0.6" fill={NX.blue} />
      <rect x="69" y="117" width="3.5" height="3.5" rx="0.6" fill={NX.blue} />
      <text x="76" y="118" fill={NX.blue} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>Grid</text>
      <line x1="98" y1="106" x2="98" y2="128" stroke={NX.border} strokeWidth="0.4" />
      {/* Btn 3 — map icon */}
      <path d="M110,113 L114,111 L118,113 L122,111 L122,121 L118,123 L114,121 L110,123 Z" fill="none" stroke={NX.textMuted} strokeWidth="0.6" />
      <text x="126" y="118" fill={NX.textMuted} style={{ fontSize: "4px", fontFamily: F }}>Map</text>
      <line x1="144" y1="106" x2="144" y2="128" stroke={NX.border} strokeWidth="0.4" />
      {/* Btn 4 — chart (disabled) */}
      <rect x="156" y="119" width="2.5" height="3" fill={NX.border} />
      <rect x="160" y="116" width="2.5" height="6" fill={NX.border} />
      <rect x="164" y="113" width="2.5" height="9" fill={NX.border} />
      <text x="170" y="118" fill={NX.border} style={{ fontSize: "4px", fontFamily: F }}>Stats</text>
      <line x1="190" y1="106" x2="190" y2="128" stroke={NX.border} strokeWidth="0.4" />
      {/* Btn 5 — download */}
      <path d="M202,114 L206,118 L210,114 M206,112 L206,118" fill="none" stroke={NX.textMuted} strokeWidth="0.6" strokeLinecap="round" />
      <line x1="201" y1="121" x2="211" y2="121" stroke={NX.textMuted} strokeWidth="0.6" strokeLinecap="round" />
      <text x="214" y="118" fill={NX.textMuted} style={{ fontSize: "4px", fontFamily: F }}>Export</text>

      {/* ── Section: size variants ── */}
      <text x="8" y="143" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M, letterSpacing: "0.08em" }}>SIZE SCALE</text>

      {/* sm */}
      <text x="8" y="155" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>sm</text>
      <rect x="20" y="148" width="36" height="14" rx="3" fill={NX.blue} />
      <text x="38" y="157" textAnchor="middle" fill={NX.white} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Active</text>
      <rect x="56" y="148" width="36" height="14" rx="3" fill={NX.surface} stroke={NX.border} strokeWidth="0.4" />
      <text x="74" y="157" textAnchor="middle" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F }}>Default</text>

      {/* md */}
      <text x="8" y="175" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>md</text>
      <rect x="20" y="166" width="42" height="18" rx="4" fill={NX.blue} />
      <text x="41" y="177" textAnchor="middle" fill={NX.white} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>Active</text>
      <rect x="62" y="166" width="42" height="18" rx="4" fill={NX.surface} stroke={NX.border} strokeWidth="0.4" />
      <text x="83" y="177" textAnchor="middle" fill={NX.text} style={{ fontSize: "4px", fontFamily: F }}>Default</text>

      {/* lg */}
      <text x="8" y="198" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>lg</text>
      <rect x="20" y="188" width="48" height="22" rx="5" fill={NX.blue} />
      <text x="44" y="201" textAnchor="middle" fill={NX.white} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>Active</text>
      <rect x="68" y="188" width="48" height="22" rx="5" fill={NX.surface} stroke={NX.border} strokeWidth="0.4" />
      <text x="92" y="201" textAnchor="middle" fill={NX.text} style={{ fontSize: "4.5px", fontFamily: F }}>Default</text>

      {/* Sizing red-lines */}
      <line x1="122" y1="149" x2="122" y2="162" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="120" y1="149" x2="124" y2="149" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="120" y1="162" x2="124" y2="162" stroke={NX.danger} strokeWidth="0.3" />
      <text x="126" y="156" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }}>h: 28px</text>

      <line x1="122" y1="167" x2="122" y2="184" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="120" y1="167" x2="124" y2="167" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="120" y1="184" x2="124" y2="184" stroke={NX.danger} strokeWidth="0.3" />
      <text x="126" y="176" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }}>h: 36px</text>

      <line x1="122" y1="189" x2="122" y2="210" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="120" y1="189" x2="124" y2="189" stroke={NX.danger} strokeWidth="0.3" />
      <line x1="120" y1="210" x2="124" y2="210" stroke={NX.danger} strokeWidth="0.3" />
      <text x="126" y="200" fill={NX.danger} style={{ fontSize: "3px", fontFamily: M }}>h: 44px</text>

      {/* Token refs */}
      <rect x="150" y="148" width="86" height="62" rx="3" fill={NX.surface} stroke={NX.border} strokeWidth="0.4" />
      <text x="156" y="158" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M, letterSpacing: "0.05em" }}>TOKENS</text>
      <text x="156" y="166" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>--btn-group-radius</text>
      <text x="218" y="166" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>6px</text>
      <text x="156" y="174" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>--btn-group-gap</text>
      <text x="218" y="174" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>0</text>
      <text x="156" y="182" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>--btn-group-divider</text>
      <text x="218" y="182" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>1px</text>
      <text x="156" y="190" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>--btn-group-active-bg</text>
      <text x="218" y="190" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>accent</text>
      <text x="156" y="198" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>--btn-group-font</text>
      <text x="218" y="198" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>--font-ui</text>
      <text x="156" y="206" fill={NX.blue} style={{ fontSize: "3px", fontFamily: M }}>--btn-group-transition</text>
      <text x="218" y="206" fill={NX.text} style={{ fontSize: "3px", fontFamily: M }}>150ms</text>
    </svg>
  );
}

const CARDS: { label: string; Draw: () => React.ReactElement }[] = [
  { label: "Tooltip", Draw: TooltipDrawing },
  { label: "Alert", Draw: AlertDrawing },
  { label: "Button Group", Draw: ButtonGroupDrawing },
];

// ── Design-MD composite motif ─────────────────────────────────────────────────

function DesignMdMotif() {
  const [topIdx, setTopIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const layoutRef = useRef<HTMLDivElement>(null);

  // Start cycling when the element enters the viewport
  useEffect(() => {
    const el = layoutRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start cycling
          clearInterval(timerRef.current);
          setTopIdx((n) => (n + 1) % CARDS.length);
          timerRef.current = setInterval(() => {
            setTopIdx((n) => (n + 1) % CARDS.length);
          }, 1600);
        } else {
          // Stop when out of view
          clearInterval(timerRef.current);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={layoutRef}
      className={styles.designMdLayout}
    >
      {/* ── DESIGN.md panel ── */}
      <svg
        viewBox="0 0 210 210"
        className={styles.designMdSvg}
        role="presentation"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Panel frame */}
        <rect x="0" y="0" width="210" height="210" rx="3" className={styles.surface} />
        {/* Title bar */}
        <rect x="0" y="0" width="210" height="18" rx="3" className={styles.titleBar} />
        <rect x="0" y="14" width="210" height="4" className={styles.titleBar} />
        <circle cx="8" cy="9" r="1.8" className={styles.bullet} />
        <circle cx="14" cy="9" r="1.8" className={styles.bullet} />
        <circle cx="20" cy="9" r="1.8" className={styles.bullet} />
        <text x="105" y="12" textAnchor="middle" className={styles.fileLabel}>
          DESIGN.md
        </text>
        <line x1="0" y1="18" x2="210" y2="18" className={styles.hairline} />

        {/* ── # Design System ── */}
        <text x="8" y="29" className={styles.hashMark}>#</text>
        <text x="16" y="29" className={styles.sectionHead} style={{ fontSize: "6px" }}>NYSHEX Design System</text>
        <rect x="8" y="32" width="32" height="0.5" fill={NX.blue} opacity="0.4" />

        {/* ── ## Colors ── */}
        <text x="8" y="42" className={styles.hashMarkSm}>##</text>
        <text x="18" y="42" className={styles.sectionHead}>Colors</text>

        {/* Token rows with swatches */}
        <text x="8" y="51" className={styles.tokenKey}>--color-primary</text>
        <text x="88" y="51" className={styles.tokenVal}>#0D1B2A</text>
        <rect x="130" y="46.5" width="10" height="6.5" rx="1.2" fill={NX.navy} />

        <text x="8" y="59" className={styles.tokenKey}>--color-accent</text>
        <text x="88" y="59" className={styles.tokenVal}>#1B6AE0</text>
        <rect x="130" y="54.5" width="10" height="6.5" rx="1.2" fill={NX.blue} />

        <text x="8" y="67" className={styles.tokenKey}>--color-surface</text>
        <text x="88" y="67" className={styles.tokenVal}>#F5F7FA</text>
        <rect x="130" y="62.5" width="10" height="6.5" rx="1.2" fill={NX.surface} stroke={NX.border} strokeWidth="0.4" />

        <text x="8" y="75" className={styles.tokenKey}>--color-danger</text>
        <text x="88" y="75" className={styles.tokenVal}>#DC3545</text>
        <rect x="130" y="70.5" width="10" height="6.5" rx="1.2" fill={NX.danger} />

        <text x="8" y="83" className={styles.tokenKey}>--color-warning</text>
        <text x="88" y="83" className={styles.tokenVal}>#D97706</text>
        <rect x="130" y="78.5" width="10" height="6.5" rx="1.2" fill={NX.warning} />

        <text x="8" y="91" className={styles.tokenKey}>--color-success</text>
        <text x="88" y="91" className={styles.tokenVal}>#059669</text>
        <rect x="130" y="86.5" width="10" height="6.5" rx="1.2" fill={NX.success} />

        {/* Semantic color note */}
        <text x="145" y="52" className={styles.codeComment} style={{ fontSize: "3px" }}>{"// navigation, data"}</text>
        <text x="145" y="60" className={styles.codeComment} style={{ fontSize: "3px" }}>{"// interactive only"}</text>
        <text x="145" y="68" className={styles.codeComment} style={{ fontSize: "3px" }}>{"// card backgrounds"}</text>

        {/* ── ## Typography ── */}
        <text x="8" y="104" className={styles.hashMarkSm}>##</text>
        <text x="18" y="104" className={styles.sectionHead}>Typography</text>

        <text x="8" y="113" className={styles.tokenKey}>--font-ui</text>
        <text x="88" y="113" className={styles.tokenVal}>"Inter", system-ui</text>
        <text x="8" y="121" className={styles.tokenKey}>--font-data</text>
        <text x="88" y="121" className={styles.tokenVal}>"IBM Plex Mono"</text>
        <text x="8" y="129" className={styles.tokenKey}>--fs-body</text>
        <text x="88" y="129" className={styles.tokenVal}>14px / 1.5</text>
        <text x="8" y="137" className={styles.tokenKey}>--fs-sm</text>
        <text x="88" y="137" className={styles.tokenVal}>12px / 1.4</text>
        <text x="8" y="145" className={styles.tokenKey}>--fs-heading</text>
        <text x="88" y="145" className={styles.tokenVal}>20px / 1.3 · 500</text>

        {/* ── ## Spacing ── */}
        <text x="8" y="158" className={styles.hashMarkSm}>##</text>
        <text x="18" y="158" className={styles.sectionHead}>Spacing</text>

        <text x="8" y="167" className={styles.tokenKey}>--space-xs</text>
        <text x="88" y="167" className={styles.tokenVal}>4px</text>
        <text x="8" y="175" className={styles.tokenKey}>--space-sm</text>
        <text x="88" y="175" className={styles.tokenVal}>8px</text>
        <text x="8" y="183" className={styles.tokenKey}>--space-md</text>
        <text x="88" y="183" className={styles.tokenVal}>16px</text>
        <text x="8" y="191" className={styles.tokenKey}>--space-lg</text>
        <text x="88" y="191" className={styles.tokenVal}>24px</text>

        {/* Spacing visual scale */}
        <rect x="130" y="164" width="4" height="4" rx="0.5" fill={NX.blue} opacity="0.3" />
        <rect x="130" y="172" width="8" height="4" rx="0.5" fill={NX.blue} opacity="0.3" />
        <rect x="130" y="180" width="16" height="4" rx="0.5" fill={NX.blue} opacity="0.3" />
        <rect x="130" y="188" width="24" height="4" rx="0.5" fill={NX.blue} opacity="0.3" />

        {/* ── ## Motion ── */}
        <text x="8" y="204" className={styles.hashMarkSm}>##</text>
        <text x="18" y="204" className={styles.sectionHead}>Motion</text>
        <text x="58" y="204" className={styles.tokenKey}>--dur-fast: 150ms</text>
        <text x="130" y="204" className={styles.tokenKey}>--ease: ease-out</text>
      </svg>

      {/* ── Connection ── */}
      <div className={styles.connLine}>
        <svg viewBox="0 0 44 44" className={styles.connSvg} role="presentation">
          <line x1="4" y1="22" x2="36" y2="22" className={styles.dashConn} />
          <circle cx="36" cy="22" r="3" className={styles.accentDot} />
        </svg>
      </div>

      {/* ── Card deck ── */}
      <div className={styles.cardDeck}>
        {CARDS.map(({ label, Draw }, i) => {
          const offset = (i - topIdx + CARDS.length) % CARDS.length;
          return (
            <div
              key={i}
              className={styles.card}
              style={{
                zIndex: CARDS.length - offset,
                transform: `translate(${offset * 8}px, ${offset * 6}px) scale(${1 - offset * 0.012})`,
                opacity: offset === 0 ? 1 : offset === 1 ? 0.72 : 0.4,
                transition:
                  "transform 0.42s cubic-bezier(0.34,1.4,0.64,1), opacity 0.34s ease",
              }}
            >
              <span className={styles.cardLabel}>{label}</span>
              <div className={styles.cardContent}>
                <Draw />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Mobile slider motif ───────────────────────────────────────────────────────

function MobileSliderMotif() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // One full set width (track contains two copies — measure half)
    const measure = () => track.scrollWidth / 2;
    let setW = measure();
    const ro = new ResizeObserver(() => {
      setW = measure();
    });
    ro.observe(track);

    // Some browsers report 0 scrollWidth before images decode; re-measure on load
    const imgs = Array.from(track.querySelectorAll("img"));
    const onLoad = () => {
      setW = measure();
    };
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad);
    });

    const SECONDS_PER_CYCLE = 24;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let x = 0;
    let velocity = 0;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const target = reduce || hoveredRef.current ? 0 : setW / SECONDS_PER_CYCLE;
      // Critical-damped exponential easing toward target velocity
      const k = 1 - Math.exp(-dt * 4);
      velocity += (target - velocity) * k;

      x -= velocity * dt;
      if (setW > 0 && x <= -setW) x += setW;

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={styles.mobileSliderWrap}
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
    >
      <div ref={trackRef} className={styles.mobileTrack}>
        {[...MOBILE_SCREENS, ...MOBILE_SCREENS].map((src, i) => (
          <img
            key={i}
            src={src}
            className={styles.mobileScreen}
            alt=""
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

// ── Credit Coach slider motif ────────────────────────────────────────────────

function CreditCoachSliderMotif() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => track.scrollWidth / 2;
    let setW = measure();
    const ro = new ResizeObserver(() => {
      setW = measure();
    });
    ro.observe(track);

    const imgs = Array.from(track.querySelectorAll("img"));
    const onLoad = () => {
      setW = measure();
    };
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad);
    });

    const SECONDS_PER_CYCLE = 24;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let x = 0;
    let velocity = 0;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const target = reduce || hoveredRef.current ? 0 : setW / SECONDS_PER_CYCLE;
      const k = 1 - Math.exp(-dt * 4);
      velocity += (target - velocity) * k;

      x -= velocity * dt;
      if (setW > 0 && x <= -setW) x += setW;

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={styles.mobileSliderWrap}
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
    >
      <div ref={trackRef} className={styles.mobileTrack}>
        {[...CC_SCREENS, ...CC_SCREENS].map((src, i) => (
          <img
            key={i}
            src={src}
            className={styles.mobileScreen}
            alt=""
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

// ── Credit Coach diagram motif ──────────────────────────────────────────────

function CreditCoachDiagramMotif() {
  return (
    <img
      src={creditCoachDiagramSrc}
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
      draggable={false}
    />
  );
}

// ── Video hero ────────────────────────────────────────────────────────────────

function VideoHero({ src, caption }: { src: string; caption: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) v.pause();
      else void v.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <figure className={`${styles.figure} ${styles.figureHero}`}>
      <div className={`${styles.block} ${styles.videoBlock}`}>
        <video
          ref={videoRef}
          className={styles.video}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={caption}
        />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

// ── Rates walkthrough motif ──────────────────────────────────────────────────

function RatesTableDrawing() {
  const F = PRODUCT_FONT;
  const M = "var(--font-mono)";
  return (
    <svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" role="presentation">
      {/* ── Nav bar ── */}
      <rect x="0" y="0" width="480" height="22" fill={NX.navy} />
      <text x="16" y="14" fill={NX.white} style={{ fontSize: "5.5px", fontFamily: F, fontWeight: 500 }}>Rates</text>
      <rect x="10" y="18" width="30" height="1.5" rx="0.75" fill={NX.blue} />
      <text x="52" y="14" fill={NX.textMuted} style={{ fontSize: "5px", fontFamily: F }}>Indices</text>
      <text x="82" y="14" fill={NX.textMuted} style={{ fontSize: "5px", fontFamily: F }}>Spreads</text>
      {/* Upload button */}
      <rect x="410" y="5" width="52" height="13" rx="3" fill={NX.blue} />
      <text x="436" y="14" textAnchor="middle" fill={NX.white} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>Upload</text>

      {/* ── Search bar ── */}
      <rect x="0" y="22" width="480" height="24" fill={NX.white} />
      <line x1="0" y1="46" x2="480" y2="46" stroke={NX.border} strokeWidth="0.5" />

      {/* Date field */}
      <rect x="10" y="27" width="72" height="14" rx="3" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <text x="16" y="36" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>ETD</text>
      <text x="30" y="36" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>May 18, 2025</text>

      {/* Origin dropdown */}
      <rect x="90" y="27" width="68" height="14" rx="3" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <text x="96" y="36" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>Origin ·</text>
      <text x="118" y="36" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>26</text>
      <path d="M150,33 L153,36 L156,33" fill="none" stroke={NX.textMuted} strokeWidth="0.7" />

      {/* Arrow */}
      <text x="166" y="36" fill={NX.textMuted} style={{ fontSize: "5px", fontFamily: F }}>→</text>

      {/* Destination dropdown */}
      <rect x="178" y="27" width="78" height="14" rx="3" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <text x="184" y="36" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>Destination ·</text>
      <text x="218" y="36" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>22</text>
      <path d="M248,33 L251,36 L254,33" fill="none" stroke={NX.textMuted} strokeWidth="0.7" />

      {/* Search button */}
      <rect x="268" y="27" width="38" height="14" rx="3" fill={NX.blue} />
      <text x="287" y="36" textAnchor="middle" fill={NX.white} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>Search</text>

      {/* Reset */}
      <text x="316" y="36" fill={NX.blue} style={{ fontSize: "3.5px", fontFamily: F }}>Reset</text>

      {/* Show expired toggle */}
      <rect x="346" y="30" width="16" height="8" rx="4" fill={NX.blue} />
      <circle cx="358" cy="34" r="3" fill={NX.white} />
      <text x="368" y="36" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F }}>Show expired</text>

      {/* Columns dropdown */}
      <rect x="424" y="27" width="48" height="14" rx="3" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <text x="430" y="36" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>Columns</text>
      <text x="460" y="36" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>11</text>

      {/* ── Location dropdown overlay ── */}
      <rect x="90" y="42" width="140" height="90" rx="4" fill={NX.white} stroke={NX.border} strokeWidth="0.6" />
      {/* Search field */}
      <rect x="98" y="48" width="124" height="12" rx="2" fill={NX.surface} stroke={NX.border} strokeWidth="0.4" />
      <text x="108" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>Search</text>
      {/* Checkboxed regions */}
      <rect x="98" y="66" width="7" height="7" rx="1.5" fill={NX.blue} />
      <text x="97.5" y="72.5" fill={NX.white} style={{ fontSize: "5px", fontFamily: F }}>✓</text>
      <text x="108" y="72" fill={NX.blue} style={{ fontSize: "4px", fontFamily: F }}>Select none</text>

      <text x="98" y="84" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>▸</text>
      <rect x="104" y="78" width="7" height="7" rx="1.5" fill={NX.blue} />
      <text x="103.5" y="84.5" fill={NX.white} style={{ fontSize: "5px", fontFamily: F }}>✓</text>
      <text x="114" y="84" fill={NX.text} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>Asia</text>

      <text x="98" y="96" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>▸</text>
      <rect x="104" y="90" width="7" height="7" rx="1.5" fill={NX.blue} />
      <text x="103.5" y="96.5" fill={NX.white} style={{ fontSize: "5px", fontFamily: F }}>✓</text>
      <text x="114" y="96" fill={NX.text} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>Europe</text>

      <text x="98" y="108" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>▸</text>
      <rect x="104" y="102" width="7" height="7" rx="1.5" fill={NX.blue} />
      <text x="103.5" y="108.5" fill={NX.white} style={{ fontSize: "5px", fontFamily: F }}>✓</text>
      <text x="114" y="108" fill={NX.text} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>North America</text>

      <text x="98" y="120" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>▸</text>
      <rect x="104" y="114" width="7" height="7" rx="1.5" fill={NX.blue} />
      <text x="103.5" y="120.5" fill={NX.white} style={{ fontSize: "5px", fontFamily: F }}>✓</text>
      <text x="114" y="120" fill={NX.text} style={{ fontSize: "4px", fontFamily: F, fontWeight: 500 }}>South America</text>

      {/* ── Table ── */}
      {/* Header row */}
      <rect x="0" y="46" width="480" height="16" fill={NX.surface} />
      <text x="10" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500, letterSpacing: "0.03em" }}>Carrier/NVOCC</text>
      <text x="90" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Contract Nr.</text>
      <text x="160" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Origin</text>
      <text x="200" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Destination</text>
      <text x="260" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Place of Delivery</text>
      <text x="340" y="56" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Service</text>
      <text x="400" y="53" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>▾ 20</text>
      <text x="440" y="53" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>▾ 40</text>

      {/* Data rows */}
      {[
        { carrier: "Hapag-Lloyd", contract: "FoodTrans-2841", orig: "CNSHA", dest: "USLAX", pod: "Los Angeles, CA", svc: "TP-1", r20: "$780", r40: "$760", bg: NX.white },
        { carrier: "MSC", contract: "PharmaShip-1190", orig: "CNTAO", dest: "USNYC", pod: "New York, NY", svc: "AE-2", r20: "$1,050", r40: "$1,020", bg: NX.surface },
        { carrier: "Maersk", contract: "TechCargo-1455", orig: "CNSHA", dest: "USLAX", pod: "Los Angeles, CA", svc: "TP-6", r20: "$920", r40: "$890", bg: NX.white },
        { carrier: "CMA-CGM", contract: "AgriCon-3304", orig: "CNNGB", dest: "USNYC", pod: "New York, NY", svc: "FAL-1", r20: "$845", r40: "$821", bg: NX.surface },
        { carrier: "Hapag-Lloyd", contract: "EuroExp-4410", orig: "CNTAO", dest: "NLRTM", pod: "Rotterdam, NL", svc: "FE-3", r20: "$1,210", r40: "$1,180", bg: NX.white },
        { carrier: "MSC", contract: "EuroExp-4411", orig: "CNTAO", dest: "DEHAM", pod: "Hamburg, DE", svc: "FE-5", r20: "$1,290", r40: "$1,260", bg: NX.surface },
        { carrier: "Maersk", contract: "SEA-Atl-7712", orig: "VNHPH", dest: "USLAX", pod: "Los Angeles, CA", svc: "TP-8", r20: "$960", r40: "$930", bg: NX.white },
        { carrier: "CMA-CGM", contract: "IDX-Intl-3319", orig: "IDJPU", dest: "USNYC", pod: "New York, NY", svc: "JKT-NY", r20: "$1,410", r40: "$1,370", bg: NX.surface },
        { carrier: "Hapag-Lloyd", contract: "VN-EU-2245", orig: "VNDAD", dest: "DEBRV", pod: "Bremerhaven, DE", svc: "FE-7", r20: "$1,320", r40: "$1,290", bg: NX.white },
        { carrier: "MSC", contract: "TransPac-9912", orig: "CNSHA", dest: "CAVAN", pod: "Vancouver, BC", svc: "TP-4", r20: "$870", r40: "$840", bg: NX.surface },
      ].map((row, i) => {
        const y = 62 + i * 20;
        return (
          <g key={i}>
            <rect x="0" y={y} width="480" height="20" fill={row.bg} />
            <line x1="0" y1={y + 20} x2="480" y2={y + 20} stroke={NX.border} strokeWidth="0.3" />
            {/* Carrier logo placeholder */}
            <rect x="10" y={y + 5} width="14" height="9" rx="1.5" fill={NX.surface} stroke={NX.border} strokeWidth="0.3" />
            <text x="10" y={y + 12} fill={NX.textMuted} style={{ fontSize: "2.5px", fontFamily: M }} textAnchor="start">
              {row.carrier === "CMA-CGM" ? "CMA" : row.carrier.substring(0, 3).toUpperCase()}
            </text>
            <text x="28" y={y + 13} fill={NX.text} style={{ fontSize: "3.8px", fontFamily: F }}>{row.carrier}</text>
            <text x="90" y={y + 13} fill={NX.text} style={{ fontSize: "3.5px", fontFamily: M }}>{row.contract}</text>
            <text x="160" y={y + 13} fill={NX.text} style={{ fontSize: "3.5px", fontFamily: M }}>{row.orig}</text>
            <text x="200" y={y + 13} fill={NX.text} style={{ fontSize: "3.5px", fontFamily: M }}>{row.dest}</text>
            <text x="260" y={y + 13} fill={NX.text} style={{ fontSize: "3.5px", fontFamily: F }}>{row.pod}</text>
            <text x="340" y={y + 13} fill={NX.text} style={{ fontSize: "3.5px", fontFamily: M }}>{row.svc}</text>
            <text x="400" y={y + 13} fill={NX.text} style={{ fontSize: "3.8px", fontFamily: M, fontWeight: 500 }}>{row.r20}</text>
            <text x="440" y={y + 13} fill={NX.text} style={{ fontSize: "3.8px", fontFamily: M, fontWeight: 500 }}>{row.r40}</text>
          </g>
        );
      })}

      {/* ── Filter button (left edge) ── */}
      <rect x="0" y="48" width="6" height="20" rx="0" fill={NX.surface} stroke={NX.border} strokeWidth="0.3" />
      <text x="3" y="56" textAnchor="middle" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: F }}>‹</text>
      <text x="3" y="63" textAnchor="middle" fill={NX.textMuted} style={{ fontSize: "2.5px", fontFamily: F, letterSpacing: "0.3em", writingMode: "vertical-rl" as React.CSSProperties["writingMode"] }}>F</text>
    </svg>
  );
}

function FilterDrawerDrawing() {
  const F = PRODUCT_FONT;
  return (
    <svg viewBox="0 0 115 270" preserveAspectRatio="xMinYMin slice" role="presentation">
      <rect x="0" y="0" width="115" height="270" fill={NX.white} />

      {/* Header */}
      <text x="8" y="28" fill={NX.navy} style={{ fontSize: "7px", fontFamily: F, fontWeight: 500 }}>‹</text>
      <text x="20" y="28" fill={NX.navy} style={{ fontSize: "7px", fontFamily: F, fontWeight: 500 }}>Filters</text>
      <text x="95" y="28" fill={NX.blue} style={{ fontSize: "5px", fontFamily: F }}>↻ Reset</text>

      <line x1="8" y1="36" x2="107" y2="36" stroke={NX.border} strokeWidth="0.5" />

      {/* Filter fields */}
      {[
        "Contract number",
        "Carrier",
        "Commodity",
        "Service",
        "Cargo type",
        "Vessel available",
      ].map((label, i) => {
        const y = 48 + i * 30;
        return (
          <g key={i}>
            <rect x="8" y={y} width="99" height="20" rx="4" fill={NX.white} stroke={NX.border} strokeWidth="0.6" />
            <text x="14" y={y + 12} fill={NX.text} style={{ fontSize: "4px", fontFamily: F }}>{label}</text>
            <text x="14" y={y + 12} fill={NX.text} style={{ fontSize: "4px", fontFamily: F }}>{label}</text>
            <text x="78" y={y + 12} fill={NX.textMuted} style={{ fontSize: "4px", fontFamily: F }}>· All</text>
            <path d={`M98,${y + 9} L101,${y + 12} L104,${y + 9}`} fill="none" stroke={NX.textMuted} strokeWidth="0.7" />
          </g>
        );
      })}
    </svg>
  );
}

function DocumentHubDrawing() {
  const F = PRODUCT_FONT;
  const M = "var(--font-mono)";
  return (
    <svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" role="presentation">
      {/* ── Nav bar ── */}
      <rect x="0" y="0" width="480" height="22" fill={NX.navy} />
      <text x="16" y="14" fill={NX.textMuted} style={{ fontSize: "5px", fontFamily: F }}>Rates</text>
      <text x="52" y="14" fill={NX.textMuted} style={{ fontSize: "5px", fontFamily: F }}>Indices</text>
      <text x="82" y="14" fill={NX.textMuted} style={{ fontSize: "5px", fontFamily: F }}>Spreads</text>
      {/* Document Hub active */}
      <rect x="390" y="5" width="78" height="13" rx="3" fill={NX.blue} />
      <text x="429" y="14" textAnchor="middle" fill={NX.white} style={{ fontSize: "4.5px", fontFamily: F, fontWeight: 500 }}>Document Hub</text>
      <rect x="390" y="18" width="78" height="1.5" rx="0.75" fill={NX.blue} />

      {/* ── Rate Processing Summary ── */}
      <rect x="10" y="28" width="460" height="32" rx="4" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <text x="18" y="40" fill={NX.navy} style={{ fontSize: "5px", fontFamily: F, fontWeight: 500 }}>Rate Processing Summary</text>

      {/* Stat cards */}
      {[
        { label: "Total Documents", value: "32" },
        { label: "Contracts", value: "6" },
        { label: "Active Rates", value: "17,240" },
        { label: "Expired Rates", value: "540" },
        { label: "Carriers", value: "6" },
      ].map((stat, i) => (
        <g key={i}>
          <text x={18 + i * 92} y="50" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F }}>{stat.label}</text>
          <text x={18 + i * 92} y="56" fill={NX.navy} style={{ fontSize: "5px", fontFamily: M, fontWeight: 500 }}>{stat.value}</text>
          {i < 4 && <line x1={98 + i * 92} y1="44" x2={98 + i * 92} y2="56" stroke={NX.border} strokeWidth="0.4" />}
        </g>
      ))}

      {/* ── Rate Processing Times chart ── */}
      <rect x="10" y="66" width="460" height="100" rx="4" fill={NX.surface} stroke={NX.border} strokeWidth="0.5" />
      <text x="18" y="78" fill={NX.navy} style={{ fontSize: "5px", fontFamily: F, fontWeight: 500 }}>Rate Processing Times</text>

      {/* Legend */}
      <text x="140" y="78" fill={NX.success} style={{ fontSize: "3.5px", fontFamily: M }}>SLA Compliance 95.0%</text>
      <line x1="250" y1="76" x2="268" y2="76" stroke={NX.textMuted} strokeWidth="0.5" strokeDasharray="2 1.5" />
      <text x="272" y="78" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: M }}>Mean 30.1h</text>
      <line x1="330" y1="76" x2="348" y2="76" stroke={NX.text} strokeWidth="0.8" />
      <text x="352" y="78" fill={NX.text} style={{ fontSize: "3.5px", fontFamily: M }}>SLA Target 48h</text>

      {/* Y-axis labels */}
      <text x="22" y="90" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>80h</text>
      <text x="22" y="104" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>60h</text>
      <text x="22" y="118" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>40h</text>
      <text x="22" y="132" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>20h</text>
      <text x="22" y="146" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>0h</text>

      {/* SLA target line */}
      <line x1="38" y1="102" x2="460" y2="102" stroke={NX.text} strokeWidth="0.5" />
      {/* Mean line */}
      <line x1="38" y1="122" x2="460" y2="122" stroke={NX.textMuted} strokeWidth="0.5" strokeDasharray="2 1.5" />

      {/* Bars — green for under SLA, red for over */}
      {[30, 32, 28, 55, 38, 35, 45, 22, 20, 38, 35, 14, 25].map((h, i) => {
        const barH = h * 0.8;
        const x = 48 + i * 30;
        const color = h > 48 ? NX.danger : NX.success;
        return <rect key={i} x={x} y={148 - barH} width="14" height={barH} rx="1" fill={color} opacity="0.8" />;
      })}

      {/* X-axis labels */}
      <text x="50" y="156" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>Mar 2</text>
      <text x="140" y="156" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>Mar 4</text>
      <text x="230" y="156" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>Mar 6</text>
      <text x="320" y="156" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>Mar 7</text>
      <text x="410" y="156" fill={NX.textMuted} style={{ fontSize: "3px", fontFamily: M }}>Mar 12</text>

      {/* ── Rate Documents table ── */}
      <rect x="10" y="172" width="460" height="96" rx="4" fill={NX.white} stroke={NX.border} strokeWidth="0.5" />
      <text x="18" y="184" fill={NX.navy} style={{ fontSize: "5px", fontFamily: F, fontWeight: 500 }}>Rate Documents</text>

      {/* Table header */}
      <rect x="10" y="188" width="460" height="14" fill={NX.surface} />
      <text x="18" y="197" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Document Name</text>
      <text x="200" y="197" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Upload Date</text>
      <text x="320" y="197" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Status</text>
      <text x="410" y="197" fill={NX.textMuted} style={{ fontSize: "3.5px", fontFamily: F, fontWeight: 500 }}>Published</text>

      {/* Document rows */}
      {[
        { name: "Hapag_Contract_Mar.pdf", date: "09:00 Mar 1, 2026", status: "Processed", pub: "13:00" },
        { name: "COSCO_Rates_Mar_001.xlsx", date: "10:00 Mar 1, 2026", status: "Processed", pub: "20:00" },
        { name: "Maersk_Rates_Mar_001.xlsx", date: "09:00 Mar 2, 2026", status: "Processed", pub: "15:00" },
        { name: "MSC_Spot_Mar.xlsx", date: "10:00 Mar 2, 2026", status: "Processed", pub: "18:00" },
        { name: "Evergreen_Rates_Mar.xlsx", date: "09:00 Mar 4, 2026", status: "Pending", pub: "—" },
      ].map((doc, i) => {
        const y = 202 + i * 14;
        const isProcessed = doc.status === "Processed";
        return (
          <g key={i}>
            <line x1="10" y1={y} x2="470" y2={y} stroke={NX.border} strokeWidth="0.3" />
            <text x="18" y={y + 9} fill={NX.blue} style={{ fontSize: "3.5px", fontFamily: M, textDecoration: "underline" }}>{doc.name}</text>
            <text x="200" y={y + 9} fill={NX.text} style={{ fontSize: "3.5px", fontFamily: M }}>{doc.date}</text>
            {/* Status badge */}
            <rect x="320" y={y + 2} width={isProcessed ? 34 : 28} height="10" rx="3" fill={isProcessed ? NX.successLight : NX.surface} stroke={isProcessed ? NX.success : NX.border} strokeWidth="0.4" />
            <text x={isProcessed ? 337 : 334} y={y + 9} textAnchor="middle" fill={isProcessed ? NX.success : NX.textMuted} style={{ fontSize: "3px", fontFamily: F, fontWeight: 500 }}>{doc.status}</text>
            <text x="410" y={y + 9} fill={NX.text} style={{ fontSize: "3.5px", fontFamily: M }}>{doc.pub}</text>
          </g>
        );
      })}
    </svg>
  );
}

type RatesPhase =
  | "idle"
  | "clickFilter"
  | "filterIn"
  | "filterHold"
  | "filterOut"
  | "clickDocHub"
  | "pageSlide"
  | "docsHold"
  | "pageReset"
  | "pause";

function RatesWalkthroughMotif() {
  const [phase, setPhase] = useState<RatesPhase>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const visibleRef = useRef(false);
  const layoutRef = useRef<HTMLDivElement>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const schedule = (next: RatesPhase, delay: number) => {
    clearTimer();
    timerRef.current = setTimeout(() => setPhase(next), delay);
  };

  // Drive the state machine
  useEffect(() => {
    if (!visibleRef.current && (phase === "idle" || phase === "pause")) {
      if (phase === "pause") setPhase("idle");
      return;
    }

    switch (phase) {
      case "clickFilter":
        schedule("filterIn", 400);
        break;
      case "filterIn":
        schedule("filterHold", 400);
        break;
      case "filterHold":
        schedule("filterOut", 1000);
        break;
      case "filterOut":
        schedule("clickDocHub", 400);
        break;
      case "clickDocHub":
        schedule("pageSlide", 500);
        break;
      case "pageSlide":
        schedule("docsHold", 500);
        break;
      case "docsHold":
        schedule("pageReset", 1400);
        break;
      case "pageReset":
        schedule("pause", 500);
        break;
      case "pause":
        schedule("clickFilter", 400);
        break;
    }

    return clearTimer;
  }, [phase]);

  // Start animation when element enters viewport
  useEffect(() => {
    const el = layoutRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleRef.current = true;
          setPhase((p) => (p === "idle" ? "clickFilter" : p));
        } else {
          visibleRef.current = false;
          // Will stop at next natural break
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimer();
    };
  }, []);

  // Compute transforms from phase
  const tableX =
    phase === "pageSlide" || phase === "docsHold" ? "-100%" : "0";
  const filterX =
    phase === "filterIn" || phase === "filterHold" ? "0" : "-100%";
  const docsX =
    phase === "pageSlide" || phase === "docsHold" ? "0" : "100%";

  // Click indicator position
  const showClick = phase === "clickFilter" || phase === "clickDocHub";
  const clickPos =
    phase === "clickFilter"
      ? { left: "1%", top: "22%" } // near filter button
      : { left: "90%", top: "4%" }; // near Upload button

  return (
    <div
      ref={layoutRef}
      className={styles.ratesLayout}
    >
      {/* Table page */}
      <div
        className={styles.ratesPage}
        style={{ transform: `translateX(${tableX})` }}
      >
        <RatesTableDrawing />
      </div>

      {/* Filter drawer */}
      <div
        className={styles.ratesFilterDrawer}
        style={{ transform: `translateX(${filterX})` }}
      >
        <FilterDrawerDrawing />
      </div>

      {/* Documents page */}
      <div
        className={styles.ratesPage}
        style={{ transform: `translateX(${docsX})` }}
      >
        <DocumentHubDrawing />
      </div>

      {/* Click indicator */}
      {showClick && (
        <div
          key={phase} // remount to replay animation
          className={styles.ratesClickDot}
          style={clickPos}
        />
      )}
    </div>
  );
}

// ── Other motifs ──────────────────────────────────────────────────────────────

function Motif({ variant }: { variant: VisualVariant }) {
  if (variant === "fragments") {
    return (
      <svg viewBox="0 0 320 180" className={styles.svg} role="presentation">
        <g className={styles.float1}>
          <rect x="22" y="34" width="120" height="84" rx="4" className={styles.surface} />
          <rect x="38" y="50" width="64" height="6" rx="3" className={styles.line} />
          <rect x="38" y="66" width="88" height="6" rx="3" className={styles.lineFaint} />
          <rect x="38" y="92" width="40" height="14" rx="2" className={styles.accentFill} />
        </g>
        <g className={styles.float2}>
          <rect x="160" y="58" width="138" height="92" rx="4" className={styles.surface} />
          <rect x="176" y="74" width="74" height="6" rx="3" className={styles.line} />
          <rect x="176" y="90" width="106" height="6" rx="3" className={styles.lineFaint} />
          <rect x="176" y="106" width="106" height="6" rx="3" className={styles.lineFaint} />
          <circle cx="284" cy="78" r="5" className={styles.accentDot} />
        </g>
      </svg>
    );
  }

  if (variant === "diagram") {
    return (
      <svg viewBox="0 0 320 180" className={styles.svg} role="presentation">
        <rect x="40" y="26" width="240" height="34" rx="4" className={styles.surface} />
        <rect x="56" y="38" width="120" height="6" rx="3" className={styles.line} />
        <rect x="232" y="36" width="32" height="12" rx="2" className={styles.accentFill} />
        <rect x="40" y="72" width="240" height="22" rx="4" className={styles.surfaceFaint} />
        <rect x="56" y="80" width="150" height="5" rx="2.5" className={styles.lineFaint} />
        <rect x="40" y="104" width="240" height="22" rx="4" className={styles.surfaceFaint} />
        <rect x="56" y="112" width="120" height="5" rx="2.5" className={styles.lineFaint} />
        <rect x="40" y="136" width="240" height="22" rx="4" className={styles.surfaceFaint} />
        <rect x="56" y="144" width="170" height="5" rx="2.5" className={styles.lineFaint} />
        <line x1="28" y1="26" x2="28" y2="158" className={styles.rail} />
        <circle cx="28" cy="43" r="4" className={styles.accentDot} />
      </svg>
    );
  }

  if (variant === "designmd") {
    return <DesignMdMotif />;
  }

  if (variant === "ratesWalkthrough") {
    return <RatesWalkthroughMotif />;
  }

  if (variant === "mobileSlider") {
    return <MobileSliderMotif />;
  }

  if (variant === "creditCoachSlider") {
    return <CreditCoachSliderMotif />;
  }

  if (variant === "creditCoachDiagram") {
    return <CreditCoachDiagramMotif />;
  }

  // annotated
  return (
    <svg viewBox="0 0 320 180" className={styles.svg} role="presentation">
      <rect x="30" y="28" width="200" height="124" rx="4" className={styles.surface} />
      <rect x="46" y="44" width="90" height="7" rx="3" className={styles.line} />
      <rect x="46" y="62" width="168" height="5" rx="2.5" className={styles.lineFaint} />
      <rect x="46" y="78" width="168" height="5" rx="2.5" className={styles.lineFaint} />
      <rect x="46" y="100" width="80" height="20" rx="2" className={styles.lineFaint} />
      <rect x="134" y="100" width="80" height="20" rx="2" className={styles.lineFaint} />
      <circle cx="250" cy="50" r="6" className={styles.accentRing} />
      <line x1="244" y1="56" x2="226" y2="64" className={styles.annoLine} />
      <circle cx="262" cy="110" r="6" className={styles.accentRing} />
      <line x1="256" y1="112" x2="218" y2="110" className={styles.annoLine} />
    </svg>
  );
}

export function Visual({
  caption,
  variant,
  video,
}: {
  caption: string;
  variant: VisualVariant;
  video?: string;
}) {
  if (video) {
    return <VideoHero src={video} caption={caption} />;
  }
  return (
    <figure className={styles.figure}>
      <div className={`${styles.block}${variant === "creditCoachSlider" ? ` ${styles.blockWhite}` : ""}`}>
        {variant !== "designmd" && variant !== "mobileSlider" && variant !== "ratesWalkthrough" && variant !== "creditCoachSlider" && variant !== "creditCoachDiagram" && (
          <span className={styles.tag}>Visual</span>
        )}
        <Motif variant={variant} />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
