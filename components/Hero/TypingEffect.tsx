"use client";
import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const strings = [
    "Full Stack Developer!",
    "Next.js Developer!",
    "MERN Stack Developer!",
    "MEAN Stack Developer!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[currentIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => currentString.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
        return;
      }

      setSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, strings, speed]);

  return (
    <div className="text-2xl md:text-3xl font-bold mb-2">
      {currentText}
      <span className="border-r-2 border-gray-800 animate-blink ml-1"></span>
    </div>
  );
};

export default TypingEffect;
