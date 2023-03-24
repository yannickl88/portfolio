import React, { useEffect, useRef, useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export function LandingPage() {
  const refHero = useRef<HTMLElement>();
  const refAbout = useRef<HTMLElement>();
  const refPortfolio = useRef<HTMLElement>();
  const refContact = useRef<HTMLElement>();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Navigation
        refHero={refHero}
        refAbout={refAbout}
        refPortfolio={refPortfolio}
        refContact={refContact}
        onChange={(p) => setDarkMode(p === "portfolio")}
      />
      <section ref={refHero}>
        <HeroSection refPortfolio={refPortfolio} refContact={refContact} />
      </section>
      <div className="separator" />
      <section ref={refAbout}>
        <AboutSection />
      </section>
      <div className="separator" />
      <section ref={refPortfolio}>
        <PortfolioSection />
      </section>
      <div className="separator" />
      <section ref={refContact}>
        <ContactSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
