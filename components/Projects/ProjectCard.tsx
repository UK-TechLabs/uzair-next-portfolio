import { ProjectCardProps } from "@/interfaces/project.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ image, name, link }: ProjectCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden group">
      <Link href={link || "#"} target="_blank">
        <div className="overflow-hidden">
          <Image
            layout="responsive"
            src={image}
            width={500}
            height={500}
            alt={name}
            className="w-full object-cover transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-1 bg-primary">
        <Link
          target="_blank"
          href={link || "#"}
          className="text-base hover:underline font-semibold"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
