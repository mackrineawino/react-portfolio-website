import React from 'react'
import { AiFillHome, AiFillWechat, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";


const Nav = ({ activeColor, isNightMode }) => {
  return (
    <div>
        {/* Left side navigation */}

      <div className={` ${isNightMode ? 'md:bg-[var(--bg-color-1)]' : 'md:bg-[var(--primary-dark-100)]'} hidden md:w-[270px] md:fixed md:left-0 md:top-0 md:z-10 md:p-[30px] md:min-h-full md:flex md:justify-center md:items-center md:border-r-[1px] md:border-[var(--primary-dark-50)] `}>
        <div className="absolute top-[50px] text-[30px]  uppercase">
          <a
            href="/"
            className={` ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} font-bold px-[25px] py-[15px] text-[30px] tracking-[5px] relative before:absolute before:w-[20px] before:h-[20px]  before:border-b-[5px] before:border-l-[5px]  before:border-[var(--skin-color)] before:bottom-0 before:left-0 after:absolute after:w-[20px] after:h-[20px]  after:border-t-[5px] after:border-r-[5px]  after:border-[var(--skin-color)] after:top-0 after:right-0`}
          >
            <span className="font-Clicker text-[40px]">A</span>Mac
          </a>
        </div>
        <div className="hidden h-[40px] w-[45px] border-[1px] border-[var(--primary-dark-50)] cursor-pointer fixed left-[300px] top-[20px] rounded-[5px] bg-[var(--primary-dark-100)] items-center justify-center">
          <span>
            <AiOutlineMenu size={20} className="text-[var(--skin-color)] " />
          </span>
        </div>

        <ul className="mt-[50px">
          <li className="mb-[20px] block">
            <Link
              className={`flex text-[16px] font-semibold border-b-[1px] border-[var(--primary-dark-50)] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/"
            >
              <AiFillHome size={20} className="mx-[8px]" />
              Home
            </Link>
          </li>
          <li className="mb-[20px] block ">
            <Link
              className={`flex text-[16px] font-semibold border-b-[1px] border-[var(--primary-dark-50)] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/about"
            >
              <BsFillPersonFill size={20} className="mx-[8px]" />
              About
            </Link>
          </li>
          <li className="mb-[20px] block">
            <Link
              className={`flex text-[16px] font-semibold border-b-[1px] border-[var(--primary-dark-50)] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/projects"
            >
              <FaBriefcase size={16} className="mx-[8px]" />
              Projects
            </Link>
          </li>
          <li className="mb-[20px] block">
            <Link
              className={`flex text-[16px] font-semibold border-b-[1px] border-[var(--primary-dark-50)] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} px-[5px] py-[15px] active:text-[var(--skin-color)]`}
              to="/contacts"
            >
              <AiFillWechat size={23} className="mx-[8px]" />
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav