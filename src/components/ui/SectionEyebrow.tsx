// src/components/ui/SectionEyebrow.tsx
// Small uppercase gold label that sits above section headings.
// Consistent use across all pages reinforces the design system.

import React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  /** Use 'light' on dark backgrounds where the default gold still works,
      but the surrounding text will be white. Default: 'dark' (cream bg). */
  theme?: "dark" | "light";
  className?: string;
}

const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  children,
  theme = "dark",
  className = "",
}) => (
  <p
    className={`
      font-sans text-xs tracking-[0.3em] uppercase mb-3
      ${theme === "dark" ? "text-[#C9A84C]" : "text-[#C9A84C]"}
      ${className}
    `.trim()}
  >
    {children}
  </p>
);

export default SectionEyebrow;
