import React, { useRef, useState } from "react";
import { logo, menu, x } from "../../assets";

const Navbar = () => {
  let Home = useRef(null);
  const About = useRef(null);
  const Projects = useRef(null);
  const Contacts = useRef(null);

  let Pages = [
    { name: "Home", link: "./Home.tsx" },
    { name: "About", link: "./About.tsx" },
    { name: "Projects", link: "./Projects.tsx" },
    { name: "Contacts", link: "./Contacts.tsx" },
  ];

  const scroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full flex justify-between items-center -mt-5 py-4 px-24 ">
      <img src={logo} alt="logo" className=" w-18 h-12 " />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1  space-x-14 ">
        {Pages.map((page) => (
          <>
            <button className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              <li onClick={() => scroll(page.link)} className="">
                <a onClick={() => scroll(page.link)} className="">
                  {page.name}
                </a>
              </li>

              <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                Check it!
              </span>
            </button>
          </>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={open ? x : menu}
          alt="menu"
          className="  rounded-md p-2"
          onClick={() => setOpen((prev) => !prev)}
        />

        <div
          className={`${open ? `flex` : `hidden`}
          p-6 right-16 bg-teal-300 absolute top-20 mx-4 my-2  min-w-[140px] rounded-xl  `}
        >
          <ul className="flex flex-col">
            {Pages.map((page) => (
              <li
                key={page.name}
                className=" mb-4 text-gray-950 text-md font-semibold inline mr-6"
              >
                <a>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
