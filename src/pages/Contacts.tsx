import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="contacts" className="w-full h-screen mt-64 lg:mt-28">
      <div className="  bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
        <h1 className="sm:text-5xl pb-16 w-full h-[20%] flex items-start justify-center text-teal-300 fontText lg:text-7xl mb-16">
          Contact Us!
        </h1>
        <div
          data-aos="zoom-in"
          className="relative py-3 sm:max-w-xl sm:mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-500  transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl shadow-teal-300 shadow-2xl animate-pulse"></div>
          <div className="text-white relative px-8 py-16 bg-gray-900 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center flex flex-col space-y-6">
              <p className="text-white text-lg lg:text-2xl">
                I'm always open to new opportunities. Feel free to contact me
                with any questions or comments you may have. Have questions?
              </p>
              <p className="text-xl lg:text-4xl">
                <a href="mailto:saadismail001@gmail.com">
                  saadismail001@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
