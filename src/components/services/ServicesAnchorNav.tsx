// src/components/services/ServicesAnchorNav.tsx
// Sticky horizontal quick-nav bar — links jump to each service section by ID.
// Sits just below the main Navbar (sticky, top-16 to clear the 64px Navbar).
// Horizontally scrollable on mobile so all links are reachable.

import React from "react";

export const SERVICE_ANCHORS = [
  { label: "Litigation",      href: "#litigation"    },
  { label: "Property",        href: "#property"      },
  { label: "Business",        href: "#business"      },
  { label: "Documentation",   href: "#documentation" },
  { label: "ADR",             href: "#adr"           },
  { label: "Notarial",        href: "#notarial"      },
  { label: "OFW & Foreign",   href: "#ofw-foreign"   },
  { label: "Consultation",    href: "#consultation"  },
];

const ServicesAnchorNav: React.FC = () => (
  <nav
    aria-label="Services quick navigation"
    className="sticky top-16 z-40 bg-white border-b border-[#E8D5A3] shadow-sm"
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex gap-0 overflow-x-auto scrollbar-hide">
        {SERVICE_ANCHORS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="
              flex-shrink-0 font-sans text-xs tracking-wide text-[#5C5C5C]
              hover:text-[#C9A84C] hover:border-b-2 hover:border-[#C9A84C]
              px-4 py-4 transition-colors duration-150 whitespace-nowrap
            "
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default ServicesAnchorNav;
