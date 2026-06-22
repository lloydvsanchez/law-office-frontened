// src/components/legalguides/ForClientsSection.tsx
// "For Clients" — 5 guide topics in a 2-column card grid.
// Cards use GuideCard with no href until articles are published.
// Add href to each entry when the Rails API/blog route is ready.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import GuideCard, { type GuideCardData } from "./GuideCard";

const CLIENT_GUIDES: GuideCardData[] = [
  { title: "Understanding Legal Disputes" },
  { title: "Property and Land Issues Explained" },
  { title: "Contracts and Agreements Basics" },
  { title: "What to Expect in Legal Proceedings" },
  { title: "Document Requirements and Procedures" },
];

const ForClientsSection: React.FC = () => (
  <section className="bg-[#F5F0E8] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

      {/* Left: sticky heading */}
      <div className="md:sticky md:top-24">
        <SectionEyebrow>For Clients</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Client Guides
        </h2>
        <GoldRule />
        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed">
          Practical explanations of common legal concerns to help you understand
          your situation before or during a consultation.
        </p>
      </div>

      {/* Right: guide cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {CLIENT_GUIDES.map((guide) => (
          <GuideCard key={guide.title} {...guide} />
        ))}
      </div>

    </div>
  </section>
);

export default ForClientsSection;
