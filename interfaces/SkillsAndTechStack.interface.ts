interface SkillsAndStackI {
    name: string; 
    value: number;
    icon: string;
}

export interface SkillsAndTechStackSecI {
    heading: string;
    elements: SkillsAndStackI[]
}