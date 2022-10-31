import React, { useState } from "react";
import { Tdata } from "./TestimonyData";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

function Testimonybuilder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Tdata.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === Tdata.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const { comment, portrate, Name, Title } = Tdata[currentIndex];
  return (
    <div style={{ alignItems: "center" }} className="Flex">
      <HiArrowNarrowLeft onClick={goToPrevious} />
      <div style={{ width: "70%" }} className="Flex">
        {
          <div>
            <p>{comment}</p>
            <img src={portrate} alt={`${Name}`} className="ceo-image" />
            <span>{Name}</span>
            <span>{Title}</span>
          </div>
        }
      </div>
      <HiArrowNarrowRight onClick={goToNext} />
    </div>
  );
}

export default Testimonybuilder;
