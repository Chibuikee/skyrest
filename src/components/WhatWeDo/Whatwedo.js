import React from "react";
import { WhatwedoData } from "./WhatwedoData";
function Whatwedo() {
  return (
    <div className="md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <h4 className="text-[1rem] text-center font-bold text-[#000000] tracking-[0.25rem]">
        WHAT WE DO
      </h4>
      <h2 className="text-[3rem] text-center font-[600] mb-[18px]">
        We`ve got everything you need to launch and grow your business
      </h2>
      <div className="WhatWeDo grid grid-cols-[1fr,1fr]">
        {WhatwedoData.map((item) => (
          <div className="flex">
            <item.icon size={48} className="basis-1/4" />
            <div className="basis-3/4">
              <h4 className="text-[2.5rem]">{item.title}</h4>
              <h4>{item.info}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whatwedo;
