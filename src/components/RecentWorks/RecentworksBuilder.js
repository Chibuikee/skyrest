import React from "react";
import { FaLink } from "react-icons/fa";
import { RWData } from "./RecentworksData";
function RecentworksBuilder() {
  return (
    <section>
      <div className="recentworks grid grid-cols-[1fr,1fr] md:px-[5rem] md:w-[100%] w-[94%] mx-auto h-[1820px]">
        {RWData.map((item, key) => (
          <div key={key} style={{ position: "relative" }} className="Work-card">
            <img
              style={{ height: "100%", width: "100%" }}
              src={process.env.PUBLIC_URL + `${item.img}`}
              alt="recent work"
            />
            <div className="details text-[white]">
              <div className="iconDrop relative">
                <div className="dropLine"></div>
                <FaLink />
              </div>
              <div>+</div>
              <div className="relative">
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
