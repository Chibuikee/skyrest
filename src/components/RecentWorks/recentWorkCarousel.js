import { RWData } from "./RecentworksData";

import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Slide } from "react-slideshow-image";
import { RiFullscreenFill } from "react-icons/ri";
import { BsZoomIn, BsZoomOut, BsShare } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "react-slideshow-image/dist/styles.css";
import RecentWorksCarouselButtons from "./recentWorksCarouselButtons";

const RecentWorkCarousel = forwardRef((props, ref) => {
  // console.log(pictureIndex, "hello");
  const slideRef = useRef();
  const [Index, setIndex] = useState(0);
  const [openPopup, setPopup] = useState(false);
  // use to forward functions of this component to the parent component
  useImperativeHandle(ref, () => ({
    setGoTo: slideRef.current.goTo,
    setPopup: setPopup,
  }));
  useEffect(() => {
    function ScrollOff() {
      console.log("event listener is working");
      setPopup(false);
    }
    if (openPopup === true) {
      window.addEventListener("scroll", ScrollOff);
    }
    // if (openPopup === false) {
    //   console.log("scroll event removed from if condition");
    //   window.removeEventListener("scroll", ScrollOff);
    // }
    return () => {
      window.removeEventListener("scroll", ScrollOff);
      console.log("scroll event removed");
    };
  });

  const item = RWData[Index];
  // console.log("getting component ref", openPopup);
  return (
    <div
      className={`${
        openPopup == true ? "block" : "hidden"
      } fixed text-[white] top-0 w-screen h-screen bg-[#000000] z-[99]`}
    >
      <div className="flex justify-between px-10 py-3">
        <span>
          {Index + 1} / {RWData.length}
        </span>
        <div className="flex gap-5 ">
          <BsZoomIn />
          <RiFullscreenFill />
          <BsShare />
          <AiOutlineClose
            onClick={(e) => {
              e.stopPropagation();
              setPopup(false);
            }}
            size={20}
            className="text-[] cursor-pointer"
          />
        </div>
      </div>

      <Slide
        ref={slideRef}
        autoplay={false}
        {...RecentWorksCarouselButtons}
        onChange={(from, to) => {
          setIndex(to);
        }}
      >
        {RWData.map((image) => (
          <div
            key={image.title}
            className="max-h-[355px] xs:max-h-[400px] flex items-center lg:max-h-[500px]"
          >
            <img
              className="xs:h-[455px] pc:h-[755px] object-contain w-full mx-auto xs:w-[722px]  bg-[#000000]"
              src={image.img}
              alt={`${image.title}`}
            />
          </div>
        ))}
      </Slide>

      <div className="text-center text-[white] p-[10px] hello ">
        <h4 className="mb-[0.6rem]">{item.title}</h4>
        <h4 className="text-[13px] mb-[3rem]">{item.desc}</h4>
      </div>
    </div>
  );
});

export default RecentWorkCarousel;
