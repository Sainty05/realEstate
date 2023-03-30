import React from "react";
import NewsSection from "./NewsSection";
import PropertySection from "./PropertySection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";
import AgentSection from "./AgentSection";
import Intro from "./Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <main id="main">
        <ServiceSection />
        <PropertySection />
        <AgentSection />
        <NewsSection />
        <TestimonialSection />
      </main>
    </>
  );
}
