import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skillsss from "../components/Skillsss";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-36 px-24 mt-26">
      <div
        data-aos="fade-down"
        className="sm:text-5xl w-full h-full  flex items-start justify-center text-teal-300 fontText lg:text-7xl"
      >
        My Skills
      </div>

      <Skillsss />
    </div>
  );
};

export default Skills;
