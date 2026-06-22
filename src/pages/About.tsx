// src/pages/About.tsx
// ─────────────────────────────────────────────────────────────────────────────
// About page for L. Sanchez Law Office.
//
// Section order:
//   Navbar → AboutHero → ApproachSection → AttorneySection →
//   WhoWeServeSection → ValuesSection → CtaBanner → Footer
//
// Shared components (Navbar, Footer, CtaBanner) are reused from Home.
// All custom CSS (fonts, grain, gold frame) is already loaded via home.css
// which should be imported globally in main.tsx or index.css instead.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

// NOTE: If home.css is not yet moved to a global import in main.tsx,
// uncomment the line below:
// import "../styles/home.css";

// Layout (shared)
import CtaBanner from "../components/home/CtaBanner";

// About-specific sections
import AboutHero        from "../components/about/AboutHero";
import ApproachSection  from "../components/about/ApproachSection";
import AttorneySection  from "../components/about/AttorneySection";
import WhoWeServeSection from "../components/about/WhoWeServeSection";
import ValuesSection    from "../components/about/ValuesSection";

const About: React.FC = () => (
  <>
    <main>
      <AboutHero />
      <ApproachSection />
      <AttorneySection />
      <WhoWeServeSection />
      <ValuesSection />
      <CtaBanner />
    </main>
  </>
);

export {About};
