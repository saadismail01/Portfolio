import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Saad_Ismail_cv } from "../assets";

const Home = () => {
  return (
    <div className="px-4 sm:px-24 flex items-center justify-center h-screen w-full -mt-10 sm:flex sm:flex-row sm:justify-between sm:items-center overflow-x-hidden">
      <div className="flex justify-center items-center w-full h-full flex-col space-y-12 ">
        <span className="text-teal-300 text-sm lg:text-6xl fontText ">
          Hi there..
        </span>
        <span className="flex items-center justify-center  text-teal-300 text-md lg:text-6xl fontText">
          This is <span className="text-white mx-2">Saad </span>Ismail.
        </span>
        <h2 className="text-white text- sm lg:text-4xl fontText">
          a Web Developer
        </h2>

        <TypeAnimation
          sequence={[
            "It's more then Code, ", // Types 'One'
            1000, // Waits 1s
            "It's passion...", // Deletes 'One' and types 'Two'
            1000, // Waits 2s
            // "ReactJS,TS,Angular...", // Types 'Three' without deleting 'Two'
            () => {
              // console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            color: "#5eead4",
            fontSize: "1.4em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <a
          href={Saad_Ismail_cv}
          target="_blank"
          className="overflow-hidden relative w-32 p-2 h-12 flex justify-center items-center text-white bg-teal-400 rounded-md text-xl font-bold cursor-pointer z-10 group"
        >
          <a>Saad CV</a>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100  group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Download
          </span>
        </a>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
