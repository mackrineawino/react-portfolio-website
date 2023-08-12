import React from "react";
import Typed from "react-typed";
import Hero from "../assets/h1.png";
import Resume from "../assets/AWINO MACKRINE: RESUME.pdf"



const Home = ({ activeColor, isNightMode }) => {
  return (
    <div>
      <section className={`${isNightMode ? 'bg-[var(--bg-color)]' : 'bg-[var(--primary-dark-900)]'} min-h-screen ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} pl-[15px] md:pl-[300px] pr-[15px]`}>
        <div className="pt-[30px] pb-[20px] max-w-[1000px] w-full ">
        <div className="hidden sm:flex sm:flex-shrink-0 sm:flex-grow-0 w-[100%] sm:max-w-full">
            <h2 className={`font-[700] text-[40px]  ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} relative before:h-[4px] before:w-[50px] before:bg-[var(--skin-color)] before:absolute before:top-[100%] before:left-0 after:h-[4px] after:w-[25px] after:bg-[var(--skin-color)] after:absolute after:top-[100%] after:left-0 after:mt-[8px]`}>
             Home
            </h2>
          </div>
          <div className="flex flex-col  text-center justify-center items-center lg:text-left 
          lg:flex-row mt-[150px] sm:mt-[60px]  ">
            {/* Left side navigation */}
            <div className="px-4 md:px-0 md:w-[60%]">
              <h3 className="text-[50px] md:text-[62px]">
                Hello, I'm
                <span className="font-Clicker text-[50px] font-[700] text-[var(--skin-color)] pl-2">
                  Awino Mackrine
                </span>
              </h3>
              <p className={`text-[20px] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-700)]'} mb-6`}>
                A software Developer with a knack for crafting exceptional
                digital experiences. Knowledgeable in Software Development,
                testing, and debugging processes.
              </p>
              <div className="flex">
                <h3 className="text-[20px] mb-8 ">My Tech-stack Includes:</h3>
                <Typed
                  className="text-[var(--skin-color)] pl-2 text-[20px]"
                  strings={[
                    "PHP(Laravel)",
                    "Ruby on Rails",
                    "Nodejs",
                    "Javascript",
                    "React",
                  ]}
                  typeSpeed={120}
                  backSpeed={150}
                  loop
                />
              </div>
              <a
                href={Resume}
                download="Awino_Mackrine:resume"
                className="border-none text-[16px] mb-[90px] font-[500] py-[12px] px-[35px] text-[white] rounded-[10px] inline-block bg-[var(--skin-color)] whitespace-nowrap hover:transition-all hover:scale-105"
              >
                Resume/CV
              </a>
            </div>

            {/* Right side navigation */}
            <div className="flex-shrink-0 flex-grow-0 w-[100%] md:w-[40%] max-w-[40%] text-center flex justify-center items-center pl-[15px] relative before:absolute before:w-[80px] before:h-[80px]  before:border-t-[10px] before:border-l-[10px]  before:border-[var(--skin-color)] before:left-[-3px] before:top-[-25px] ">
              <img
                src={Hero}
                alt="heroImage"
                className=" h-[350%] w-auto md:h-[340px] bg-[black] md:w-[90%] m-auto rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
