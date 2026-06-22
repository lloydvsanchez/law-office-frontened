// src/pages/LegalGuides.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Legal Guides page for L. Sanchez Law Office.
//
// Section order:
//   Navbar → LegalGuidesHero → ForClientsSection → ForLawyersGuidesSection
//   → ComingUpdatesSection → CtaBanner → Footer
//
// GuideCard.tsx is the shared card component used by both audience sections.
// When articles are published via the Rails API, pass href into each GuideCard
// entry in ForClientsSection and ForLawyersGuidesSection data arrays.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

// Layout (shared)
import CtaBanner from "../components/home/CtaBanner";

// Page-specific sections
import LegalGuidesHero        from "../components/legalguides/LegalGuidesHero";
import ForClientsSection       from "../components/legalguides/ForClientsSection";
import ForLawyersGuidesSection from "../components/legalguides/ForLawyersGuidesSection";
import ComingUpdatesSection    from "../components/legalguides/ComingUpdatesSection";

const LegalGuides: React.FC = () => (
  <>
    <main>
      <LegalGuidesHero />
      <ForClientsSection />
      <ForLawyersGuidesSection />
      <ComingUpdatesSection />
      <CtaBanner />
    </main>
  </>
);

export { LegalGuides };
