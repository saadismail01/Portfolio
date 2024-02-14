import React from "react";
import { pic } from "../../assets";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className=" px-24 flex items-center justify-center h-screen w-full -mt-10 sm:flex sm:flex-row sm:justify-between sm:items-center">
      <div className="area">
        <div className="flex justify-center items-center w-full h-full flex-col space-y-12 ">
          <span className="text-teal-300 text-7xl fontText ">Hi..</span>
          <span className="text-teal-300 text-6xl fontText">
            This is <span className="text-white">Saad </span>Ismail.
          </span>
          <h2 className="text-white text-4xl fontText">
            a Front End Developer
          </h2>

          <TypeAnimation
            sequence={[
              "It's more then Code, ", // Types 'One'
              1000, // Waits 1s
              "It's passion...", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              // "ReactJS,TS,Angular...", // Types 'Three' without deleting 'Two'
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
