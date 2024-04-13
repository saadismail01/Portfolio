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

const iconsPerPage = 3;
const totalIcons = 9; // Assuming there are 9 icons in total

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

const SkillCard = ({ icon, title, description }) => (
  <div className="max-w-xs h-64 rounded overflow-hidden shadow-2xl m-6 text-white flex flex-col">
    <div className="flex-grow flex flex-col justify-center items-center mx-6">
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % totalIcons);
    }, 3000); // Change the delay as needed (milliseconds)

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setStartIndex(
      (prevIndex) => (prevIndex + (isMobile ? 1 : iconsPerPage)) % totalIcons
    );
  };

  const handleBack = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - (isMobile ? 1 : iconsPerPage) + totalIcons) % totalIcons
    );
  };

  return (
    <div>
      <div data-aos="fade-up" className="flex flex-wrap justify-center -mt-64">
        {[...Array(isMobile ? 1 : iconsPerPage)].map((_, index) => {
          const iconIndex = (startIndex + index) % totalIcons;
          const icon = [
            html,
            css,
            tailwind,
            js,
            ts,
            react,
            angular,
            nodejs,
            github,
            git,
          ][iconIndex];
          const { title, description } = skillData[iconIndex];
          return (
            <SkillCard
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          );
        })}
      </div>
      <div className="flex justify-center space-x-24 mt-4">
        <button
          data-aos="fade-right"
          onClick={handleBack}
          className="mr-2 px-4 py-2 text-white border border-teal-300 rounded-md"
        >
          Back
        </button>
        <button
          data-aos="fade-left"
          onClick={handleNext}
          className="px-4 py-2 text-white border border-teal-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Skillsss;
