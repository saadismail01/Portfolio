import React from "react";
import { co } from "../../assets";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-black px-24 ">
      <div className="pb-16 w-full h-[20%] flex items-start justify-center text-teal-300 fontText text-7xl ">
        It's About Section
      </div>
      <div className="w-82">
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
        {/* <span className="fontText text-lg text-white ">
          Hi there! I'm Saad, a passionate frontend developer with a keen eye
          for design and a knack for creating engaging user experiences. With 3+
          years of experience in the field, I specialize in turning ideas into
          intuitive and responsive web applications. My journey into web
          development began while making many searching in browsers thats make
          me ask how this websites it come! Since then, I've been dedicated to
          mastering the latest technologies and techniques to stay at the
          forefront of the ever-evolving web landscape. Whether it's crafting
          pixel-perfect UI designs, optimizing website performance, or solving
          complex coding challenges, I thrive on pushing the boundaries of
          what's possible. I'm also passionate about collaboration and enjoy
          working closely with designers, developers, and stakeholders to bring
          projects to life. When I'm not coding, you can find me playing
          football or in the gym... I believe in continuous learning and am
          always excited to explore new technologies and frameworks to enhance
          my skill set. Let's connect and create something amazing together!
        </span> */}
      </div>
      {/* <div className=" grid grid-cols-2 gap-4 place-items-center place-content-center ">
        <div className="">
          <video width="500" height="500" autoPlay>
            <source src={co} type="video/mp4" />
          </video>
        </div>
        <div className="w-[500px] h-[300px] bg-teal-300"></div>
        <div className="w-[500px] h-[300px] bg-teal-300"></div>
        <div className="w-[500px] h-[300px] bg-teal-300"></div>
      </div> */}
    </div>
  );
};

export default About;
