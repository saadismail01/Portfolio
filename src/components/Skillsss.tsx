import React, { useState, useEffect } from "react";
import {
  angular,
  css,
  git,
  github,
  html,
  js,
  nodejs,
  react,
  tailwind,
  ts,
} from "../assets";

const skillData = [
  {
    title: "HTML",
    description: "HyperText Markup Language, with 3+ years of experience",
  },
  {
    title: "CSS",
    description: "Cascading Style Sheets, with 3+ years of experience",
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework, with 3+ years of experience",
  },
  {
    title: "JavaScript",
    description:
      "A programming language for the websites, with 3+ years of experience",
  },
  {
    title: "TypeScript",
    description: "A statically typed superset of JavaScript",
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces",
  },
  {
    title: "Angular",
    description: "A TypeScript-based open-source web application framework",
  },
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    title: "GitHub",
    description: "A platform for hosting and collaborating on Git repositories",
  },
];

const iconAssets = [
  html,
  css,
  tailwind,
  js,
  ts,
  react,
  angular,
  nodejs,
  github,
];

const SkillCard = ({ icon, title, description }) => (
  <div className="w-full sm:w-80 h-64 rounded overflow-hidden shadow-2xl m-4 text-white flex flex-col bg-gray-900 transition duration-500 ease-in-out">
    <div className="flex-grow flex flex-col justify-center items-center px-4">
      <img className="w-16 h-16 mb-4" src={icon} alt={`${title} icon`} />
      <div className="text-center">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-teal-400 text-base">{description}</p>
      </div>
    </div>
  </div>
);

const Skillsss = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [iconsPerPage, setIconsPerPage] = useState(3);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) setIconsPerPage(1);
      else if (width <= 1024) setIconsPerPage(2);
      else setIconsPerPage(3);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalIcons = skillData.length;

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prev) => (prev + iconsPerPage) % totalIcons);
  };

  const handleBack = () => {
    setDirection("left");
    setStartIndex((prev) => (prev - iconsPerPage + totalIcons) % totalIcons);
  };

  const visibleIcons = [...Array(iconsPerPage)].map((_, index) => {
    const iconIndex = (startIndex + index) % totalIcons;
    return {
      ...skillData[iconIndex],
      icon: iconAssets[iconIndex],
      key: `${startIndex}-${index}`,
    };
  });

  return (
    <div className="top-0 left-0 w-full z-[9999] bg-opacity-80 backdrop-blur-md py-10 px-4">
      <div
        key={startIndex}
        className={`flex flex-wrap justify-center transition-transform duration-700 ease-in-out ${
          direction === "right" ? "animate-slide-right" : "animate-slide-left"
        }`}
      >
        {visibleIcons.map(({ key, icon, title, description }) => (
          <SkillCard
            key={key}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>

      <div className="flex justify-center space-x-8 mt-6">
        <button
          onClick={handleBack}
          className="px-4 py-2 text-white border border-teal-300 rounded-md hover:bg-teal-600 transition-all duration-300"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white border border-teal-300 rounded-md hover:bg-teal-600 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Skillsss;
