import React from "react";

function HelloThere() {
  const data = [
    { title: "Awards Received", amount: "127" },
    { title: "Cups of Coffee", amount: "1505" },
    { title: "Projects Completed", amount: "109" },
    { title: "Happy Clients", amount: "102" },
  ];
  return (
    <div>
      <h3>HELLO THERE</h3>
      <h1>WE ARE SKYREST</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </p>
      <div className="Flex">
        {data.map((item, key) => (
          <div key={key}>
            <h5>{item.amount}</h5>
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelloThere;
