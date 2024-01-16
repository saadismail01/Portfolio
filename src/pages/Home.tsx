import React from "react";
import { pic } from "../../assets";

const Home = () => {
  return (
    <div className="flex flex-col px-24 h-screen w-full sm:flex sm:flex-row sm:justify-between sm:items-center">
      <div className=" flex items-center justify-center ml-24">
        <div className="flex flex-col space-y-12 ">
          <h1 className="text-teal-300 text-3xl font-mono">
            Hello, i am Saad Ismail
          </h1>
          <h2 className="text-white text-2xl">I'm Front End Developer</h2>
          <h2 className="text-teal-300 text-3xl">
            It's more then work, It's passion...
          </h2>
        </div>
      </div>

      <div className="invisible sm:visible">
        <img
          src={pic}
          alt="pic"
          className="w-[750px] h-[250px] hover:-translate-y-8 duration-[20ms]"
        />
      </div>
    </div>
  );
};

export default Home;
