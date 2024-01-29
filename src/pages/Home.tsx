import React from "react";
import { pic } from "../../assets";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">
      <div className=" flex items-center justify-center   mt-28 md:mt-0">
        <div className="flex flex-col space-y-12 ">
          <span className="text-teal-300 text-7xl fontText ">
            Hello..
            <br />
            <br />i am <span className="text-white">Saad </span>Ismail.
          </span>
          <h2 className="text-white text-4xl fontText">
            I'm Front End Developer
          </h2>

          <TypeAnimation
            sequence={[
              "It's more then Code, It's passion...", // Types 'One'
              7000, // Waits 1s
              // "", // Deletes 'One' and types 'Two'
              // 2000, // Waits 2s
              // "", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              color: "#5eead4",
              fontSize: "2em",
              display: "inline-block",
            }}
          />
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
