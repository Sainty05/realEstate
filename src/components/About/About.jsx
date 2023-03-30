import React from "react";
import AboutSection from "./AboutSection";
import IntroAbout from "./IntroAbout";
import TeamSection from "./TeamSection";

export default function About() {
  return (
    <>
      <main id="main">
        <IntroAbout />
        <AboutSection />
        <TeamSection />
      </main>
    </>
  );
}
