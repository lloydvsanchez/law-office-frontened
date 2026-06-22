// src/components/about/AttorneySection.tsx
// "Meet Atty. Lloyd Sanchez" — portrait left, bio right.
// Credentials rendered as styled inline badges for scannability.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import ImagePlaceholder from "../ui/ImagePlaceholder";

// ── Credential badge ──────────────────────────────────────────────────────────
interface CredentialProps {
  institution: string;
  degree: string;
  field: string;
}

const CredentialBadge: React.FC<CredentialProps> = ({ institution, degree, field }) => (
  <div className="flex gap-3 items-start py-3 border-b border-[#E8D5A3] last:border-0">
    {/* Gold dash accent */}
    <div className="flex-shrink-0 mt-2 w-4 h-0.5 bg-[#C9A84C]" />
    <div>
      <p
        className="text-base text-[#1C1C1C] font-semibold leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {degree}
      </p>
      <p className="font-sans text-xs text-[#C9A84C] tracking-wide uppercase mt-0.5">
        {field}
      </p>
      <p className="font-sans text-sm text-[#5C5C5C] mt-0.5">{institution}</p>
    </div>
  </div>
);

// ── License badge ─────────────────────────────────────────────────────────────
interface LicenseProps {
  title: string;
  note: string;
}

const LicenseBadge: React.FC<LicenseProps> = ({ title, note }) => (
  <div className="inline-flex flex-col border border-[#C9A84C] px-4 py-2 mr-3 mb-3">
    <span
      className="text-sm text-[#1C1C1C] font-semibold"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {title}
    </span>
    <span className="font-sans text-[10px] text-[#C9A84C] tracking-widest uppercase mt-0.5">
      {note}
    </span>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const AttorneySection: React.FC = () => (
  <section className="bg-[#EDEBE3] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

      {/* ── Left: Portrait + license badges ── */}
      <div>
        {/* SWAP: replace with <img src="/images/atty-lloyd-sanchez.jpg" alt="Atty. Lloyd Sanchez" className="w-full object-cover" /> */}
        <ImagePlaceholder
          label="Portrait — Atty. Lloyd Sanchez"
          aspectClass="aspect-[3/4]"
          note="Professional headshot or formal portrait — 900×1200px"
        />

        {/* PRC License badges */}
        <div className="mt-5">
          <p className="font-sans text-[10px] text-[#5C5C5C] uppercase tracking-widest mb-3">
            PRC Licenses
          </p>
          <LicenseBadge title="Real Estate Broker" note="PRC Licensed" />
          <LicenseBadge title="Real Estate Appraiser" note="PRC Licensed" />
        </div>
      </div>

      {/* ── Right: Bio ── */}
      <div>
        <SectionEyebrow>The Lawyer Behind the Office</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Meet Atty.{" "}
          <em className="not-italic text-[#C9A84C]">Lloyd Sanchez</em>
        </h2>
        <GoldRule />

        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-4">
          Atty. Lloyd Sanchez brings a multidisciplinary background to legal practice,
          combining law, technology, and real estate. This background supports a
          structured, research-oriented, and analytical approach to legal work.
        </p>

        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-8">
          He is also a PRC-licensed Real Estate Broker and Real Estate Appraiser,
          providing practical insight into property transactions, documentation, and
          valuation-related concerns.
        </p>

        {/* Academic credentials */}
        <div>
          <p className="font-sans text-[10px] text-[#5C5C5C] uppercase tracking-widest mb-1">
            Academic Background
          </p>
          <CredentialBadge
            degree="Juris Doctor"
            field="Law"
            institution="University of San Jose-Recoletos, Cebu City"
          />
          <CredentialBadge
            degree="Bachelor of Science in Computer Science"
            field="Technology"
            institution="University of the Philippines"
          />
        </div>
      </div>

    </div>
  </section>
);

export default AttorneySection;
