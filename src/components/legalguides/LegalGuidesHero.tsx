// src/components/legalguides/LegalGuidesHero.tsx

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

const LegalGuidesHero: React.FC = () => (
  <section className="relative bg-[#F5F0E8] overflow-hidden hero-grain hero-left-rule">
    <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">

      <SectionEyebrow>Resources</SectionEyebrow>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] font-light leading-tight mb-4"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Legal{" "}
        <em className="not-italic text-[#C9A84C]">Guides</em>
      </h1>

      <GoldRule centered />

      <p className="font-sans text-base md:text-lg text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto mb-3">
        Practical legal information to help clients and lawyers better understand
        common legal issues and processes in the Philippines.
      </p>
      <p className="font-sans text-base text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto">
        The goal is to make legal concepts clearer and more accessible.
      </p>

    </div>
  </section>
);

export default LegalGuidesHero;
