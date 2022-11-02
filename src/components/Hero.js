import React from "react";
import { links } from "./Navbar/Navbardata";
function Hero() {
  return (
    <section>
      {" "}
      <div className="overlay"></div>
      <div className="Hero-ctn Flex">
        <div>
          <h3>WELCOME TO SKYREST</h3>
          <h1>
            We are a creative group of people who design influential brands and
            digital experiences.
          </h1>
        </div>
        <ul className="">
          {links.map((item, key) => (
            <li key={key} className="">
              <a
                href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                className=""
              >
                <svg
                  className="w-6 h-6 text-[#afb5bd] fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={item.box}
                >
                  {item.title}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-cta-btn Flex">
        <button>START A PROJECT</button>
        <button>MORE ABOUT US</button>
      </div>
      <div className="scroll Flex">
        <span>﹀</span>
        <h4>SCROLL DOWN</h4>
      </div>
    </section>
  );
}

export default Hero;
