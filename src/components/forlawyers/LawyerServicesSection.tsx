// src/components/forlawyers/LawyerServicesSection.tsx
// "Available Services" — 5 professional support services.
// Rendered as a structured two-column grid of detail cards.
// Audience is lawyers — layout is clean and information-dense, not marketing-heavy.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import ImagePlaceholder from "../ui/ImagePlaceholder";

// ── Data ──────────────────────────────────────────────────────────────────────
interface LawyerService {
  number: string;
  title: string;
  description: string;
}

const LAWYER_SERVICES: LawyerService[] = [
  {
    number: "01",
    title: "Court Appearances",
    description:
      "Hearings, conferences, mediation, and other court-related appearances on behalf of referring counsel.",
  },
  {
    number: "02",
    title: "Correspondent Counsel Services",
    description:
      "Local assistance for lawyers outside Cebu, including filings, coordination, and status updates.",
  },
  {
    number: "03",
    title: "Drafting & Case Support",
    description:
      "Pleadings, motions, memoranda, and legal research assistance for ongoing matters.",
  },
  {
    number: "04",
    title: "Notarial Assistance",
    description:
      "Notarial coordination and document execution support for referring offices.",
  },
  {
    number: "05",
    title: "Professional Collaboration",
    description:
      "Co-counsel arrangements and referral-based collaboration on a case-by-case basis.",
  },
];

// ── Sub-component ─────────────────────────────────────────────────────────────
const LawyerServiceCard: React.FC<LawyerService> = ({ number, title, description }) => (
  <div className="flex gap-5 items-start p-6 bg-white border border-[#E8D5A3] hover:border-[#C9A84C] transition-colors duration-200">
    <div
      className="flex-shrink-0 w-9 h-9 border border-[#C9A84C] flex items-center justify-center"
      aria-hidden="true"
    >
      <span
        className="text-[#C9A84C] text-sm font-light"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {number}
      </span>
    </div>
    <div>
      <h3
        className="text-xl text-[#1C1C1C] font-semibold leading-snug mb-2"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="font-sans text-sm text-[#5C5C5C] leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const LawyerServicesSection: React.FC = () => (
  <section className="bg-[#F5F0E8] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

      {/* Left: heading — sticky on desktop scroll */}
      <div className="md:sticky md:top-32">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Available Services
        </h2>
        <GoldRule />
        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-8">
          Support services tailored for lawyers and law offices that need
          reliable local assistance in Cebu.
        </p>

        {/* SWAP: replace with an appropriate professional photo */}
        <ImagePlaceholder
          label="Professional Support Photo"
          aspectClass="aspect-[4/3]"
          note="Lawyer at desk, court filing, or legal library — 1200×900px"
        />
      </div>

      {/* Right: service cards */}
      <div className="flex flex-col gap-4">
        {LAWYER_SERVICES.map((service) => (
          <LawyerServiceCard key={service.number} {...service} />
        ))}
      </div>

    </div>
  </section>
);

export default LawyerServicesSection;
