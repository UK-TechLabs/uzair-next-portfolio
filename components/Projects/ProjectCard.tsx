import { ProjectCardProps } from "@/interfaces/project.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ image, name, link }: ProjectCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        layout="responsive"
        src={image}
        width={500}
        height={500}
        alt={name}
        className="w-full object-cover"
      />
      <div className="p-1 bg-primary">
        <Link
          target="_blank"
          href={link ? link : ""}
          className="text-base hover:underline font-semibold"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
