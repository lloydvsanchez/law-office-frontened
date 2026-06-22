// src/components/contact/ContactChannelsSection.tsx
// Contact channels + quick inquiry tips side by side.
// TODO: Replace href="#" values with real links (Messenger, Viber, Instagram, Email).

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";

// ── Channel data ──────────────────────────────────────────────────────────────
interface Channel {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

// Simple inline SVG icons — no external dependency
const IconMessenger = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.2V22l3.37-1.85c.9.25 1.854.386 2.942.386 5.523 0 10-4.144 10-9.243C22 6.145 17.523 2 12 2zm1.008 12.44l-2.55-2.713-4.976 2.713 5.474-5.81 2.613 2.713 4.913-2.713-5.474 5.81z" />
  </svg>
);

const IconViber = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.4 0C6.37 0 2.04 3.3 2.04 7.37c0 2.4 1.3 4.55 3.35 5.97v2.9l2.72-1.5c.73.2 1.5.31 2.3.31 5.02 0 9.1-3.3 9.1-7.37C19.5 3.3 15.43 0 11.4 0zm.9 9.93l-2.3-2.45-4.5 2.45 4.95-5.25 2.36 2.45 4.44-2.45-4.95 5.25zm6.58 5.33c-.15 1.08-.85 2.03-1.93 2.6-.56.3-1.17.46-1.8.46-.5 0-1-.1-1.47-.28l-3.6 1.98v-2.62c-2.37-1.1-3.9-3.2-3.9-5.55 0-.22.01-.43.04-.65.42.13.87.2 1.33.2 2.75 0 5.07-1.7 5.77-4.06a5.4 5.4 0 013.56 5.92z" />
  </svg>
);

const IconInstagram = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconEmail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const CHANNELS: Channel[] = [
  {
    label: "Facebook Messenger",
    description: "Quick messaging",
    href: "#", // TODO: replace with https://m.me/your-page
    icon: <IconMessenger />,
  },
  {
    label: "Viber",
    description: "Direct communication",
    href: "#", // TODO: replace with viber://chat?number=+63XXXXXXXXXX
    icon: <IconViber />,
  },
  {
    label: "Instagram",
    description: "General inquiries",
    href: "#", // TODO: replace with https://instagram.com/your-handle
    icon: <IconInstagram />,
  },
  {
    label: "Email",
    description: "Formal concerns and documents",
    href: "mailto:contact@lsanchezlaw.com", // TODO: replace with real email
    icon: <IconEmail />,
  },
];

// ── Quick inquiry tips ────────────────────────────────────────────────────────
const INQUIRY_TIPS = [
  "Your concern",
  "Relevant dates or deadlines",
  "Location (if applicable)",
  "Preferred contact method",
];

// ── Section ───────────────────────────────────────────────────────────────────
const ContactChannelsSection: React.FC = () => (
  <section className="bg-[#F5F0E8] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

      {/* Left: Quick Inquiry tips */}
      <div>
        <SectionEyebrow>Before You Reach Out</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Quick Inquiry
        </h2>
        <GoldRule />
        <p className="font-sans text-base text-[#5C5C5C] leading-relaxed mb-6">
          Send a brief message including the following so the office can
          respond promptly and accurately:
        </p>
        <ul className="flex flex-col gap-3">
          {INQUIRY_TIPS.map((tip) => (
            <li key={tip} className="flex items-start gap-3">
              <svg
                className="flex-shrink-0 w-4 h-4 text-[#C9A84C] mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-sans text-sm text-[#5C5C5C] leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Contact channels */}
      <div>
        <SectionEyebrow>Contact Channels</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Reach Us
        </h2>
        <GoldRule />

        <div className="flex flex-col gap-3">
          {CHANNELS.map(({ label, description, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 bg-white border border-[#E8D5A3]
                hover:border-[#C9A84C] transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#F5F0E8] border border-[#E8D5A3]
                flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]
                group-hover:text-white transition-colors duration-200">
                {icon}
              </div>
              <div>
                <p
                  className="text-base text-[#1C1C1C] font-semibold leading-tight group-hover:text-[#C9A84C] transition-colors duration-150"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {label}
                </p>
                <p className="font-sans text-xs text-[#5C5C5C] mt-0.5">{description}</p>
              </div>
              {/* Arrow indicator */}
              <svg
                className="ml-auto w-4 h-4 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default ContactChannelsSection;
