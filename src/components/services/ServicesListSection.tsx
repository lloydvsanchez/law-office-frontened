// src/components/services/ServicesListSection.tsx
// Renders all 7 practice area sections in sequence using ServiceDetail.
// Service data is co-located here — move to src/data/services.ts if it grows
// or needs to be shared with the homepage ServicesSection or an API.

import React from "react";
import ServiceDetail from "./ServiceDetail";
import type { ServiceDetailData } from "./ServiceDetail";

// ── Service data ──────────────────────────────────────────────────────────────
// Alternating bg (cream/white) and reverse (layout flip) creates visual rhythm
// across 7 sections without any section feeling like a copy of the previous one.

const SERVICES: ServiceDetailData[] = [
  {
    id: "litigation",
    eyebrow: "Practice Area 01",
    title: "Litigation & Dispute Resolution",
    description:
      "Civil disputes, criminal cases, BP 22 cases, collection matters, and other contested legal issues. The focus is on evaluating all available options and pursuing the most practical resolution for the client.",
    points: [
      "Civil case filing, defense, and representation",
      "Criminal case assistance and defense",
      "BP 22 (Bouncing Checks Law) cases",
      "Collection and enforcement of judgments",
      "Assessment of litigation vs. settlement options",
    ],
    bg: "cream",
    reverse: false,
    imagePlaceholderLabel: "Litigation — Courtroom or Legal Filing Photo",
    imagePlaceholderNote: "Courthouse interior, filing counter, or lawyer at hearing — 1200×900px",
  },
  {
    id: "property",
    eyebrow: "Practice Area 02",
    title: "Property & Land Matters",
    description:
      "Property disputes, land concerns, title issues, transfers, and real estate documentation. The office brings both legal and licensed real estate expertise to property-related concerns.",
    points: [
      "Property and land disputes",
      "Title verification and land title concerns",
      "Transfer of ownership and registration",
      "Extrajudicial settlement involving real property",
      "Real estate documentation and due diligence",
    ],
    bg: "white",
    reverse: true,
    imagePlaceholderLabel: "Property — Land Title or Property Photo",
    imagePlaceholderNote: "Property exterior, land survey, or title documents — 1200×900px",
  },
  {
    id: "business",
    eyebrow: "Practice Area 03",
    title: "Business & Commercial Matters",
    description:
      "Contracts, business documentation, collections, negotiations, and commercial disputes. Legal support for businesses at every stage — from documentation to dispute resolution.",
    points: [
      "Contract drafting, review, and negotiation",
      "Commercial dispute resolution",
      "Collection matters and demand enforcement",
      "Business documentation and compliance",
      "Legal advisory for business transactions",
    ],
    bg: "cream",
    reverse: false,
    imagePlaceholderLabel: "Business — Contract Signing or Office Meeting Photo",
    imagePlaceholderNote: "Contract review, business meeting, or handshake — 1200×900px",
  },
  {
    id: "documentation",
    eyebrow: "Practice Area 04",
    title: "Legal Documentation",
    description:
      "Preparation and review of legal instruments including contracts, affidavits, demand letters, powers of attorney, and other documents that carry legal weight or require careful drafting.",
    points: [
      "Contract preparation and review",
      "Affidavits and sworn statements",
      "Demand letters",
      "Special and general powers of attorney",
      "Deeds, agreements, and other legal instruments",
    ],
    bg: "white",
    reverse: true,
    imagePlaceholderLabel: "Documentation — Legal Papers or Signing Photo",
    imagePlaceholderNote: "Documents on desk, pen signing, or organized legal files — 1200×900px",
  },
  {
    id: "adr",
    eyebrow: "Practice Area 05",
    title: "Alternative Dispute Resolution",
    description:
      "Negotiation and settlement options aimed at resolving disputes efficiently when appropriate. Not every dispute needs to go to court — the office helps clients explore practical alternatives.",
    points: [
      "Negotiated settlement assistance",
      "Mediation support and preparation",
      "Settlement agreement drafting",
      "Evaluation of ADR suitability for the dispute",
      "Cost and time comparison vs. litigation",
    ],
    bg: "cream",
    reverse: false,
    imagePlaceholderLabel: "ADR — Mediation or Discussion Photo",
    imagePlaceholderNote: "Roundtable discussion, mediation session, or handshake — 1200×900px",
  },
  {
    id: "notarial",
    eyebrow: "Practice Area 06",
    title: "Notarial Services",
    description:
      "Notarial services for documents requiring notarization under Philippine law. Documents requiring notarization are handled with attention to the applicable requirements under the 2004 Rules on Notarial Practice.",
    points: [
      "Acknowledgment of deeds and contracts",
      "Jurats for affidavits and sworn statements",
      "Notarization of powers of attorney",
      "Copy certification",
      "Other notarial acts under Philippine rules",
    ],
    bg: "white",
    reverse: true,
    imagePlaceholderLabel: "Notarial — Notary Seal or Document Signing Photo",
    imagePlaceholderNote: "Notary seal, document stamping, or signing — 1200×900px",
  },
  {
    id: "ofw-foreign",
    eyebrow: "Practice Area 07",
    title: "Overseas Filipino & Foreign Client Assistance",
    description:
      "Legal support for clients outside the Philippines requiring assistance with Philippine legal matters. The office can coordinate remotely and assist with documentation, representation, and legal advisory for clients abroad.",
    points: [
      "Remote legal consultation and advisory",
      "Special power of attorney for overseas clients",
      "Property and estate matters for OFWs",
      "Documentation and legal support from abroad",
      "Coordination with local parties on behalf of foreign clients",
    ],
    bg: "cream",
    reverse: false,
    imagePlaceholderLabel: "OFW & Foreign — Remote Consultation or Map Photo",
    imagePlaceholderNote: "Video call setup, world map, or Philippine flag with documents — 1200×900px",
  },
];

// ── Section ───────────────────────────────────────────────────────────────────
const ServicesListSection: React.FC = () => (
  <>
    {SERVICES.map((service) => (
      <ServiceDetail key={service.id} {...service} />
    ))}
  </>
);

export default ServicesListSection;
