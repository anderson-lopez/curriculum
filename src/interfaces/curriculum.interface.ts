import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface SkillLevelColors {
  light: string;
  dark: string;
  blue: string;
}

export interface SkillColors {
  green: SkillLevelColors;
  yellow: SkillLevelColors;
}

export interface Skill {
  name: string;
  level: "green" | "yellow";
}

export interface Specialization {
  name: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  skills: Skill[];
}