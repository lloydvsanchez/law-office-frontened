// src/components/about/ValuesSection.tsx
// "Values" — 2×2 grid. Value name in display type, description in body.
// White background to break the cream/dark alternation pattern.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

// ── Data ──────────────────────────────────────────────────────────────────────
const VALUES = [
  {
    name: "Integrity",
    description: "Trust and honesty guide every engagement with clients and the court.",
  },
  {
    name: "Competence",
    description: "Careful preparation, thorough research, and sound legal analysis on every matter.",
  },
  {
    name: "Accessibility",
    description: "Clear and understandable communication so clients are never left in the dark.",
  },
  {
    name: "Service",
    description: "Professional and respectful handling of every matter, regardless of scale.",
  },
];

// ── Sub-component ─────────────────────────────────────────────────────────────
interface ValueCardProps {
  name: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ name, description }) => (
  <div className="p-8 border border-[#E8D5A3] bg-[#FAFAF8] hover:border-[#C9A84C] transition-colors duration-200 group">
    {/* Gold accent top bar */}
    <div className="w-8 h-0.5 bg-[#C9A84C] mb-5" />
    <h3
      className="text-2xl md:text-3xl text-[#1C1C1C] font-light mb-3 group-hover:text-[#C9A84C] transition-colors duration-150"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {name}
    </h3>
    <p className="font-sans text-sm text-[#5C5C5C] leading-relaxed">{description}</p>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const ValuesSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">

      <div className="mb-12">
        <SectionEyebrow>What We Stand For</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Values
        </h2>
        <GoldRule />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {VALUES.map((v) => (
          <ValueCard key={v.name} {...v} />
        ))}
      </div>

    </div>
  </section>
);

export default ValuesSection;
