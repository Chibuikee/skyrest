import React from "react";
import { WhatwedoData } from "./WhatwedoData";
function Whatwedo() {
  return (
    <div className="md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <h4>WHAT WE DO</h4>
      <h2> We`ve got everything you need to launch and grow your business</h2>
      <div className="WhatWeDo grid grid-cols-[1fr,1fr]">
        {WhatwedoData.map((item) => (
          <div>
            <item.icon size={48} />
            <h4 className="text-[2.5rem]">{item.title}</h4>
            <h4>{item.info}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whatwedo;
