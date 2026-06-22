// src/components/icons/ServiceIcons.tsx
// Inline SVG icons for the Services section.
// No external icon library dependency — these travel with the component.
// All icons use currentColor so they inherit text-[#C9A84C] from the parent.

import React from "react";

interface IconProps {
  className?: string;
}

export const IconLitigation: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Scales of justice */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 9h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l-3 6h6l-3-6zM18 9l-3 6h6l-3-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
  </svg>
);

export const IconProperty: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6" />
  </svg>
);

export const IconBusiness: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
    />
  </svg>
);

export const IconDocument: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
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
);

export const IconADR: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857
         M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857
         m0 0a5.002 5.002 0 019.288 0"
    />
  </svg>
);

export const IconNotarial: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
