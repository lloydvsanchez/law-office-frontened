// src/components/legalguides/ForLawyersGuidesSection.tsx
// "For Lawyers" — 4 professional reference topics on a dark background.
// Dark band mirrors the pattern from FocusSection / WhoWeServeSection,
// and creates a clear visual split between the two audiences.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import { type GuideCardData } from "./GuideCard";

const LAWYER_GUIDES: GuideCardData[] = [
  { title: "Procedural Notes and References" },
  { title: "Drafting and Practice Insights" },
  { title: "Case Preparation Guides" },
  { title: "Legal Research Summaries" },
];

const ForLawyersGuidesSection: React.FC = () => (
  <section className="bg-[#1A1A1A] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

      {/* Left: sticky heading */}
      <div className="md:sticky md:top-24">
        <SectionEyebrow>For Lawyers</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-white font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Professional References
        </h2>
        <GoldRule />
        <p className="font-sans text-base text-[#A8A8A8] leading-relaxed">
          Practice-focused notes, drafting insights, and procedural references
          for lawyers handling matters in Cebu and across the Philippines.
        </p>
      </div>

      {/* Right: guide cards — white on dark bg for contrast */}
      <div className="grid sm:grid-cols-2 gap-4">
        {LAWYER_GUIDES.map((guide) => (
          <div
            key={guide.title}
            className="flex items-start gap-4 p-5 bg-[#222222] border border-[#2A2A2A]
              hover:border-[#C9A84C] transition-colors duration-200 group"
          >
            <div className="flex-shrink-0 mt-0.5 text-[#C9A84C]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0
                     01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p
                className="text-base text-white font-semibold leading-snug
                  group-hover:text-[#C9A84C] transition-colors duration-150"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {guide.title}
              </p>
              <span className="inline-block mt-1.5 font-sans text-[9px] uppercase
                tracking-widest text-[#C9A84C] border border-[#2A2A2A] px-2 py-0.5">
                Coming Soon
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ForLawyersGuidesSection;
