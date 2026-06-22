// src/components/home/ServicesSection.tsx
// 2×3 grid of practice area cards.
// Data is co-located here; move to src/data/services.ts if it grows.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import {
  IconLitigation,
  IconProperty,
  IconBusiness,
  IconDocument,
  IconADR,
  IconNotarial,
} from "../icons/ServiceIcons";

// ── Service data ──────────────────────────────────────────────────────────────
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: <IconLitigation />,
    title: "Litigation & Dispute Resolution",
    description:
      "Assistance with civil disputes, criminal cases, BP 22 cases, collection matters, and other contested legal issues. The focus is on evaluating options and pursuing the most practical resolution.",
  },
  {
    icon: <IconProperty />,
    title: "Property & Land Matters",
    description:
      "Legal support for property disputes, land issues, title concerns, transfers, and related documentation.",
  },
  {
    icon: <IconBusiness />,
    title: "Business & Commercial Matters",
    description:
      "Legal guidance for contracts, business documentation, collections, and commercial disputes.",
  },
  {
    icon: <IconDocument />,
    title: "Legal Documentation",
    description:
      "Preparation and review of affidavits, contracts, agreements, demand letters, and powers of attorney.",
  },
  {
    icon: <IconADR />,
    title: "Alternative Dispute Resolution",
    description:
      "Exploring negotiated settlements and practical resolutions without unnecessary litigation when appropriate.",
  },
  {
    icon: <IconNotarial />,
    title: "Notarial Services",
    description:
      "Notarial services for documents requiring notarization under applicable legal requirements.",
  },
];

// ── Sub-component ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white border border-[#E8D5A3] p-6 hover:border-[#C9A84C] transition-colors duration-200 group">
    <div className="text-[#C9A84C] mb-4 w-7 h-7">{icon}</div>
    <h3
      className="text-xl text-[#1C1C1C] font-semibold mb-2 leading-snug group-hover:text-[#C9A84C] transition-colors duration-150"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {title}
    </h3>
    <p className="font-sans text-sm text-[#5C5C5C] leading-relaxed">{description}</p>
  </div>
);

// ── Section ───────────────────────────────────────────────────────────────────
const ServicesSection: React.FC = () => (
  <section id="services" className="bg-[#F5F0E8] py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-6">

      <div className="mb-12">
        <SectionEyebrow>Practice Areas</SectionEyebrow>
        <h2
          className="text-3xl md:text-4xl text-[#1C1C1C] font-light"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          How We Can Help
        </h2>
        <GoldRule />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;
