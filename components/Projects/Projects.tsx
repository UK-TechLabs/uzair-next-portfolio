'use client';

import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

import { RevealOnScrollProps } from "@/interfaces/project.interface";
import { projectData } from "@/utils/staticData";

const RevealOnScroll = ({ children }: RevealOnScrollProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
    
        if (ref.current) {
            scrollObserver.observe(ref.current); 
        }
    
        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);
    

    const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"}`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

const Projects = () => {
    

    return (
        <div className="mx-auto text-center mt-8 md:mt-32">
            <h2 className="text-4xl mb-5 md:mb-10 font-bold text-center text-primary">Projects</h2>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
                {projectData.map((project: any) => (
                    <RevealOnScroll key={project.id}>
                        <ProjectCard name={project.name} link={project.url} image={project.image} />
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    );
};

export default Projects;
