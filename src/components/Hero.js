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
        <ul className="hero-social-ctn">
          {links.map((item, key) => (
            <li key={key} className="">
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
      <div className="scroll Flex">
        <span>﹀</span>
        <h4>SCROLL DOWN</h4>
      </div>
    </section>
  );
}

export default Hero;
