import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Set animated to true after a brief delay to trigger the animation
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const SkillBar = ({ skill, proficiency }) => {
    const [countedProficiency, setCountedProficiency] = useState(0);

    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
      let animationFrameId;
      let start = 0;
      const end = proficiency;

      if (animated) {
        const duration = 10000; // Animation duration in milliseconds
        const step = () => {
          const now = Math.min(Date.now() - start, duration);
          const progress = now / duration;
          setCountedProficiency(Math.floor(progress * end));
          if (now < duration) {
            animationFrameId = requestAnimationFrame(step);
          }
        };
        animationFrameId = requestAnimationFrame(step);
        start = Date.now();
      }

      return () => cancelAnimationFrame(animationFrameId);
    }, [animated, proficiency]);

    return (
      <div className="w-full md:w-[50%]" data-aos="zoom-in">
        <div className="flex justify-between mb- 1">
          <span className="text-base font-medium text-teal-700 dark:text-white">
            {skill}
          </span>
          <span className="text-sm font-medium text-teal-700 dark:text-white">
            {countedProficiency}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className={`bg-teal-600 h-2.5 rounded-full ${
              animated ? "transition-width duration-7000ms ease-in-out" : ""
            }`}
            style={{ width: `${animated ? countedProficiency : 0}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center w-full h-full py-36 px-24 mt-44"
    >
      <div className="sm:text-5xl pb-16 w-full h-[20%] flex items-start justify-center text-teal-300 fontText lg:text-7xl">
        My Skills
      </div>

      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <SkillBar skill="Html/Css" proficiency={95} />
        <SkillBar skill="Tailwind CSS" proficiency={89} />
        <SkillBar skill="JavaScript" proficiency={90} />
        <SkillBar skill="TypeScript" proficiency={88} />
        <SkillBar skill="React Js" proficiency={91} />
        <SkillBar skill="Git / Github" proficiency={80} />
      </div>
    </div>
  );
};

export default Skills;
