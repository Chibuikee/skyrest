import React from "react";
import { contactUsInfo } from "./Data";
import { links } from "./Navbar/Navbardata";
import MessageForm from "./MessageForm";
function ContactUs() {
  const { address, email, phone } = contactUsInfo;
  return (
    <div className="relative text-[#ffffff] pt-[3.8rem] pb-[7.5rem] contactUs md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <div className="bg-[#000000] opacity-60 absolute top-0 left-0 h-full w-full"></div>
      <h3 className="text-[#39b54a] text-[1rem] text-center font-bold tracking-[0.25rem] relative">
        CONTACT US
      </h3>
      <h2 className="text-[2.75rem] text-center font-[600] mb-[18px] relative">
        Reach out for a new project or just say hello
      </h2>

      <div className="Contact-ctn md:flex md:gap-x-[10px] relative">
        <div className="w-[70%] md:basis-[50%] mx-auto">
          <h3 className="text-center sm:text-left">SEND US A MESSAGE</h3>
          <MessageForm />
        </div>
        <div className="text-[1rem] md:basis-[40%] ">
          <div className="mb-[30px]">
            <h4 className="text-[#39b54a] mb-[15px]">{address.name}</h4>
            <h4 className="W-wrap">{address.info}</h4>
          </div>
          <div className="mb-[30px]">
            <h4 className="text-[#39b54a] mb-[15px]">{email.name}</h4>
            <h4 className="W-wrap">
              {email.info.map((item, key) => (
                <span key={key}>{item}</span>
              ))}
            </h4>
          </div>
          <div className="mb-[30px]">
            <h4 className="text-[#39b54a] mb-[15px]">{phone.name}</h4>
            <div>
              {phone.info.map((item, key) => (
                <div key={key}>
                  <span>{item.name}</span>
                  <span>{item.number}</span>
                </div>
              ))}
            </div>
          </div>
          <ul className="Flex gap-x-4">
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
