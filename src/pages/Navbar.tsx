// eslint-disable-next-line no-unused-vars
import React from "react";
// import NavBtn from "../components/NavBtn";s

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between sm:items-center sm:justify-between px-4">
      <div className="text-white">Logo</div>
      <div className="text-white">
        <ul className="flex flex-col sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
          <li>
            <a href="./Home.tsx">Home</a>
          </li>
          <li>
            <a href="./About.tsx">About</a>
          </li>
          <li>
            <a href="./Projects.tsx">Projects</a>
          </li>
          <li>
            <a href="./Contacts.tsx">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
