// src/components/home/FocusSection.tsx
// Dark band: "A Law Office Focused on Practical Solutions"
// Alternates visually between the cream hero and cream services section.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

const FocusSection: React.FC = () => (
  <section className="bg-[#1A1A1A] py-16 md:py-20">
    <div className="max-w-3xl mx-auto px-6 text-center">

      <SectionEyebrow>Our Approach</SectionEyebrow>

      <h2
        className="text-3xl md:text-4xl text-white font-light leading-snug mb-2"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        A Law Office Focused on Practical Solutions
      </h2>

      <GoldRule centered />

      <p className="font-sans text-base text-[#A8A8A8] leading-relaxed">
        Legal concerns are not just about laws and procedures — they are about real
        problems that need clear answers. The office is committed to helping clients
        understand where they stand, what options are available, and what steps can
        be taken moving forward.
      </p>

    </div>
  </section>
);

export default FocusSection;
