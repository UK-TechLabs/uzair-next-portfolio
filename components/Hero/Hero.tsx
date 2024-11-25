"use client";
import React from "react";
import TypingEffect from "./TypingEffect";
import HeroCard from "./HeroCard";
import Button from "../common/Button";

export const Hero = () => {
  const handleResumeDownload = () => {
    const resumeUrl = "/uzair-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Uzair_Khan_Resume.pdf";
    link.click();
  };
  return (
    <>
      <div id="about" className="flex py-3 justify-end">
        <Button
          handleClick={handleResumeDownload}
          title={"Download Resume"}
          type={"button"}
          width={"w-42"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start md:space-x-8 py-5">
        <div>
          <p className="text-6xl font-bold mb-2">Hello,</p>
          <p className="text-5xl font-semibold mb-4 text-primary">
            I'm Uzair Khan;
          </p>
          <TypingEffect />
          <p className="mt-4 text-justify">
            I am a seasoned Full Stack Developer with over 3 years of hands-on
            experience in crafting dynamic and responsive web applications. I
            excel in building and integrating complex systems, designing
            scalable architectures, and deploying solutions on cloud platforms.
            Throughout my career, I have worked on multiple projects from
            conception to deployment, ensuring high performance, security, and
            user satisfaction. I have a proven track record of improving
            application performance and optimizing code to enhance efficiency. I
            am known for my strong problem-solving skills, meticulous attention
            to detail, and a passion for continuous learning.
          </p>
        </div>
        <div className="flex flex-col justify-start md:justify-end items-start md:items-end gap-4 py-5">
          <HeroCard heading="3+" description="Years of Experience" />
          <HeroCard heading="8+" description="Projects Completed" />
          <HeroCard heading="5+" description="Satisfied Clients" />
        </div>
      </div>
    </>
  );
};
