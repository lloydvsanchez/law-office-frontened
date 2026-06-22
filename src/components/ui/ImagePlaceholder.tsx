// src/components/ui/ImagePlaceholder.tsx
// Development-time image placeholder. When real images are ready:
//   1. Replace <ImagePlaceholder> with <img src="..." alt="..." className="w-full h-full object-cover" />
//   2. Wrap in a container with the same aspect-ratio class this component uses
//
// The `aspectClass` prop accepts any Tailwind aspect-ratio class:
//   aspect-video (16/9), aspect-square, aspect-[4/3], aspect-[5/4], etc.

import React from "react";

interface ImagePlaceholderProps {
  /** Short descriptive label shown inside the placeholder */
  label: string;
  /** Tailwind aspect-ratio class. Defaults to aspect-video (16:9). */
  aspectClass?: string;
  /** Optional note about recommended dimensions or photo subject */
  note?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  aspectClass = "aspect-video",
  note,
  className = "",
}) => (
  <div
    className={`
      ${aspectClass} w-full
      flex flex-col items-center justify-center gap-2
      bg-[#E8D5A3] border-2 border-dashed border-[#C9A84C]
      ${className}
    `.trim()}
    role="img"
    aria-label={label}
  >
    {/* Camera / image icon */}
    <svg
      className="w-10 h-10 text-[#A8872E] opacity-50"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      strokeWidth={1.5}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path strokeLinecap="round" d="M21 15l-5-5L5 21" />
    </svg>

    <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#A8872E] text-center px-4 leading-snug">
      {label}
    </p>

    {note && (
      <p className="font-sans text-[10px] text-[#A8872E] opacity-60 text-center px-6 leading-snug">
        {note}
      </p>
    )}
  </div>
);

export default ImagePlaceholder;
