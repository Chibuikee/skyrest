import React from "react";
import { contactUsInfo } from "./Data";
import { links } from "./Navbar/Navbardata";
import MessageForm from "./MessageForm";
function ContactUs() {
  const { address, email, phone } = contactUsInfo;
  return (
    <div className="relative text-[#ffffff] px-[25px] pt-[6.8rem] pb-[7.5rem] contactUs md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <div className="bg-[#000000] opacity-60 absolute top-0 left-0 h-full w-full"></div>
      <div className="bg-[#39b54a] absolute h-[8.4rem] w-[2px] top-[-60px] left-[50%]"></div>{" "}
      <h3 className="text-[#39b54a] text-[1rem] text-center font-bold tracking-[0.25rem] relative">
        CONTACT US
      </h3>
      <h2 className="text-[1.767rem] xxxs:text-[2.0625rem] s:text-[2.5rem] mmd:text-[2.75rem] lg:text-[3.25rem] text-center font-[600] mb-[18px] relative">
        Reach out for a new project or just say hello
      </h2>
      <div className="Contact-ctn md:flex md:gap-x-[10px] relative">
        <div className=" md:basis-[50%] mx-auto">
          <h3 className="text-center sm:text-left text-[15.058px]">
            SEND US A MESSAGE
          </h3>
          <MessageForm />
        </div>
        <div className="text-[1rem] md:basis-[40%] mx-auto w-[90%]">
          <div className="mb-[30px]">
            <h4 className="text-[#39b54a] mb-[15px] font-[700] text-[15.058px] text-center md:text-left">
              {address.name}
            </h4>
            <h4 className="W-wrap text-center md:text-left text-[14.117px]">
              {address.info}
            </h4>
          </div>
          <div className="mb-[30px]">
            <h4 className="text-[#39b54a] mb-[15px] font-[700] text-[15.058px] text-center md:text-left">
              {email.name}
            </h4>
            <h4 className="W-wrap text-center md:text-left text-[14.117px]">
              {email.info.map((item, key) => (
                <span className="block" key={key}>
                  {item}
                </span>
              ))}
            </h4>
          </div>
          <div className="mb-[30px] mx-auto md:mx-[initial] w-[90%]">
            <h4 className="text-[#39b54a] mb-[15px] text-center md:text-left font-[700] text-[15.058px]">
              {phone.name}
            </h4>
            <div className="">
              {phone.info.map((item, key) => (
                <h3
                  key={key}
                  className="text-center md:text-left text-[14.117px]"
                >
                  <span className="">{item.name}</span>
                  <span className="">{item.number}</span>
                </h3>
              ))}
            </div>
          </div>
          <ul className="Flex gap-x-4 mx-auto md:mx-[initial] w-[165px] sm:w-[31%]">
            {links.map((item, key) => (
              <li key={key} className="">
                <a
                  href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                  className=""
                >
                  <item.title size={20} className="text-[#ffffff]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
