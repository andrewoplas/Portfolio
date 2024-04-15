import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";

export default function Home() {
  return (
    <div className="h-[9000px]">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
