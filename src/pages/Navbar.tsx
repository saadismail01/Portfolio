import React, { useState } from "react";
import { logo, menu, x } from "../../assets";

const Navbar = () => {
  let Pages = [
    { name: "Home", link: "./Home.tsx" },
    { name: "About", link: "./About.tsx" },
    { name: "Projects", link: "./Projects.tsx" },
    { name: "Contacts", link: "./Contacts" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full flex justify-between items-center py-4">
      <img src={logo} alt="logo" className=" w-18 h-12 " />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1  space-x-14 ">
        {Pages.map((page) => (
          <li
            key={page.name}
            className="inline mr-4 p-2 text-teal-300 text-xl font-semibold"
          >
            <a href={page.link} className="hover:transition-y duration-[20ms]">
              {page.name}
            </a>
          </li>
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
                <a href={page.link}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
