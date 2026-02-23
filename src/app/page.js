"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PromiseSection from "@/components/PromiseSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CountdownSection from "@/components/CountdownSection";

export default function Home() {
  const [locale, setLocale] = useState("en"); // default EN

  return (
    <>
      <Navbar locale={locale} setLocale={setLocale} />
      <HeroSection locale={locale} />
      <ProblemSection locale={locale} />
      <PromiseSection locale={locale} />
      <CountdownSection locale={locale} />
      <FinalCTA locale={locale} />
      <Footer locale={locale} />
    </>
  );
}