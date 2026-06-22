// src/components/about/WhoWeServeSection.tsx
// "Who We Serve" — dark band, 2-column list with gold check marks.
// Mirrors FocusSection's dark band from the homepage for visual rhythm.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

// ── Data ──────────────────────────────────────────────────────────────────────
const CLIENTS = [
  "Individuals seeking legal advice and representation",
  "Families dealing with legal and property concerns",
  "Businesses requiring legal support and documentation",
  "Overseas Filipinos and foreign clients with Philippine legal matters",
  "Fellow lawyers and law offices requiring professional assistance",
];

// ── Sub-component ─────────────────────────────────────────────────────────────
const ClientItem: React.FC<{ label: string }> = ({ label }) => (
  <li className="flex items-start gap-3">
    {/* Gold checkmark */}
    <svg
      className="flex-shrink-0 w-4 h-4 text-[#C9A84C] mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span className="font-sans text-sm text-[#D4D4D4] leading-relaxed">{label}</span>
  </li>
);

// ── Section ───────────────────────────────────────────────────────────────────
const WhoWeServeSection: React.FC = () => (
  <section className="bg-[#1A1A1A] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">

      <div className="text-center mb-12">
        <SectionEyebrow>Clientele</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-white font-light leading-snug mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Who We Serve
        </h2>
        <GoldRule centered />
      </div>

      <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl mx-auto">
        {CLIENTS.map((client) => (
          <ClientItem key={client} label={client} />
        ))}
      </ul>

    </div>
  </section>
);

export default WhoWeServeSection;
