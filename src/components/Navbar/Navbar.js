import React, { useRef, useState } from "react";
import { links, NavMenuList } from "./Navbardata";
import { HiMenu } from "react-icons/hi";
import useOnScreen from "../../hooks";
function Navbar() {
  const [navBarToggle, setNavBarToggle] = useState(null);
  //   useEffect(() => {
  //     const w = () => {
  //       window.innerWidth === 800 && setNavBarToggle(true);
  //     };
  //     window.addEventListener("resize", w);
  //     return () => {
  //       window.removeEventListener("resize", w);
  //     };
  //   }, []);
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const bg = { backgroundColor: `${!isVisible ? "black" : ""}` };
  // return <div ref={ref}>{isVisible && `Yep, I'm on screen`}</div>

  const navtogglerStyle = {
    transform: `translate(${navBarToggle ? "-50%" : "50%"})`,
  };
  return (
    <nav className="w-[90%] mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
      <h1 ref={ref} className="logo" translate="no">
        Skyrest
      </h1>
      <div className="Nav-ctn">
        <div
          onClick={() => setNavBarToggle(!navBarToggle)}
          className="Flex menuToggle"
          style={bg}
        >
          <h4 className="hidden md:block">MENU</h4>
          <HiMenu size={30} className="menuToggle-icon " />
        </div>
        <div style={navtogglerStyle} className="Nav-main">
          <div className="Nav-heading Flex w-[150px] md:w-[initial]">
            <h3>NAVIGATION</h3>
            <span onClick={() => setNavBarToggle(!navBarToggle)}>x</span>
          </div>
          <ul className="Nav-menu">
            {NavMenuList.childList.map((item) => (
              <li>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <p className="w-[60%] md:w-[initial]">
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
            porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
            neque reprehenderit.
          </p>
          <ul className="Nav-social Flex w-[60%] md:w-[70%]">
            {links.map((item, key) => (
              <li key={key} className="">
                <a
                  href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                  className=""
                >
                  <item.title className="nav-svg" />
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
