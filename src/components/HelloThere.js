import React from "react";

function HelloThere() {
  const data = [
    { title: "Awards Received", amount: "127" },
    { title: "Cups of Coffee", amount: "1505" },
    { title: "Projects Completed", amount: "109" },
    { title: "Happy Clients", amount: "102" },
  ];
  return (
    <div className="bg-[#39b54a] md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <h3 className="text-[1.7rem] text-center">HELLO THERE</h3>
      <h1 className="text-[6.5rem] text-center ">We Are Glint</h1>
      <p className="text-[1.4rem] text-center">
        Mayowa Adeboye dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt.
      </p>
      <div className="grid grid-cols-[1fr,1fr]">
        {data.map((item, key) => (
          <div key={key}>
            <h5 className="text-[8rem]">{item.amount}</h5>
            <h5 className="text-[1.8rem] text-[#000000]">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelloThere;
