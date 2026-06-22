// src/components/forlawyers/ForLawyersHero.tsx
// Text-forward hero. Audience is professional peers, not general public —
// tone is collegial and direct, not explanatory.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

const ForLawyersHero: React.FC = () => (
  <section className="relative bg-[#F5F0E8] overflow-hidden hero-grain hero-left-rule">
    <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">

      <SectionEyebrow>Professional Services</SectionEyebrow>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] font-light leading-tight mb-4"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        For{" "}
        <em className="not-italic text-[#C9A84C]">Lawyers</em>
      </h1>

      <GoldRule centered />

      <p className="font-sans text-base md:text-lg text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto">
        L. Sanchez Law Office provides professional support services for lawyers
        and law offices requiring assistance in Cebu.
      </p>

    </div>
  </section>
);

export default ForLawyersHero;
