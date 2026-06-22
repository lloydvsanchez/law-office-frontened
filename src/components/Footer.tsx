// src/components/Footer.tsx
// Site-wide footer. Reuse this on every page — import from here, not re-declared.

import React from "react";

const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Legal Guides", href: "/legal-guides" },
  { label: "For Lawyers", href: "/for-lawyers"    },
  { label: "About",    href: "/about"    },
  { label: "Contact",  href: "/contact"  },
];

const Footer: React.FC = () => (
  <footer className="bg-[#111111] py-10 border-t border-[#2A2A2A]">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

      {/* Wordmark */}
      <div>
        <p
          className="text-base tracking-[0.12em] text-white font-light"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          L. SANCHEZ{" "}
          <span className="font-sans text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase">
            Law Office
          </span>
        </p>
        <p className="font-sans text-xs text-[#5C5C5C] mt-1">
          Cebu City, Philippines
        </p>
      </div>

      {/* Nav links */}
      <nav aria-label="Footer navigation">
        <div className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-xs text-[#5C5C5C] hover:text-[#C9A84C] tracking-wide transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Copyright */}
      <p className="font-sans text-xs text-[#3A3A3A]">
        © {new Date().getFullYear()} L. Sanchez Law Office
      </p>
    </div>
  </footer>
);

export default Footer;
