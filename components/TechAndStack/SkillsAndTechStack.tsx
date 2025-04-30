import React from "react";

import SkillsAndTechStackSection from "./SkillsAndTechStackSection";
import {
  clientSideSkills,
  devOpsSkills,
  serverSideSkills,
} from "@/utils/staticData";

const SkillsAndTechStack = () => {
  return (
    <div id="stack" className="mt-8 md:mt-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
        Skills and Tech Stack
      </h2>
      <SkillsAndTechStackSection
        heading="Client Side"
        elements={clientSideSkills}
      />
      <SkillsAndTechStackSection
        heading="Server Side"
        elements={serverSideSkills}
      />
      <SkillsAndTechStackSection heading="DevOps" elements={devOpsSkills} />
    </div>
  );
};

export default SkillsAndTechStack;
