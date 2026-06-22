// src/components/services/ConsultationSection.tsx
// "Consultation" — soft advisory bridge between the services list and the CtaBanner.
// Distinct from CtaBanner: this is informational ("if you're unsure..."),
// not a hard conversion push. Dark background matches the page rhythm.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import CtaButton from "../ui/CtaButton";

const ConsultationSection: React.FC = () => (
  <section id="consultation" className="bg-[#1A1A1A] py-16 md:py-24 scroll-mt-32">
    <div className="max-w-3xl mx-auto px-6 text-center">

      <SectionEyebrow>Not Sure Where to Start?</SectionEyebrow>

      <h2
        className="text-3xl md:text-4xl text-white font-light leading-snug mb-2"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Consultation
      </h2>

      <GoldRule centered />

      <p className="font-sans text-base text-[#A8A8A8] leading-relaxed mb-4 max-w-xl mx-auto">
        If you are unsure about your legal concern, the best step is to schedule a
        consultation so your situation can be properly assessed.
      </p>
      <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed mb-10 max-w-lg mx-auto">
        A proper consultation allows the office to understand the facts of your situation,
        identify the legal issues involved, and provide you with an honest assessment
        of your options and the practical steps available to you.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <CtaButton href="#contact" variant="primary">
          Schedule a Consultation
        </CtaButton>
        <CtaButton href="#contact" variant="outline">
          Contact Us
        </CtaButton>
      </div>

    </div>
  </section>
);

export default ConsultationSection;
