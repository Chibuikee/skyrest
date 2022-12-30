import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { RWData } from "./RecentworksData";
function RecentworksBuilder() {
  // let scale_anime;
  // function handle_scale() {
  //   scale;
  // }
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <section className="">
      <div className="bg-[#111111] text-[white] pt-[150px] pb-[252px] mx-auto md:px-[2rem] md:w-[100%] w-[94%] ">
        <h4 className=" text-[1rem] text-center font-bold  text-[#39b54a] tracking-[0.25rem]">
          RECENT WORKS
        </h4>
        <h2 className="text-[1.767rem] xxxs:text-[2.0625rem] s:text-[2.5rem] mmd:text-[2.75rem] lg:text-[3.25rem] text-center font-[600] mb-[30px]">
          We love what we do, check out some of our latest works
        </h2>
        <div className="bg-[rgba(214,207,113,0.93)] w-[75%] h-[1px] mx-auto my-11"></div>
      </div>
      <div className="md:px-[2rem] md:w-[100%] w-[94%] mx-auto mt-[-200px] recentworks s:grid s:s:grid-rows-[244px_50px_244px_50px_244px] mdd:s:grid-rows-[300px_70px_300px_70px_300px] pc:grid-rows-[540px_100px_540px_100px_540px] grid-cols-[1fr_1fr] s:h-[1820px]">
        {RWData.map((item, key) => (
          <div key={key} style={{ position: "relative" }} className="Work-card">
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="details text-[white]"
            >
              <div className="iconDrop relative">
                <div className="dropLine absolute top-[0px] left-[8.5%] w-[1px] h-10 bg-white"></div>
                <div className="absolute flex items-center justify-center top-[40px] left-8 border rounded-full px-3 py-3">
                  <FaLink />
                </div>
              </div>
              <div className="absolute right-0 left-0 m-auto w-2 h-2 top-0 bottom-0 text-[40px] ">
                +
              </div>
              <div className="absolute recent-ctn-info left-8">
                <h4>{item.title}</h4>
                <h4>{item.category}</h4>
              </div>
            </div>
            <img
              className="recent-ctn-img hi"
              style={{ height: "100%", width: "100%" }}
              src={process.env.PUBLIC_URL + `${item.img}`}
              alt="recent work"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentworksBuilder;
