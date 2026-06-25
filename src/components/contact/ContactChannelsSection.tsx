// src/components/contact/ContactChannelsSection.tsx
// Contact channels + quick inquiry tips side by side.
// TODO: Replace href="#" values with real links (Messenger, Viber, Instagram, Email).

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import CONTACTS from "../../constants/contacts";

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

const IconWhatsup = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-3.483l.406.241a9.942 9.942 0 0 0 5.011 1.366c5.513 0 10.003-4.48 10.006-9.987.001-2.667-1.036-5.176-2.92-7.062C17.245 3.192 14.74 2.155 12.01 2.155c-5.52 0-10.01 4.483-10.014 9.99a9.917 9.917 0 0 0 1.516 5.261l.264.42-.994 3.63 3.71-.973z" />
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
    href: CONTACTS.messenger,
    icon: <IconMessenger />,
  },
  {
    label: "Viber",
    description: "Direct communication",
    href: CONTACTS.viber,
    icon: <IconViber />,
  },
  {
    label: "Whatsup",
    description: "General inquiries",
    href: CONTACTS.whatsup,
    icon: <IconWhatsup />,
  },
  /*
  {
    label: "Instagram",
    description: "General inquiries",
    href: "#", // TODO: replace with https://instagram.com/your-handle
    icon: <IconInstagram />,
  },
  */
  {
    label: "Email",
    description: "Formal concerns and documents",
    href: `mailto:${CONTACTS.email}`,
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
