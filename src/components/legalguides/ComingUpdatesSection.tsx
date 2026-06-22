// src/components/legalguides/ComingUpdatesSection.tsx
// "Coming Updates" — communicates that this section is actively growing.
// Cream background, centered, with a placeholder for a future
// email subscription or notification signup.
//
// FUTURE: replace the static note with an email capture form wired to
//   POST /api/v1/subscriptions when that feature is built.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

const UPCOMING_TOPICS = [
  "Property rights and land registration in the Philippines",
  "Step-by-step guide to filing a civil case",
  "Understanding BP 22 and bouncing check liabilities",
  "How to execute a Special Power of Attorney abroad",
  "Extrajudicial settlement of estate: what you need to know",
];

const ComingUpdatesSection: React.FC = () => (
  <section className="bg-[#EDEBE3] py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-6 text-center">

      <SectionEyebrow>More on the Way</SectionEyebrow>
      <h2
        className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug mb-2"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Coming Updates
      </h2>
      <GoldRule centered />

      <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-10 max-w-xl mx-auto">
        This section will continue to grow with practical legal articles,
        explanations, and guides on common issues in Philippine law.
      </p>

      {/* Upcoming topics preview */}
      <div className="text-left max-w-xl mx-auto mb-10">
        <p className="font-sans text-xs uppercase tracking-widest text-[#C9A84C] mb-4">
          Topics in preparation
        </p>
        <ul className="flex flex-col gap-3">
          {UPCOMING_TOPICS.map((topic) => (
            <li key={topic} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-2 w-4 h-0.5 bg-[#C9A84C]" />
              <span className="font-sans text-sm text-[#5C5C5C] leading-relaxed">
                {topic}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Placeholder for future email capture */}
      {/* SWAP: replace this note with an email subscription form component */}
      <div className="inline-block border border-dashed border-[#C9A84C] px-8 py-5 bg-[#E8D5A3] bg-opacity-40">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#A8872E] mb-1">
          Email Subscription Form — Coming Soon
        </p>
        <p className="font-sans text-xs text-[#A8872E] opacity-70">
          Notify clients when new guides are published · wire to POST /api/v1/subscriptions
        </p>
      </div>

    </div>
  </section>
);

export default ComingUpdatesSection;
