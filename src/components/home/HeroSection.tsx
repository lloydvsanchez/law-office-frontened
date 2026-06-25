// src/components/home/HeroSection.tsx
// Hero: textured cream background, left gold rule, split layout.
// CSS classes hero-grain and hero-left-rule are defined in src/styles/home.css

import React from "react";
import GoldRule from "../ui/GoldRule";
import CtaButton from "../ui/CtaButton";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import SectionEyebrow from "../ui/SectionEyebrow";
import CONTACTS from "../../constants/contacts"

const HeroSection: React.FC = () => (
  <section className="relative bg-[#F5F0E8] overflow-hidden hero-grain hero-left-rule">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

      {/* ── Left: Copy ── */}
      <div>
        <SectionEyebrow>Based in Cebu City · Serving the Philippines</SectionEyebrow>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] font-light leading-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Helping You Navigate Legal Challenges{" "}
          <em className="not-italic text-[#C9A84C]">with Confidence</em>
        </h1>

        <GoldRule />

        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-8 max-w-md">
          Legal issues rarely arrive at convenient times. They often involve uncertainty,
          important decisions, and matters that affect your rights, property, family, or business.
          At L. Sanchez Law Office, we help clients understand their legal situation clearly,
          explore available options, and work toward practical solutions tailored to their needs.
        </p>

        <div className="flex flex-wrap gap-3">
          <CtaButton href={`mailto:${CONTACTS.email}`} variant="primary">
            Schedule a Consultation
          </CtaButton>
          <CtaButton href="/contact#contact" variant="outline">
            Contact Us
          </CtaButton>
        </div>
      </div>

      {/* ── Right: Hero Banner Placeholder ── */}
      {/* SWAP: replace ImagePlaceholder with:
          <div className="gold-frame-offset aspect-[4/3] overflow-hidden">
            <img src="/images/hero-banner.jpg" alt="L. Sanchez Law Office — Cebu City" className="w-full h-full object-cover" />
          </div>
      */}
      <div className="gold-frame-offset">
        <ImagePlaceholder
          label="Hero Banner Photo"
          aspectClass="aspect-[4/3]"
          note="Courthouse exterior, Cebu City landmark, or lawyer at desk — 1200×900px"
        />
      </div>

    </div>
  </section>
);

export default HeroSection;
