import React from "react";
import Barber from "../assets/barber.png";
import University from "../assets/university.png";
import Clothes from "../assets/clothes.png";
import Pizza from "../assets/pizza.png";
import HospitalManagementsystem from "../assets/hospital.png";
import IP from "../assets/ip.jpg";
import Enc from "../assets/en.jpg";
import Compiler from "../assets/compiler.jpg";
import TypePromotion from "../assets/type.jpg";

const softwarePortfolio = [
  {
    id: 1,
    src: Pizza,
    link: "https://mackrineawino.github.io/pizza_place_react/",
    code: "https://github.com/mackrineawino/pizza_place_react",
  },
  {
    id: 2,
    src: University,
    link: "https://mackrineawino.github.io/University-Website/home.html",
    code: "https://github.com/mackrineawino/University-Website",
  },
  {
    id: 3,
    src: HospitalManagementsystem,
    link: "",
    code: "https://github.com/mackrineawino/hospital-management-system",
  },
  {
    id: 4,
    src: Barber,
    link: "https://mackrineawino.github.io/BarbarShop/",
    code: "https://github.com/mackrineawino/BarbarShop",
  },
  {
    id: 5,
    src: Clothes,
    link: "https://mackrineawino.github.io/Urban-clothing/",
    code: "https://github.com/mackrineawino/Urban-clothing",
  },
];
const techWritingPortfolio = [
  {
    id: 1,
    src: Compiler,
    text: "Introduction to Handles and Handle Pruning in Compiler Design",
    link: "https://www.section.io/engineering-education/handle-and-handle-pruning-compiler-design/",
  },
  {
    id: 2,
    src: TypePromotion,
    text: "Automatic Type Promotion",
    link: "https://www.section.io/engineering-education/automatic-type-promotion/",
  },
  {
    id: 3,
    src: IP,
    text: "Understanding IPV4 and IPV6 protocols",
    link: "https://www.section.io/engineering-education/internet-protocols/",
  },
  {
    id: 4,
    src: Enc,
    text: "Understanding AES and RSA Encryption Algorithms",
    link: "https://www.section.io/engineering-education/aes-rsa-encryption/",
  },
];

const Projects = ({ activeColor, isNightMode }) => {
  return (
    <div>
      <section className={`${isNightMode ? 'bg-[var(--bg-color)]' : 'bg-[var(--primary-dark-900)]'} min-h-screen ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} pl-[15px] md:pl-[300px] pr-[15px]`}>
        <div className="opacity-[1] pt-[30px] pb-[20px] max-w-[1000px] w-full mx-auto">
          <div className="mb-[60px] flex flex-shrink-0 flex-grow-0 w-[100%] max-w-full">
            <h2 className="font-[700] text-[40px] relative before:h-[4px] before:w-[50px] before:bg-[var(--skin-color)] before:absolute before:top-[100%] before:left-0 after:h-[4px] after:w-[25px] after:bg-[var(--skin-color)] after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              Portfolio
            </h2>
          </div>
          <div>
            <h2 className={`text-[24px] mb-[15px] font-[900] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'}`}>
              Previous software Projects:
            </h2>
          </div>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-9 ">
            {softwarePortfolio.map(({ id, src, link, code }) => (
              <div key={id} className="shadow-md shadow-gray-100 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center ">
                  <a
                    href={link}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 md:text-[20px]  text-[var(--skin-color)]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                  <a
                    href={code}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 md:text-[20px]  text-[var(--skin-color)]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className={`text-[24px] mt-[60px] mb-[15px] font-[900] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'}`}>
              Technical Writings:
            </h2>
          </div>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-9">
            {techWritingPortfolio.map(({ id, src, text, link }) => (
              <div key={id} className="shadow-md shadow-gray-100 rounded-lg  duration-200 hover:scale-105">
                 <a href ={link} ><img
                  src={src}
                  alt=""
                  className="rounded-md md:h-[250px] w-full duration-200 hover:scale-105"
                /></a>
               <a href ={link} ><p className="w-3/4 px-2 m-4 duration-200 hover:scale-105 text-[20px]  text-[var(--skin-color)] text-center md:text-left">
                  {text}
                </p></a>
                <div className="flex items-center justify-center">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
