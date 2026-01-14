import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: true });
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), { ssr: true });
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"), { ssr: true });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
