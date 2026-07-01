import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechSkills from "@/components/TechSkills";
import BASkills from "@/components/BASkills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import AgileLifecycle from "@/components/AgileLifecycle";
import Achievements from "@/components/Achievements";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-white overflow-hidden" data-testid="home-root">
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechSkills />
        <BASkills />
        <Services />
        <Projects />
        <CaseStudies />
        <AgileLifecycle />
        <Achievements />
        <Timeline />
        <Certifications />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
