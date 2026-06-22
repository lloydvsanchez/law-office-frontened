// src/components/ui/CtaButton.tsx
// Reusable CTA button with primary (gold fill) and outline variants.
// Used across Navbar, Hero, sections, and CtaBanner.

import React from "react";

interface CtaButtonProps {
  children: React.ReactNode;
  /** 'primary' = gold fill, white text. 'outline' = gold border, gold text → gold fill on hover. */
  variant?: "primary" | "outline";
  href?: string;
  /** Use when the button should trigger a JS action instead of navigation */
  onClick?: () => void;
  className?: string;
}

const base =
  "inline-block font-sans text-sm font-medium tracking-wide uppercase px-7 py-3 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2";

const variants = {
  primary: "bg-[#C9A84C] text-white hover:bg-[#A8872E]",
  outline:
    "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white",
};

const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}) => {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default CtaButton;
