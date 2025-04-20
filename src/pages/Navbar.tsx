import React, { useRef, useState } from "react";
import { logo, menu, x } from "../../assets";
import { Link } from "react-scroll";

const Navbar = () => {
  let Home = useRef(null);
  const About = useRef(null);
  const Projects = useRef(null);
  const Contacts = useRef(null);

  const scroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  let Pages = [
    { name: "Home", link: Home },
    { name: "About", link: About },
    { name: "Projects", link: Projects },
    { name: "Contacts", link: Contacts },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-full flex justify-between items-center py-4 px-12 lg:px-24">
      <img src={logo} alt="logo" className=" w-12 h-8 lg:w-[75px] lg:h-14" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </span>
        </li>

        <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </span>
        </li>

        <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
          </span>
        </li>

        <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Skills
            </Link>
          </span>
        </li>

        <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Contacts
          </Link>

          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contacts
            </Link>
          </span>
        </li>
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
          p-6 right-8 bg-teal-300 absolute top-20 mx-4 my-2  min-w-[140px] rounded-xl`}
        >
          <ul className="flex flex-col">
            <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>

              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </span>
            </li>

            <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>

              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </span>
            </li>

            <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>

              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Projects
                </Link>
              </span>
            </li>

            <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>

              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Skills
                </Link>
              </span>
            </li>

            <li className="overflow-hidden relative w-32 p-2 h-12 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                Contacts
              </Link>

              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Contacts
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
