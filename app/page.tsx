import Button from "@/components/common/Button";
import { Hero } from "@/components/Hero/Hero";
import SkillsAndTechStack from "@/components/TechAndStack/SkillsAndTechStack";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <div className="flex py-3 justify-end">
    <Button title={"Download Resume"} type={"button"} width={"w-42"} handleClick={() => {}} />
    </div>
    <Hero />
    <SkillsAndTechStack />
  </div>  
  );
}
