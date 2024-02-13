import React from "react";
import { co, pexel } from "../../assets";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center space-y-16 bg-black px-24 ">
      <div className="w-full flex items-start justify-center text-teal-300 fontText text-7xl ">
        It's About Section
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[50%]">
          <TypeAnimation
            sequence={[
              "Passionate frontend developer with over 3+ years of experience specializing in creating intuitive and responsive web applications.           Dedicated to mastering the latest technologies using a modern lang of programming like: Html,Css,TS,TailwindCss and FrameWork like ReactJS,Angular,             crafting pixel-perfect UI designs, and embracing continuous learning. Experienced in optimizing website performance and solving complex coding challenges. Collaborative team player with a keen eye for design and a drive to push the boundaries of what's possible. Let's connect and create something amazing together!", // Types 'One'
              1000, // Waits 1s
              // "It's passion...", // Deletes 'One' and types 'Two'
              // 1000, // Waits 2s
              // "ReactJS,TS,Angular...", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              color: "#ffffff",
              fontSize: "2em",
              display: "inherit",
            }}
          />
        </div>
        <div className="w-[50%] border border-teal-300 rounded shadow-lg drop-shadow-lg shadow-teal-100 transition-shadow ">
          <img src={pexel} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default About;
