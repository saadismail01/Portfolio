import React from "react";
import { pic } from "../../assets";

const Home = () => {
  return (
    <div className="flex flex-col px-24 h-screen w-full items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">
      <div className=" flex items-center justify-center ml-24 mt-28 md:mt-0">
        <div className="flex flex-col space-y-12 ">
          <span className="text-teal-300 text-7xl fontText ">
            Hello..
            <br />
            <br />i am <span className="text-white">Saad </span>Ismail.
          </span>
          <h2 className="text-white text-4xl fontText">
            I'm Front End Developer
          </h2>
          <h2 className="text-teal-300 text-3xl fontText">
            It's more then Code,{" "}
            <span className="text-white">It's passion...</span>
          </h2>
        </div>
      </div>

      <div className="invisible sm:visible">
        <div className="absolute z-[0] w-[40%] h-[40%]  -left[5%] rounded-full bg-green-gradient"></div>
        <img src={pic} alt="pic" className="w-[750px] h-[250px] z-50" />
      </div>
    </div>
  );
};

export default Home;
