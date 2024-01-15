import React, { useState } from "react";
import { menu, x } from "../../assets";

const Navbar = () => {
  let Pages = [
    { name: "Home", link: "./Home.tsx" },
    { name: "About", link: "./About.tsx" },
    { name: "Projects", link: "./Projects.tsx" },
    { name: "Contacts", link: "./Contacts" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-10 ">
      <img src="../../assets/logo.png.png" alt="logo" className="w-32 h-28" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        {Pages.map((page) => (
          <li
            key={page.name}
            className=" bg-teal-300 inline mr-6 p-2 rounded-md text-gray-950 text-md font-semibold"
          >
            <a href={page.link}>{page.name}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center text-white">
        <img
          src={open ? x : menu}
          alt="menu"
          className="bg-teal-300 rounded-md p-2"
          onClick={() => setOpen((prev) => !prev)}
        />

        <div
          className={`${open ? `flex` : `hidden`}
          p-6 bg-teal-300 absolute top-20 right-0 mx-4 my-2  min-w-[140px] rounded-xl  `}
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
