import React from 'react';
import PHP from '../assets/php.png';
import CSS from '../assets/css.png';
import Laravel from '../assets/laravel.png';
import Tailwind from '../assets/tailwind.png';
import Rails from '../assets/rails.png';
import ReactImage from '../assets/react.png';
import Docker from '../assets/docker.png';
import Graphql from '../assets/graphql.png';
import JS from '../assets/js.png';
import Postgres from '../assets/pg.png';
import HTML from '../assets/html.png';


const technologies = [
  {
    id: 1,
    src: HTML,
    title: 'HTML',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: CSS,
    title: 'CSS',
    style: 'shadow-blue-500',
  },
  {
    id: 3,
    src: JS,
    title: 'JavaScript',
    style: 'shadow-yellow-500',
  },
  {
    id: 4,
    src: ReactImage,
    title: 'React',
    style: 'shadow-blue-600',
  },
  {
    id: 5,
    src: Tailwind,
    title: 'Tailwind',
    style: 'shadow-sky-400',
  },
  {
    id: 6,
    src: PHP,
    title: 'PHP',
    style: 'shadow-white',
  },
  {
    id: 7,
    src: Laravel,
    title: 'Laravel',
    style: 'shadow-pink-400',
  },
  {
    id: 8,
    src: Docker,
    title: 'Docker',
    style: 'shadow-gray-400',
  },
  {
    id: 9,
    src: Rails,
    title: 'Rails',
    style: 'shadow-blue-600',
  },
  {
    id: 10,
    src: Postgres,
    title: 'Postgres',
    style: 'shadow-sky-400',
  },
  {
    id: 11,
    src: Graphql,
    title: 'Graphql',
    style: 'shadow-pink-400',
  },
];

export const About = ({activeColor, isNightMode}) => {
  return (
    <div>
      <section className={`${isNightMode ? 'bg-[var(--bg-color)]' : 'bg-[var(--primary-dark-900)]'} min-h-screen text-[var(--text-black-900)] pl-[15px] md:pl-[300px] pr-[15px]`}>

        <div className="opacity-[1] pt-[30px] pb-[20px] max-w-[1000px] w-full mx-auto">
          <div className="mb-[60px] hidden sm:flex sm:flex-shrink-0 sm:flex-grow-0 w-[100%] sm:max-w-full">
            <h2 className={`font-[700] text-[40px]  ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'} relative before:h-[4px] before:w-[50px] before:bg-[var(--skin-color)] before:absolute before:top-[100%] before:left-0 after:h-[4px] after:w-[25px] after:bg-[var(--skin-color)] after:absolute after:top-[100%] after:left-0 after:mt-[8px]`}>
              About Me
            </h2>
          </div>

          <div>
            <div className="flex-shrink-0 flex-grow-0 w-[100%] max-w-full mt-[150px] sm:mt-[60px]">
              <div className="flex-shrink-0 flex-grow-0 w-[100%] max-w-full mb-7">
              <p className={`text-[20px] text-center md:text-left leading-[25px] pr-[15px] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'}`}>
                  Whether it's building dynamic and efficient backends with PHP
                  Laravel and Ruby on Rails or crafting interactive and engaging
                  frontends with React and JavaScript, I've dedicated to
                  creat seamless, user-centric solutions and I'm committed to
                  pushing boundaries and delivering results that exceed
                  expectations.
                </p>
              </div>
              <div className="text-[40px] text-[var(--skin-color)] text-center">
                <h4>My Tech Stack</h4>
                <h4 className={`text-[20px] leading-[25px] pr-[15px] ${isNightMode ? 'text-white-dark-mode' : 'text-[var(--text-black-900)]'}`}>Some of the technologies I've worked with include:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pr-[15px] mt-7">
                  {technologies.map(({ id, src, title, style }) => (
                    <div
                      key={id}
                      className={`shadow-md bg-slate-800 hover:scale-105 duration-500 py-2 rounded-lg`}
                    >
                      <img src={src} alt="heroimage" className="w-20 mx-auto" />
                      <p className="mt-4 text-center text-[20px] text-white">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
