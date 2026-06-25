// src/components/home/CtaBanner.tsx
// Final CTA section before the footer.
// Dark background with decorative gold corner accents.

import React from "react";
import GoldRule from "../ui/GoldRule";
import SectionEyebrow from "../ui/SectionEyebrow";
import { Link } from "react-router-dom";
import CONTACTS from "../../constants/contacts"

const CtaBanner: React.FC = () => (
  <section id="contact" className="relative bg-[#1A1A1A] py-16 md:py-24 overflow-hidden">

    {/* Decorative corner accents — gold bracket motif */}
    <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-[#C9A84C] opacity-40 pointer-events-none" />
    <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-[#C9A84C] opacity-40 pointer-events-none" />

    <div className="max-w-3xl mx-auto px-6 text-center">

      <SectionEyebrow>Take the First Step</SectionEyebrow>

      <h2
        className="text-3xl md:text-4xl text-white font-light leading-snug mb-2"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Let's Discuss Your Concern
      </h2>

      <GoldRule centered />

      <p className="font-sans text-base text-[#A8A8A8] leading-relaxed mb-10 max-w-xl mx-auto">
        If you need legal assistance, the best first step is a proper consultation.
        We are ready to listen, evaluate your situation, and guide you on your
        available options.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${CONTACTS.email}`}
          className="inline-block font-sans text-sm font-medium tracking-wide uppercase
            px-7 py-3 bg-[#C9A84C] text-white hover:bg-[#A8872E] transition-colors duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
        >
          Schedule a Consultation
        </a>
        <Link
          to="/contact#contact"
          className="inline-block font-sans text-sm font-medium tracking-wide uppercase
            px-7 py-3 border border-[#C9A84C] text-[#C9A84C]
            hover:bg-[#C9A84C] hover:text-white transition-colors duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
        >
          Contact Us
        </Link>
      </div>

    </div>
  </section>
);

export default CtaBanner;
