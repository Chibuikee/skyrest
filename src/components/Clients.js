import React from "react";

function Clients() {
  const clients = [
    "https://preview.colorlib.com/theme/glint/images/clients/xapple.png.pagespeed.ic.LRyKIqS94g.webp",
    "https://preview.colorlib.com/theme/glint/images/clients/xatom.png.pagespeed.ic.dwjCwOpoMB.webp",
    "https://preview.colorlib.com/theme/glint/images/clients/xblackberry.png.pagespeed.ic.4YUA8e33nk.webp",
    "https://preview.colorlib.com/theme/glint/images/clients/xdropbox.png.pagespeed.ic.aYYvBaVnd-.webp",
    "https://preview.colorlib.com/theme/glint/images/clients/xenvato.png.pagespeed.ic.c-N8yRIHHd.webp",
    "	https://preview.colorlib.com/theme/glint/images/clients/xfirefox.png.pagespeed.ic.rChz0H7dGu.webp",
    "	https://preview.colorlib.com/theme/glint/images/clients/xjoomla.png.pagespeed.ic.FpAVRF996j.webp",
    "https://preview.colorlib.com/theme/glint/images/clients/xmagento.png.pagespeed.ic.dhkdk5A1Gu.webp",
  ];
  return (
    <div className="py-[162px] bg-[#e6e6e6] md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <h4 className="text-[1rem] text-center font-bold text-[#39b54a] tracking-[0.25rem]">
        OUR CLIENTS
      </h4>
      <h2 className="text-[3rem] text-center font-[600] mb-[18px]">
        Skyrest has been honored to partner up with these clients
      </h2>
      <div className="Flex clients-logo">
        {clients.map((item) => (
          <img className="w-[141px] h-[141px] px-[15px]" src={item} />
        ))}
      </div>
    </div>
  );
}

export default Clients;
