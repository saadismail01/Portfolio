import React from "react";
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

const Skillsss = () => {
  return (
    <div className="grid grid-cols-2 gap-6  md:grid-cols-4  md:gap-24 gap-y-10">
      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] "
        src={html}
        alt=""
      />

      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={css}
        alt=""
      />

      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={tailwind}
      />

      <img className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]" src={js} />

      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={ts}
        alt=""
      />

      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={react}
        alt=""
      />

      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={angular}
        alt=""
      />

      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={nodejs}
        alt=""
      />

      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={github}
        alt=""
      />
      <img
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        src={git}
        alt=""
      />
    </div>
  );
};

export default Skillsss;
