import React, { useEffect } from "react";
import { bank, co, kime } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../components/Project";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="projects"
      className="flex flex-col w-full h-full items-center justify-center px-24 mt-44 lg:mt-24"
    >
      <div className="sm:text-5xl pb-16 w-full h-[20%] flex items-start justify-center text-teal-300 fontText lg:text-7xl">
        Some Of My Project
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center lg:flex-row lg:justify-center lg:items-center lg:space-x-4">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
