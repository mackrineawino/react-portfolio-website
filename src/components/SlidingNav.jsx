import React, { useState } from "react";
import { AiFillHome, AiFillWechat, AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const SlidingNav = ({ activeColor, isNightMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      {/* Toggle Button */}
      <div
  className={`h-[60px] w-[65px] border-[1px] border-[var(--primary-dark-50)] cursor-pointer fixed right-[270px] top-[37px] rounded-[5px] bg-[var(--primary-dark-100)] flex items-center justify-center md:hidden`}
  onClick={toggleNav}
>
  <AiOutlineMenu size={40} className="text-[var(--skin-color)]" />
</div>


      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-${isNavOpen ? "0" : "full"} h-screen w-[75%] bg-[var(--skin-color)] z-50 md:hidden transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        {isNavOpen && (
          <div
            className="absolute top-[20px] right-[20px] cursor-pointer"
            onClick={closeNav}
          >
            <span className="text-[var(--primary-dark-100)]"><AiFillCloseSquare size={50}/></span>
          </div>
        )}

        <ul className="h-full flex flex-col justify-center items-left pl-[200px] mt-[50px]">
          <li className="mb-[20px]">
            <Link
              className={` border-b-[1px] flex text-[20px] font-[600]  ${
                isNightMode ? "text-white-dark-mode" : "text-white-dark-mode"
              } px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/"
            >
              <AiFillHome size={20} className="mx-[8px]" />
              Home
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              className={` border-b-[1px] flex text-[20px] font-semibold ${
                isNightMode ? "text-white-dark-mode" : "text-white-dark-mode"
              } px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/about"
            >
              <BsFillPersonFill size={24} className="mx-[8px]" />
              About
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              className={`border-b-[1px] flex text-[20px] font-semibold ${
                isNightMode ? "text-white-dark-mode" : "text-white-dark-mode"
              } px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/projects"
            >
              <FaBriefcase size={20} className="mx-[8px]" />
              Projects
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link
              className={`border-b-[1px] flex text-[20px] font-semibold ${
                isNightMode ? "text-white-dark-mode" : "text-white-dark-mode"
              } px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/contacts"
            >
              <AiFillWechat size={23} className="mx-[8px]" />
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlidingNav;
