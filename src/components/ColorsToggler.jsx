import React, { useState } from 'react';
import { BiSolidCog, BiSolidMoon } from 'react-icons/bi';

const ColorsToggler = ({ activeColor, setActiveColor, toggleNightMode }) => {
  const colorOptions = [
    '#ec1839',
    '#fa5b0f',
    '#37b182',
    '#1854b4',
    '#f021b2',
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed top-[30px] rounded-[5px] z-101 right-0 p-[15px] w-[200px] border-[1px] border-[var(--primary-dark-50)] bg-[var(--primary-dark-50)] transition-transform ${
        isExpanded ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
    >
      <div
        className={`top-0 absolute h-[40px] w-[40px] text-center text-[20px] bg-[var(--primary-dark-100)] text-[var(--text-black-900)] right-full border-[1px] border-[var(--primary-dark-50)] mr-[25px] cursor-pointer rounded-[50%] flex justify-center items-center`}
        onClick={toggleExpansion}
      >
        <BiSolidCog className={`leading-[40px] animate-spin`} />
      </div>

      <div
        className={`top-[55px] absolute h-[40px] w-[40px] text-center text-[20px] bg-[var(--primary-dark-100)] text-[var(--text-black-900)] right-full border-[1px] border-[var(--primary-dark-50)] mr-[25px] cursor-pointer rounded-[50%] flex justify-center items-center`}
        onClick={() => {
          toggleNightMode();
        }}
      >
        <BiSolidMoon className={`leading-[40px]`} />
      </div>

      <h4 className='my-0 ml-0 mr-[10px] text-[16px] font-[600] uppercase text-[var(--text-black-700)]'>
        Theme Colors
      </h4>
      <div className='flex flex-wrap justify-between'>
        {colorOptions.map((color, index) => (
          <span
            key={index}
            className='inline-block h-[30px] w-[30px] rounded-[50%] border-[1px] border-[var(--primary-dark-50)] cursor-pointer'
            style={{ backgroundColor: color }}
            onClick={() => {
              setActiveColor(color);
              document.documentElement.style.setProperty('--skin-color', color);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorsToggler;
