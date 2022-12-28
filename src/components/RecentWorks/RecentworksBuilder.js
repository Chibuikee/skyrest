import React from "react";
import { FaLink } from "react-icons/fa";
import { RWData } from "./RecentworksData";
function RecentworksBuilder() {
  return (
    <section>
      <div className="grid grid-cols-[1fr,1fr] md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
        {RWData.map((item, key) => (
          <div key={key} style={{ position: "relative" }} className="Work-card">
            <img
              style={{ height: "50vh" }}
              src={`${item.img}`}
              alt="recent work"
            />
            <div style={{ position: "absolute", top: "0" }} className="details">
              <div className="iconDrop">
                <div className="dropLine"></div>
                <FaLink />
              </div>
              <div>+</div>
              <div>
                <h4>{item.title}</h4>
                <h4>{item.category}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentworksBuilder;
