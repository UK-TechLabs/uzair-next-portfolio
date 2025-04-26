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
            I'm Muhammad Uzair;
          </p>
          <TypingEffect />
          <p className="mt-4 text-justify">
            Seasoned Full Stack Developer with 4+ years of experience building
            and deploying 10+ dynamic web applications, specializing in
            end-to-end development, scalable architecture, and cloud solutions.
            Proficient in modern frontend and backend technologies, I excel at
            optimizing performance, security, and user experience while solving
            complex technical challenges. Passionate about continuous learning,
            I am currently expanding my expertise in Laravel, PHP, DevOps
            (CI/CD, Kubernetes, Jenkins), and cloud-native technologies to
            enhance automation and system resilience. Known for meticulous
            problem-solving and a results-driven approach, I thrive in
            delivering high-impact, full-stack solutions.
          </p>
        </div>
        <div className="flex flex-col justify-start md:justify-end items-start md:items-end gap-4 py-5">
          <HeroCard heading="5+" description="Years of Experience" />
          <HeroCard heading="10+" description="Projects Completed" />
          <HeroCard heading="5+" description="Satisfied Clients" />
        </div>
      </div>
    </>
  );
};
