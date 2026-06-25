// src/components/Navbar.tsx
// Sticky top navigation bar.
// SWAP: Replace the text wordmark with <img src="/logo.svg" alt="L. Sanchez Law Office" />
//       once a real logo file is available.

import React, { useState } from "react";
import CtaButton from "./ui/CtaButton";
import CONTACTS from "../constants/contacts"

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Legal Guides", href: "/legal-guides" },
  { label: "For Lawyers", href: "/for-lawyers"    },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8D5A3]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Wordmark / Logo ── */}
        {/* SWAP: replace this <a> content with your logo SVG or <img> */}
        <a href="/" className="flex flex-col leading-none flex-shrink-0">
          <span
            className="text-xl tracking-[0.12em] text-[#1C1C1C] font-light"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            L. SANCHEZ
          </span>
          <span className="font-sans text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase font-medium">
            Law Office
          </span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-sm text-[#5C5C5C] hover:text-[#1C1C1C] tracking-wide transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <CtaButton href={`mailto:${CONTACTS.email}`} variant="primary">
            Schedule Consultation
          </CtaButton>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 text-[#1C1C1C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            // X icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8D5A3] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-sm text-[#5C5C5C] hover:text-[#1C1C1C] tracking-wide py-1"
            >
              {label}
            </a>
          ))}
          <CtaButton href={`mailto:${CONTACTS.email}`} className="mt-2 text-center">
            Schedule Consultation
          </CtaButton>
        </div>
      )}
    </header>
  );
};

export default Navbar;
