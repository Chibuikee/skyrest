import React from "react";
import { links, NavMenuList } from "./Navbardata";
import { HiMenu } from "react-icons/hi";
function Navbar() {
  return (
    <nav className="nav">
      <h1>SKYREST</h1>
      <div className="Nav-ctn">
        <div className="Flex menuToggle">
          <h4>MENU</h4>
          <HiMenu />
        </div>
        <div className="Nav-main">
          <div className="Nav-heading Flex">
            <h3>NAVIGATION</h3> <span>x</span>
          </div>
          <ul className="Nav-menu">
            {NavMenuList.childList.map((item) => (
              <li>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="Nav-social">
            {links.map((item, key) => (
              <li
                key={key}
                className="gap-4 flex items-center justify-center border-solid border-2 w-12 h-12 rounded-full border-red-500"
              >
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
      </div>
    </nav>
  );
}

export default Navbar;
