// src/components/ui/GoldRule.tsx
// The horizontal gold rule accent placed beneath every section title.
// This is a core design-system element — use it consistently across all pages.

import React from "react";

interface GoldRuleProps {
  /** Center the rule (for dark/centered sections). Default: left-aligned. */
  centered?: boolean;
  className?: string;
}

const GoldRule: React.FC<GoldRuleProps> = ({ centered = false, className = "" }) => (
  <div
    className={`
      w-16 h-0.5 bg-[#C9A84C] mt-4 mb-6
      ${centered ? "mx-auto" : ""}
      ${className}
    `.trim()}
  />
);

export default GoldRule;
