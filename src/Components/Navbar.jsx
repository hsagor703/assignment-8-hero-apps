import React from "react";
import logo from "../assets/logo.png"
import { Github } from "lucide-react";
const Navbar = () => {
  return (
    <div className="shadow-2xl">
      <div className="container mx-auto ">
        <div className="navbar bg-base-100 px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>

                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <img className="h-10" src={logo} alt="logo" />
              <a className=" text-xl font-medium text-transparent bg-clip-text bg-gradient-to-l from-[#9F62F2] to-[#632EE3]">HERO.IO</a>
            </div>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a> Apps</a>
              </li>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a target="blank" href="https://github.com/hsagor703?tab=repositories" className="btn  h-14 bg-linear-to-tl from-[#9F62F2] to-[#632EE3]"> <Github className="bg-white p-1 rounded-full" /> <span className="text-white">Contribute</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
