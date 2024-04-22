import { Footer } from "@/components/footer";
import { HeroSection } from "./components/1-hero";
import { ProjectsSection } from "./components/2-projects";
import { AboutSection } from "./components/3-about";
import { TestimonialSection } from "./components/4-testimonial";
import { Header } from "./components/header";

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <ProjectsSection />
    <AboutSection />
    <TestimonialSection />
    <Footer />
  </div>
);

export default Home;
