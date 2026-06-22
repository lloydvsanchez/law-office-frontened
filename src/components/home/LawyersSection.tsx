// src/components/home/LawyersSection.tsx
// "For Fellow Lawyers" — professional support services section.
// Split layout: copy left, image right.

import React from "react";
import GoldRule from "../ui/GoldRule";
import CtaButton from "../ui/CtaButton";
import SectionEyebrow from "../ui/SectionEyebrow";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const LawyersSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      {/* ── Left: Copy ── */}
      <div>
        <SectionEyebrow>Professional Services</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          For Fellow Lawyers
        </h2>
        <GoldRule />

        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-6">
          The office provides professional support services for lawyers and law offices
          needing assistance in Cebu. This includes court appearances, correspondent
          counsel services, drafting support, case assistance, and professional
          collaboration.
        </p>

        <CtaButton href="#contact" variant="outline">
          Get in Touch
        </CtaButton>
      </div>

      {/* ── Right: Image ── */}
      {/* SWAP: replace with <img src="/images/lawyers-collaboration.jpg" alt="Professional collaboration" className="w-full h-full object-cover" /> */}
      <div>
        <ImagePlaceholder
          label="Professional Collaboration Photo"
          aspectClass="aspect-[4/3]"
          note="Two lawyers in discussion, court building, or legal library — 1200×900px"
        />
      </div>

    </div>
  </section>
);

export default LawyersSection;
