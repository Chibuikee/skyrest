import React from "react";
import { FaLink } from "react-icons/fa";
import { RWData } from "./RecentworksData";
function RecentworksBuilder() {
  return (
    <section>
      <div>
        {RWData.map((item, key) => (
          <div key={key} style={{ position: "relative" }}>
            <img style={{ height: "50vh" }} src={`${item.img}`} />
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
