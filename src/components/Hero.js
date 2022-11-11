import React from "react";
// import useOnScreen from "../hooks";
import { links } from "./Navbar/Navbardata";

function Hero() {
  return (
    <section>
      {/* md:px-[5rem] md:w-[100%] w-[94%] mx-auto relative */}
      <div className="Hero-main ">
        <div className="overlay"></div>
        <div className="Hero-ctn Flex">
          <div>
            <h3>WELCOME TO SKYREST</h3>
            <h1>
              We are a creative group of people who design influential brands
              and digital experiences.
            </h1>
          </div>
          <ul className="hero-social-ctn">
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
        <div className="hero-cta-btn Flex">
          <button>START A PROJECT</button>
          <button>MORE ABOUT US</button>
        </div>
        <div className="scroll Flex gap-4">
          <span>﹀</span>
          <h4 className="">SCROLL DOWN</h4>
        </div>
      </div>
    </section>
  );
}

export default Hero;
