// src/components/contact/ResponseProcessSection.tsx
// "Response Process" — 4-step numbered flow.
// Dark background, horizontal on desktop, vertical on mobile.
// Connected by a gold line to read as a sequence.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

const STEPS = [
  { number: "01", label: "Inquiry Received",           note: "Your message is received through the chosen channel." },
  { number: "02", label: "Initial Review",             note: "The concern is reviewed to understand the nature of the matter." },
  { number: "03", label: "Assessment of Concern",      note: "The office evaluates the legal issues involved." },
  { number: "04", label: "Guidance or Scheduling",     note: "You receive initial guidance or a consultation is arranged." },
];

const ResponseProcessSection: React.FC = () => (
  <section className="bg-[#1A1A1A] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">

      <div className="text-center mb-14">
        <SectionEyebrow>What Happens Next</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-white font-light leading-snug mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Response Process
        </h2>
        <GoldRule centered />
      </div>

      {/* Steps — horizontal on md+, vertical stack on mobile */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Connecting gold line — desktop only */}
        <div className="hidden lg:block absolute top-6 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-[#C9A84C] opacity-30 pointer-events-none" />

        {STEPS.map(({ number, label, note }) => (
          <div key={number} className="relative flex flex-col items-center text-center">
            {/* Gold circle with number */}
            <div className="relative z-10 w-12 h-12 rounded-full border border-[#C9A84C] bg-[#1A1A1A]
              flex items-center justify-center mb-5">
              <span
                className="text-[#C9A84C] text-base font-light"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {number}
              </span>
            </div>
            <h3
              className="text-lg text-white font-semibold mb-2 leading-snug"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {label}
            </h3>
            <p className="font-sans text-sm text-[#A8A8A8] leading-relaxed">{note}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ResponseProcessSection;
