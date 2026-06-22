// src/pages/Contact.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Contact page for L. Sanchez Law Office.
//
// Section order:
//   Navbar → ContactHero → ContactChannelsSection → ConsultationLocationSection
//   → ResponseProcessSection → ContactFormSection → Footer
//
// No CtaBanner at the bottom — this page IS the CTA. Ending with the form
// and then Footer is intentional; no duplicate push needed.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

// Contact-specific sections
import ContactHero                from "../components/contact/ContactHero";
import ContactChannelsSection     from "../components/contact/ContactChannelsSection";
import ConsultationLocationSection from "../components/contact/ConsultationLocationSection";
import ResponseProcessSection     from "../components/contact/ResponseProcessSection";
import ContactFormSection         from "../components/contact/ContactFormSection";

const Contact: React.FC = () => (
  <>
    <main>
      <ContactHero />
      <ContactChannelsSection />
      <ConsultationLocationSection />
      <ResponseProcessSection />
      <ContactFormSection />
    </main>
  </>
);

export { Contact };
