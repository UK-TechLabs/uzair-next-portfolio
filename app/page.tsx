import Button from "@/components/common/Button";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import { Hero } from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Reviews from "@/components/Reviews/Reviews";
import SkillsAndTechStack from "@/components/TechAndStack/SkillsAndTechStack";

export default function Home() {
  return (
    <div>
      <Hero />
      <SkillsAndTechStack />
      <Experience />
      <Projects />
      <Reviews />
      <ContactUs />
    </div>
  );
}
