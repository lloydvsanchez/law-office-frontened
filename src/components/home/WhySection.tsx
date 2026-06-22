// src/components/home/WhySection.tsx
// "Why Clients Work With Us" — split layout: image left, value props right.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import ImagePlaceholder from "../ui/ImagePlaceholder";

// ── Data ──────────────────────────────────────────────────────────────────────
interface WhyPoint {
  title: string;
  description: string;
}

const WHY_POINTS: WhyPoint[] = [
  {
    title: "Practical Legal Solutions",
    description: "Clear guidance focused on real-world options, not just legal theory.",
  },
  {
    title: "Clear Communication",
    description: "Legal issues explained in a way clients can understand.",
  },
  {
    title: "Personalized Attention",
    description: "Every matter is evaluated based on its own facts and circumstances.",
  },
  {
    title: "Structured Legal Approach",
    description:
      "A careful, research-based, and organized method of legal analysis and preparation.",
  },
];

// ── Sub-component ─────────────────────────────────────────────────────────────
const WhyCard: React.FC<WhyPoint> = ({ title, description }) => (
  <div className="flex gap-4">
    {/* Gold left bar — the same vertical rule motif as the hero, at micro scale */}
    <div className="flex-shrink-0 w-0.5 bg-[#C9A84C] self-stretch mt-1" />
    <div>
      <h3
        className="text-lg font-semibold text-[#1C1C1C] mb-1"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="font-sans text-sm text-[#5C5C5C] leading-relaxed">{description}</p>
    </div>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const WhySection: React.FC = () => (
  <section id="about" className="bg-[#EDEBE3] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      {/* Image — left on desktop, stacks below on mobile */}
      {/* SWAP: replace with <img src="/images/about-office.jpg" alt="..." className="w-full h-full object-cover" /> */}
      <div className="order-2 md:order-1">
        <ImagePlaceholder
          label="About / Office Photo"
          aspectClass="aspect-[5/4]"
          note="Lawyer reviewing documents, office interior, or consultation — 1000×800px"
        />
      </div>

      {/* Content — right on desktop, top on mobile */}
      <div className="order-1 md:order-2">
        <SectionEyebrow>Why Clients Work With Us</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Results You Can Rely On
        </h2>
        <GoldRule />

        <div className="flex flex-col gap-6">
          {WHY_POINTS.map((point) => (
            <WhyCard key={point.title} {...point} />
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default WhySection;
