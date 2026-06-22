// src/components/about/ApproachSection.tsx
// "Our Approach" — 5 focus points rendered as icon-accented rows.
// Cream background, consistent with ServicesSection alternation.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

// ── Data ──────────────────────────────────────────────────────────────────────
const APPROACH_POINTS = [
  {
    label: "Practical and solution-oriented legal guidance",
    detail: "We focus on what can actually be done, not just what the law says in theory.",
  },
  {
    label: "Clear legal analysis and preparation",
    detail: "Every matter is researched and prepared with care before any step is taken.",
  },
  {
    label: "Responsive and understandable communication",
    detail: "Legal issues are explained in plain terms so clients can make informed decisions.",
  },
  {
    label: "Ethical and professional representation",
    detail: "Every engagement is guided by honesty, integrity, and professional standards.",
  },
  {
    label: "Personalized attention to each matter",
    detail: "No two cases are identical. Each matter is evaluated on its own facts.",
  },
];

// ── Sub-component ─────────────────────────────────────────────────────────────
interface ApproachItemProps {
  label: string;
  detail: string;
  index: number;
}

const ApproachItem: React.FC<ApproachItemProps> = ({ label, detail, index }) => (
  <div className="flex gap-5 items-start py-5 border-b border-[#E8D5A3] last:border-0">
    {/* Gold ordinal — subtle, not decorative numbering; encodes actual sequence */}
    <div
      className="flex-shrink-0 w-8 h-8 border border-[#C9A84C] flex items-center justify-center"
      aria-hidden="true"
    >
      <span
        className="text-[#C9A84C] text-sm font-light"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
    <div>
      <p
        className="text-lg text-[#1C1C1C] font-semibold leading-snug mb-1"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {label}
      </p>
      <p className="font-sans text-sm text-[#5C5C5C] leading-relaxed">{detail}</p>
    </div>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const ApproachSection: React.FC = () => (
  <section className="bg-[#F5F0E8] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

      {/* Left: heading — stays sticky on scroll on wider screens */}
      <div className="md:sticky md:top-24">
        <SectionEyebrow>How We Work</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Our Approach
        </h2>
        <GoldRule />
        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed">
          Every legal matter is different. The office approaches each case with careful
          attention to facts, objectives, and practical realities.
        </p>
        <p className="font-sans text-sm text-[#C9A84C] mt-6 tracking-wide">
          Our goal is to help clients understand their position and make informed decisions.
        </p>
      </div>

      {/* Right: approach points */}
      <div>
        {APPROACH_POINTS.map((point, i) => (
          <ApproachItem key={point.label} {...point} index={i} />
        ))}
      </div>

    </div>
  </section>
);

export default ApproachSection;
