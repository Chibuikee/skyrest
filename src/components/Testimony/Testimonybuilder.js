import { Tdata } from "./TestimonyData";
import React, { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import RecentWorksCarouselButtons from "../RecentWorks/recentWorksCarouselButtons";

const Testimonybuilder = () => {
  // console.log(pictureIndex, "hello");
  const testimonyPageRef = useRef();
  const [Index, setIndex] = useState(0);
  const [openPopup, setPopup] = useState(false);

  const item = Tdata[Index];

  return (
    <section>
      <div className="bg-[rgba(0,0,0,0.1)] w-[75%] h-[1px] mx-auto"></div>

      <div className="pt-[70px] Flex md:px-[5rem] md:w-[100%] w-[94%] mx-auto bg-[#e6e6e6]">
        <div className="mx-auto w-[100%] flex justify-center items-center">
          <div style={{ width: "90%" }} className="">
            <Slide
              ref={testimonyPageRef}
              autoplay={true}
              indicators
              {...RecentWorksCarouselButtons}
              onChange={(from, to) => {
                setIndex(to);
              }}
            >
              {Tdata.map((bio) => (
                <div key={bio.Name} className="flex flex-col w-[100%]">
                  <p className="text-center text-2xl w-[80%] m-auto">
                    {bio.comment}
                  </p>
                  <img
                    src={bio.portrate}
                    alt={`${bio.Name}`}
                    className="mt-[60px] mb-[12px] w-[84px] h-[84px] mx-auto rounded-full border border-gray-100 shadow-sm"
                  />
                  <span className="text-center">{bio.Name}</span>
                  <span className="text-center">{bio.Title}</span>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonybuilder;

// import React, { useState } from "react";
// import { Tdata } from "./TestimonyData";
// import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

// function Testimonybuilder() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? Tdata.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === Tdata.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const { comment, portrate, Name, Title } = Tdata[currentIndex];
//   return (
//     <section>
//       <div className="bg-[rgba(0,0,0,0.1)] w-[75%] h-[1px] mx-auto"></div>
//       <div className="pt-[70px] Flex md:px-[5rem] md:w-[100%] w-[94%] mx-auto bg-[#e6e6e6]">
//         <div className="mx-auto w-[100%] flex justify-center items-center">
//           <HiArrowNarrowLeft onClick={goToPrevious} />
//           <div style={{ width: "90%" }} className="">
//             <div className="flex flex-col w-[100%]">
//               <p className="text-center text-2xl w-[80%] m-auto">{comment}</p>
//               <img
//                 src={portrate}
//                 alt={`${Name}`}
//                 className="mt-[60px] mb-[12px] w-[84px] h-[84px] mx-auto rounded-full border border-gray-100 shadow-sm"
//               />
//               <span className="text-center">{Name}</span>
//               <span className="text-center">{Title}</span>
//             </div>
//           </div>
//           <HiArrowNarrowRight onClick={goToNext} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonybuilder;
