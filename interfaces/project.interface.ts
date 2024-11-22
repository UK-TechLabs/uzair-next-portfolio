import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Project {
    id: number;
    name: string;
    image: StaticImageData;
    url: string;
}

export interface RevealOnScrollProps {
    children: ReactNode;
}

export interface ProjectCardProps {
    image: StaticImageData;
    name: string;
    link: string;
}