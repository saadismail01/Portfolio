import React, { useState } from "react";

import { menu, x } from "../../assets/index.js";

const Navbar = () => {
  let Saad = [
    { name: "Home", link: "./Home.tsx" },
    { name: "About", link: "./About.tsx" },
    { name: "Projects", link: "./Projects.tsx" },
    { name: "Contacts", link: "./Contacts.tsx" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-20 flex items-center justify-between sm:items-center sm:justify-between p-10 ">
      <div className="text-white">Logo</div>

      <div className="flex flex-1 justify-end items-center z-10   ">
        <img
          src={open ? x : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain bg-slate-50 sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
        />
        <div
          className={`  ${open ? `flex` : `invisible`} ${
            !open ? `flex` : "visible"
          }
          p-6 bg-gray-900 sm:bg-transparent absolute top-14 sm:top-0 !sm:visible right-0 mx-4 my-2  min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
            {Saad.map((saad) => (
              <li key={saad.name} className="py-3 sm:py-0">
                <a href={saad.link} className="text-xl text-white">
                  {saad.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
