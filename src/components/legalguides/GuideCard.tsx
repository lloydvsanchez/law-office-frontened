// src/components/legalguides/GuideCard.tsx
// Reusable card for a single guide topic.
// Currently renders as a "coming soon" placeholder — wire to real articles
// from the Rails API when content is published.
//
// FUTURE: when a guide has a real slug/URL, pass `href` to make it a link.

import React from "react";

interface GuideCardData {
  title: string;
  /** Optional — pass when the article is published and has a route */
  href?: string;
}

const GuideCard: React.FC<GuideCardData> = ({ title, href }) => {
  const inner = (
    <div
      className="flex items-start gap-4 p-5 bg-white border border-[#E8D5A3]
        hover:border-[#C9A84C] transition-colors duration-200 group h-full"
    >
      {/* Gold document icon */}
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
          className="text-base text-[#1C1C1C] font-semibold leading-snug
            group-hover:text-[#C9A84C] transition-colors duration-150"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {title}
        </p>
        {/* Show "Coming Soon" badge when no href yet */}
        {!href && (
          <span className="inline-block mt-1.5 font-sans text-[9px] uppercase tracking-widest
            text-[#C9A84C] border border-[#E8D5A3] px-2 py-0.5">
            Coming Soon
          </span>
        )}
      </div>

      {/* Arrow — only when linked */}
      {href && (
        <svg
          className="flex-shrink-0 w-4 h-4 text-[#C9A84C] opacity-0 group-hover:opacity-100
            transition-opacity duration-150 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {inner}
      </a>
    );
  }

  return <div className="h-full">{inner}</div>;
};

export type { GuideCardData };
export default GuideCard;
