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
          <div className="xxs:ml-[40px] font-[600] mx-auto w-[90%]">
            <h3 className="text-[14.1176px] sm:text-[0.938rem] mmd:text-[1rem] relative text-center xxs:text-left text-[#757575]">
              WELCOME TO SKYREST
            </h3>
            <h1 className="text-[30.1176px] m:text-[2.5rem] mmd:text-[2.875rem] lg:text-[3.2rem] lg:leading-[60px] text-center xxs:text-left xxs:w-[90%] xs:mb-[30px]">
              We are a creative group of people who design influential brands
              and digital experiences.
            </h1>
          </div>
          <ul className="hero-social-ctn hidden xs:block">
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
        <div className="hero-cta-btn bottom-[20px] sm:bottom-[50px] flex flex-col sm:flex-row mx-auto xxs:ml-[40px] sm:ml-0 left-0 sm:left-[40px] right-0 w-[75%] xs:w-[60%] sm:w-[fit-content]">
          <button className="xs:px-[2rem] xs:py-[1rem]">START A PROJECT</button>
          <button className="xs:px-[2rem] xs:py-[1rem]">MORE ABOUT US</button>
        </div>
        <div className="scroll hidden sm:flex gap-4 bottom-[15px] sm:bottom-[20px]">
          <HiChevronDown className="text-[green]" />
          <h4>SCROLL DOWN</h4>
        </div>
      </div>
    </section>
  );
}

export default Hero;
