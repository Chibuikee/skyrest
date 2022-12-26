import React from "react";
// import useOnScreen from "../hooks";
import { HiChevronDown } from "react-icons/hi";
import { links } from "./Navbar/Navbardata";

function Hero() {
  return (
    <section>
      {/* md:px-[5rem] md:w-[100%] w-[94%] mx-auto relative */}
      <div className="Hero-main ">
        <div className="overlay"></div>
        <div className="Hero-ctn Flex">
          <div className="sm:ml-[40px] mx-auto w-[70%]">
            <h3 className="text-[12px]">WELCOME TO SKYREST</h3>
            <h1 className="text-[18px] sm:text-[3.1vw]">
              We are a creative group of people who design influential brands
              and digital experiences.
            </h1>
          </div>
          <ul className="hero-social-ctn hidden md:block">
            {links.map((item, key) => (
              <li key={key} className="py-[0.7rem]">
                <a
                  href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                  className=""
                >
                  <item.title className="hero-social" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-cta-btn flex flex-col sm:flex-row mx-auto sm:mx-[initial] left-0 sm:left-[40px] right-0 w-[75%] sm:w-[fit-content]">
          <button>START A PROJECT</button>
          <button>MORE ABOUT US</button>
        </div>
        <div className="scroll Flex gap-4 bottom-[15px] sm:bottom-[20px]">
          <HiChevronDown />
          <h4 className="">SCROLL DOWN</h4>
        </div>
      </div>
    </section>
  );
}

export default Hero;
