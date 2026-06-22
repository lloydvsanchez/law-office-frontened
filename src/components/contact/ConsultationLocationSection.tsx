// src/components/contact/ConsultationLocationSection.tsx
// Consultation options + office location with Google Maps embed placeholder.
// Split layout: consultation info left, map right.
//
// SWAP MAP: replace the MapPlaceholder div with:
//   <iframe
//     src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
//     width="100%"
//     height="100%"
//     style={{ border: 0 }}
//     allowFullScreen
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//     title="L. Sanchez Law Office location"
//   />
//
// To get your embed URL:
//   1. Go to Google Maps and find your office location
//   2. Click Share → Embed a map → Copy HTML
//   3. Paste the src URL from that iframe here

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

const CONSULTATION_MODES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone Consultation",
    note: "Scheduled call at an agreed time",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: "Online Meeting",
    note: "Video call via agreed platform",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "In-Person Appointment",
    note: "At the office in Cebu City",
  },
];

// ── Map placeholder ───────────────────────────────────────────────────────────
const MapPlaceholder: React.FC = () => (
  <div
    className="w-full aspect-[4/3] flex flex-col items-center justify-center gap-3
      bg-[#E8D5A3] border-2 border-dashed border-[#C9A84C]"
    role="img"
    aria-label="Google Maps embed placeholder"
  >
    <svg
      className="w-10 h-10 text-[#A8872E] opacity-50"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
    <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#A8872E] text-center px-4">
      Google Maps Embed
    </p>
    <p className="font-sans text-[10px] text-[#A8872E] opacity-60 text-center px-6">
      Replace with Google Maps iframe — see comment in ConsultationLocationSection.tsx
    </p>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const ConsultationLocationSection: React.FC = () => (
  <section className="bg-[#EDEBE3] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

      {/* Left: Consultation modes */}
      <div>
        <SectionEyebrow>Scheduling</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Consultation
        </h2>
        <GoldRule />
        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-8">
          Consultations may be arranged via phone, online meeting, or in-person
          appointment in Cebu City.
        </p>

        <div className="flex flex-col gap-4">
          {CONSULTATION_MODES.map(({ icon, label, note }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-5 bg-white border border-[#E8D5A3]"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#F5F0E8] border border-[#E8D5A3]
                flex items-center justify-center text-[#C9A84C]">
                {icon}
              </div>
              <div>
                <p
                  className="text-base text-[#1C1C1C] font-semibold leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {label}
                </p>
                <p className="font-sans text-xs text-[#5C5C5C] mt-0.5">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Map + address */}
      <div>
        <SectionEyebrow>Office Location</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Cebu City
        </h2>
        <GoldRule />

        {/* SWAP: replace MapPlaceholder with Google Maps iframe — see file comment above */}
        <MapPlaceholder />

        <p className="font-sans text-sm text-[#5C5C5C] mt-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Cebu City, Philippines
        </p>
      </div>

    </div>
  </section>
);

export default ConsultationLocationSection;
