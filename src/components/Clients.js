import React, { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import RecentWorksCarouselButtons from "./RecentWorks/recentWorksCarouselButtons";

function Clients() {
  const ClientsPageRef = useRef();
  const clients = [
    {
      img: "/assets/clients/apple.png",
      url: "",
    },
    {
      img: "/assets/clients/atom.png",
      url: "",
    },
    {
      img: "/assets/clients/blackberry.png",
      url: "",
    },
    {
      img: "/assets/clients/dropbox.png.webp",
      url: "",
    },
    {
      img: "/assets/clients/envato.png.webp",
      url: "",
    },
    {
      img: "/assets/clients/firefox.png",
      url: "",
    },
    {
      img: "/assets/clients/joomla.png",
      url: "",
    },
    {
      img: "/assets/clients/magento.png",
      url: "",
    },
  ];
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ];
  return (
    <div className="py-[162px] bg-[#e6e6e6] md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <h4 className="text-[1rem] text-center font-bold text-[#39b54a] tracking-[0.25rem]">
        OUR CLIENTS
      </h4>
      <h2 className="text-[1.767rem] xxxs:text-[2.0625rem] s:text-[2.5rem] mmd:text-[2.75rem] lg:text-[3.25rem] text-center font-[600] mb-[18px]">
        Skyrest has been honored to partner up with these clients
      </h2>

      <Slide
        ref={ClientsPageRef}
        autoplay={true}
        indicators
        slidesToScroll={2}
        responsive={responsiveSettings}
        slidesToShow={2}
        {...RecentWorksCarouselButtons}
      >
        {clients.map((item) => (
          <img
            key={item.img}
            className="max-w-[141px] max-h-[141px]"
            src={process.env.PUBLIC_URL + `${item.img}`}
            alt="client-logo"
          />
        ))}
      </Slide>
    </div>
  );
}

export default Clients;
