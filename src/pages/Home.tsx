// src/pages/Home.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Homepage for L. Sanchez Law Office.
//
// This file is intentionally thin — it only assembles sections in order.
// All markup, data, and logic live in their respective component files.
//
// Section order:
//   Navbar → Hero → Focus → Services → Why → Lawyers → Blog → CtaBanner → Footer
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

// Global custom styles (fonts, tokens, grain texture, gold frame)
import "../styles/home.css";

// Page sections
import HeroSection     from "../components/home/HeroSection";
import FocusSection    from "../components/home/FocusSection";
import ServicesSection from "../components/home/ServicesSection";
import WhySection      from "../components/home/WhySection";
import LawyersSection  from "../components/home/LawyersSection";
import BlogSection     from "../components/home/BlogSection";
import CtaBanner       from "../components/home/CtaBanner";

const Home: React.FC = () => (
  <>
      <HeroSection />
      <FocusSection />
      <ServicesSection />
      <WhySection />
      <LawyersSection />
      <BlogSection />
      <CtaBanner />
  </>
);

export {Home};