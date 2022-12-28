import React from "react";

function HelloThere() {
  const data = [
    { title: "Awards Received", amount: "127" },
    { title: "Cups of Coffee", amount: "1505" },
    { title: "Projects Completed", amount: "109" },
    { title: "Happy Clients", amount: "102" },
  ];
  return (
    <div className="bg-[#39b54a] pt-[162px] text-[#ffffff] pb-[90px] md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <div className="pb-[21px] mb-[36px]">
        <h3 className="text-[1rem] text-center font-bold text-[#000000] tracking-[0.25rem] ">
          HELLO THERE
        </h3>
        <h1 className="text-[2.47rem] xxxs:text-[3.125rem] s:text-[4rem] mmd:text-[4.5rem] lg:text-[4.875rem] text-center font-[600] mb-[18px] ">
          We Are Skyrest
        </h1>
        <div className="bg-[rgba(255,255,255,0.25)] w-[75%] h-[1px] mx-auto"></div>
      </div>
      <p className="text-[1.5rem] leading-[2.625rem] text-center px-[15px] mb-[3rem]">
        Mayowa Adeboye dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt.
      </p>
      <div className="relative achievements-ctn mt-[30px] mb-[39px] s:grid grid-cols-[1fr,1fr] mx-auto w-[90%] justify-items-center gap-y-8">
        {data.map((item, key) => (
          <div key={key} className="my-[15px] text-center ">
            <h5 className="text-[5.25rem] leading-[5.25rem] font-semibold">
              {item.amount}
            </h5>
            <h5 className="mt-[10px] mb-[40px] text-[1.8rem] text-[#000000]">
              {item.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelloThere;
