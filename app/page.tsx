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
    <div className="flex py-3 justify-end">
    <Button title={"Download Resume"} type={"button"} width={"w-42"} handleClick={() => {}} />
    </div>
    <Hero />
    <SkillsAndTechStack />
    <Experience />
    <Projects />
    {/* <Reviews /> */}
    <ContactUs />
  </div>  
  );
}
