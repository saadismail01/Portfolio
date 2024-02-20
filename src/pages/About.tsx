import React, { useRef } from "react";
import { pexel } from "../../assets";

const About = () => {
  return (
    <div id="about" className="bg-gray-900">
      <div className="w-full h-screen container mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-24">
        <div>
          <span className="sm:text-5xl flex items-center justify-center w-full lg:text-7xl font-extrabold text-teal-300 ">
            About Saad!
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <p className="mt-4 text-white lg:text-3xl sm:text-lg">
              Experienced frontend developer with 3+ years of expertise in HTML,
              CSS, TypeScript, and frameworks like ReactJS and Angular. Skilled
              in crafting intuitive UI designs with Tailwind CSS and optimizing
              website performance. Collaborative team player with a passion for
              pushing boundaries and creating amazing web applications. Let's
              connect and build something great!
            </p>
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/saad-ismail01/"
                className="text-teal-500 hover:text-teal-600 font-medium"
              >
                Learn more about Me
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={pexel}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
