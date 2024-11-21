import { SkillsAndTechStackSecI } from "@/interfaces/SkillsAndTechStack.interface";
import SkillsAndTechStackCard from "./SkillsAndTechStackCard";

const SkillsAndTechStackSection = ({ heading, elements }: SkillsAndTechStackSecI) => {
  return (
    <div className="mt-14">
      <div className="mb-5">
        <p className="cursor-text text-xl font-semibold pb-2 mb-4 w-full text-left border-b-2 border-green-700">
          {heading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-6">
          {elements.map((element, index) => (
            <div key={index} className="flex border-b py-2 border-b-gray-700 justify-between items-center">
              <div className="mt-2 flex items-center">
                <i className={`devicon-${element.icon} text-lg mr-2`}></i>
                {element.name}
              </div>
              <SkillsAndTechStackCard value={element.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTechStackSection;
