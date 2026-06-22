// src/components/forlawyers/ProfessionalStandardsSection.tsx
// "Professional Standards" — dark band.
// Short and confident — this is a peer-to-peer statement, not a sales pitch.
// Three standards rendered as inline pillars, not a bullet list.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

const STANDARDS = [
  {
    title: "Confidentiality",
    description:
      "All matters shared in the context of professional engagement are handled with strict confidentiality.",
  },
  {
    title: "Responsiveness",
    description:
      "Timely updates and communication are maintained throughout every engagement.",
  },
  {
    title: "Professional Respect",
    description:
      "Engagements are conducted with full respect for the referring lawyer's relationship with their client.",
  },
];

const ProfessionalStandardsSection: React.FC = () => (
  <section className="bg-[#1A1A1A] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">

      <div className="text-center mb-14">
        <SectionEyebrow>How We Work With You</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-white font-light leading-snug mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Professional Standards
        </h2>
        <GoldRule centered />
        <p className="font-sans text-base text-[#A8A8A8] leading-relaxed max-w-xl mx-auto">
          All engagements are handled with confidentiality, responsiveness,
          and respect for professional relationships.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-px bg-[#2A2A2A]">
        {STANDARDS.map(({ title, description }) => (
          <div
            key={title}
            className="bg-[#1A1A1A] px-8 py-10 text-center hover:bg-[#212121] transition-colors duration-200"
          >
            {/* Gold top bar */}
            <div className="w-8 h-0.5 bg-[#C9A84C] mx-auto mb-5" />
            <h3
              className="text-xl text-white font-semibold mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {title}
            </h3>
            <p className="font-sans text-sm text-[#A8A8A8] leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ProfessionalStandardsSection;
