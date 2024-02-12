import React from "react";
import { co } from "../../assets";

const Projects = () => {
  return (
    <>
      <div className=" grid grid-cols-2 gap-4 place-items-center place-content-center ">
        <div className="relative flex w-[500px] h-[500px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-4 h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <video width="500" height="100" autoPlay>
              <source src={co} type="video/mp4" />
            </video>
          </div>

          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[300px] bg-teal-300"></div>
        <div className="w-[500px] h-[300px] bg-teal-300"></div>
        <div className="w-[500px] h-[300px] bg-teal-300"></div>
      </div>
    </>
  );
};

export default Projects;
