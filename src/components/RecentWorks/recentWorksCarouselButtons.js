import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const buttonStyle = {
  // top: "",
  right: "6px",
  height: "30px",
  width: "32px",
  position: "absolute",
  borderRadius: "3px",
};

const RecentWorksCarouselButtons = {
  prevArrow: (
    <button
      className="hover:bg-[rgba(247,245,245,0.3)] pl-[5px]"
      style={{ ...buttonStyle }}
    >
      {<FaArrowLeft size={16} className="text-[#504c4c] hover:text-[white]" />}
    </button>
  ),
  nextArrow: (
    <button
      className="hover:bg-[rgba(247,245,245,0.3)] pl-[5px]"
      style={{ ...buttonStyle }}
    >
      {<FaArrowRight size={16} className="text-[#504c4c] hover:text-[white]" />}
    </button>
  ),
};

export default RecentWorksCarouselButtons;
