import React from "react";
import { WhatwedoData } from "./WhatwedoData";
function Whatwedo() {
  return (
    <div>
      <h4>WHAT WE DO</h4>
      <h2> We`ve got everything you need to launch and grow your business</h2>
      <div className="WhatWeDo">
        {WhatwedoData.map((item) => (
          <div>
            <item.icon />
            <h4>{item.title}</h4>
            <h4>{item.info}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whatwedo;
