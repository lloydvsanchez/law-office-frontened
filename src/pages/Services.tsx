// src/pages/Services.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Services page for L. Sanchez Law Office.
//
// Section order:
//   Navbar → ServicesHero → ServicesAnchorNav → ServicesListSection →
//   ConsultationSection → CtaBanner → Footer
//
// ServicesAnchorNav sticks just below the main Navbar (top-16).
// Each service section uses scroll-mt-32 to clear both sticky bars on anchor jump.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

// Layout (shared)
import CtaBanner from "../components/home/CtaBanner";

// Services-specific sections
import ServicesHero        from "../components/services/ServicesHero";
import ServicesAnchorNav   from "../components/services/ServicesAnchorNav";
import ServicesListSection from "../components/services/ServicesListSection";
import ConsultationSection from "../components/services/ConsultationSection";

const Services: React.FC = () => (
  <>
    <ServicesAnchorNav />

    <main>
      <ServicesHero />
      <ServicesListSection />
      <ConsultationSection />
      <CtaBanner />
    </main>
  </>
);

export { Services };
