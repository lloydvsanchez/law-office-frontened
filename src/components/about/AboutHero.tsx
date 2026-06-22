// src/components/about/AboutHero.tsx
// Full-width text-forward hero for the About page.
// Portrait placeholder sits below the headline — the lawyer is the subject.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const AboutHero: React.FC = () => (
  <section className="relative bg-[#F5F0E8] overflow-hidden hero-grain hero-left-rule">
    <div className="max-w-4xl mx-auto px-6 pt-20 md:pt-28 pb-0 text-center">

      <SectionEyebrow>About the Office</SectionEyebrow>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] font-light leading-tight mb-4"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        L. Sanchez{" "}
        <em className="not-italic text-[#C9A84C]">Law Office</em>
      </h1>

      <GoldRule centered />

      <div className="text-left">
        <p className="font-sans text-base md:text-lg text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto mb-4">
          Legal concerns often arise during uncertain and important moments in life.
          Whether the issue involves a dispute, property matter, business concern, or
          legal documentation, clients deserve clear guidance and practical solutions.
        </p>
        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto mb-12">
          The office is committed to helping clients understand their legal situation,
          evaluate their options, and make informed decisions with confidence.
          Based in Cebu City, the office serves individuals, businesses, and fellow
          lawyers across Cebu and throughout the Philippines.
        </p>
      </div>
    </div>

    {/* Wide office/exterior banner placeholder — below the text, flush to section edge */}
    {/* SWAP: replace with <img src="/images/about-banner.jpg" alt="L. Sanchez Law Office, Cebu City" className="w-full object-cover" style={{ maxHeight: 400 }} /> */}
    <div className="max-w-5xl mx-auto px-6 pb-0">
      <ImagePlaceholder
        label="Office or Cebu City Banner Photo"
        aspectClass="aspect-[21/9]"
        note="Wide establishing shot — office exterior, Cebu City hall, or courthouse — 2100×900px"
      />
    </div>
  </section>
);

export default AboutHero;
