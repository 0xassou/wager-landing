import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { OptimisticResolution } from "@/components/OptimisticResolution";
import { WhyArc } from "@/components/WhyArc";
import { TechnicalLinks } from "@/components/TechnicalLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-arc-navy-dark">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <OptimisticResolution />
      <WhyArc />
      <TechnicalLinks />
      <Footer />
    </main>
  );
}
