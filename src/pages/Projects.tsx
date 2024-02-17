import React from "react";
import { bank, co, kime } from "../../assets";

const Projects = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center px-24">
      <div className="pb-16 w-full h-[20%] flex items-start justify-center text-teal-300 fontText text-7xl">
        Some Of My Project
      </div>
      <div className="flex justify-center items-center space-x-4">
        <div className="relative flex w-[500px] h-[500px] flex-col rounded-xl shadow-xl shadow-teal-900 bg-black bg-clip-border text-white">
          <div className="relative mx-4 h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <video width="500" height="100" autoPlay>
              <source src={co} type="video/mp4" />
            </video>
          </div>
          <div className="">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                React project!
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                FrontEnd Web project developed with HTML, Tailwind CSS,
                React.js, and TypeScript! Leveraging HTML for structural
                elements and Tailwind CSS for streamlined design, this project
                offers a seamless user experience. Combined with the power of
                React.js for dynamic functionality and TypeScript for type
                safety
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => {
                  window.open("https://react-j3hj.vercel.app/", "_blank");
                }}
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-teal-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                take a look
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex w-[500px] h-[500px] flex-col rounded-xl shadow-teal-900 bg-black bg-clip-border text-white shadow-xl">
          <div className="relative mx-4 h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <video width="500" height="100" autoPlay>
              <source src={bank} type="video/mp4" />
            </video>
          </div>
          <div className="">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Card Bank!
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Crafted with React.js, JavaScript, Tailwind CSS, and HTML,
                experience seamless design across all devices,we've streamlined
                the design process. Join us as we redefine online banking with
                innovative frontend solutions.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => {
                  window.open("https://bank-web-wj7d.vercel.app/", "_blank");
                }}
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-teal-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                take a look
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex w-[500px] h-[500px] flex-col rounded-xl shadow-teal-900 bg-black bg-clip-border text-white shadow-xl">
          <div className="relative mx-4 h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <video width="500" height="100" autoPlay>
              <source src={kime} type="video/mp4" />
            </video>
          </div>
          <div className="">
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Kime!
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Kime FrontEnd Web! It's a testament to the seamless integration
                of JavaScript, HTML, Tailwind CSS, and CSS. JavaScript powers
                its functionality, while HTML provides the essential structure.
                With Tailwind CSS, we've streamlined the design process, and CSS
                adds that final touch of customization.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => {
                  window.open("https://kime-project.vercel.app/", "_blank");
                }}
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-teal-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                take a look
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
