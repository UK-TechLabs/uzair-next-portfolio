import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { HiBriefcase } from "react-icons/hi";
import { MdOutlineContacts, MdReviews } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex sticky bottom-0 justify-center items-center w-full min-h-16 bg-primary z-50">
      <div className="flex items-center flex-wrap justify-center gap-x-6 md:gap-x-10 w-full">
        <a
          href="#about"
          className="text-lg cursor-pointer h-16 flex items-center justify-center relative group"
        >
          <RiContactsFill />
          <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">
            About
          </span>
        </a>
        <a
          href="#stack"
          className="text-lg cursor-pointer h-16 flex items-center justify-center relative group"
        >
          <GrTechnology />
          <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">
            Tech Stack
          </span>
        </a>
        <a
          href="#experience"
          className="text-lg cursor-pointer h-16 flex items-center justify-center relative group"
        >
          <HiBriefcase />
          <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">
            Experience
          </span>
        </a>
        <a
          href="#projects"
          className="text-lg cursor-pointer h-16 flex items-center justify-center relative group"
        >
          <GoProjectSymlink />
          <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">
            Projects
          </span>
        </a>
        <a
          href="#reviews"
          className="text-lg cursor-pointer h-16 flex items-center justify-center relative group"
        >
          <MdReviews />
          <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">
            Reviews
          </span>
        </a>
        <a
          href="#contact"
          className="text-lg cursor-pointer h-16 flex items-center justify-center relative group"
        >
          <MdOutlineContacts />
          <span className="absolute bottom-full mb-2 w-max p-1 bg-gray-700 text-white text-xs rounded hidden group-hover:block">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
