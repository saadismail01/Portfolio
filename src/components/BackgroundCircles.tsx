import React from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import About from "../pages/Home";
import Projects from "../pages/Home";
import Skills from "../pages/Home";
import Contacts from "../pages/Home";
import Footer from "../pages/Home";
/* eslint-disable react/no-unescaped-entities */

const BackgroundCircles = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full overflow-x-hidden">
        <div
          className="absolute 
                      w-[200px] h-[200px] 
                      sm:w-[400px] sm:h-[400px] 
                      md:w-[500px] md:h-[700px] 
                      bg-teal-800 rounded-full blur-2xl opacity-10 
                      bottom-10 left-40 
                      animate-pulse-light"
        ></div>

        <div
          className="absolute 
                      w-[300px] h-[300px] 
                      sm:w-[600px] sm:h-[500px] 
                      md:w-[900px] md:h-[700px] 
                      bg-purple-900 rounded-full blur-3xl opacity-10 
                      bottom-20 left-1/2 
                      animate-pulse-light"
        ></div>
      </div>
    </div>
  );
};

export default BackgroundCircles;
