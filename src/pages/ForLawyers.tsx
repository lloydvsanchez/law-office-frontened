// src/pages/ForLawyers.tsx
// ─────────────────────────────────────────────────────────────────────────────
// "For Lawyers" page for L. Sanchez Law Office.
//
// Section order:
//   Navbar → ForLawyersHero → LawyerServicesSection →
//   ProfessionalStandardsSection → CtaBanner → Footer
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

// Layout (shared)
import CtaBanner from "../components/home/CtaBanner";

// Page-specific sections
import ForLawyersHero             from "../components/forlawyers/ForLawyersHero";
import LawyerServicesSection      from "../components/forlawyers/LawyerServicesSection";
import ProfessionalStandardsSection from "../components/forlawyers/ProfessionalStandardsSection";

const ForLawyers: React.FC = () => (
  <>
    <main>
      <ForLawyersHero />
      <LawyerServicesSection />
      <ProfessionalStandardsSection />
      <CtaBanner />
    </main>
  </>
);

export { ForLawyers };
