import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen py-36 px-24 mt-26">
      <div className="sm:text-5xl w-full h-full  flex items-start justify-center text-teal-300 fontText lg:text-7xl">
        My Skills
      </div>

      <div className="w-full flex flex-col justify-center items-center space-y-24">
        <div className="flex space-x-8 lg:space-x-16" data-aos="zoom-in">
          <img className="w-[70px] h-[70px]" src={html} alt="" />

          <img className="w-[70px] h-[70px]" src={css} alt="" />

          <img className="w-[70px] h-[70px]" src={tailwind} />

          <img className="w-[70px] h-[70px]" src={js} />
        </div>

        <div className="flex space-x-8 lg:space-x-16" data-aos="zoom-in">
          <img className="w-[70px] h-[70px]" src={ts} alt="" />

          <img className="w-[70px] h-[70px]" src={react} alt="" />

          <img className="w-[70px] h-[70px]" src={angular} alt="" />

          <img className="w-[70px] h-[70px]" src={nodejs} alt="" />
        </div>

        <div className="flex space-x-8 lg:space-x-16" data-aos="zoom-in">
          <img className="w-[70px] h-[70px]" src={github} alt="" />
          <img className="w-[70px] h-[70px]" src={git} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
