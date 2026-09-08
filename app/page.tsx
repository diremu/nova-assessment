import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/ui/BackToTop";
import Reveal from "./components/ui/Reveal";
import Hero from "./components/sections/Hero";
import TrustedBy from "./components/sections/TrustedBy";
import Features from "./components/sections/Features";
import Product from "./components/sections/Product";
import HowItWorks from "./components/sections/HowItWorks";
import Stats from "./components/sections/Stats";
import Solutions from "./components/sections/Solutions";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import FinalCta from "./components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Product />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Stats />
        <Reveal>
          <Solutions />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <FinalCta />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
