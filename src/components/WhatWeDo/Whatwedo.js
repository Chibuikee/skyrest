import React from "react";
import { WhatwedoData } from "./WhatwedoData";
function Whatwedo() {
  return (
    <div className="pt-[162px] pb-[90px] md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <h4 className="text-[1rem] text-center font-bold  text-[#39b54a] tracking-[0.25rem]">
        WHAT WE DO
      </h4>
      <h2 className="text-[1.767rem] xxxs:text-[2.0625rem] s:text-[2.5rem] mmd:text-[2.75rem] lg:text-[3.25rem] text-center font-[600] mb-[30px]">
        We`ve got everything you need to launch and grow your business
      </h2>
      <div className="bg-[rgba(0,0,0,0.1)] w-[75%] h-[1px] mx-auto"></div>
      <div className="WhatWeDo md:grid grid-cols-[1fr,1fr] gap-y-[40px] mt-14 mx-auto">
        {WhatwedoData.map((item) => (
          <div className="flex">
            <item.icon size={48} className="basis-1/4 text-[#39b54a]" />
            <div className="basis-3/4 ">
              <h4 className="text-[1.5rem] font-semibold">{item.title}</h4>
              <h4 className="text-[1rem] xxxs:text-[1.0625rem]">{item.info}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whatwedo;
