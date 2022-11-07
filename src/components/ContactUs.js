import React from "react";
import { contactUsInfo } from "./Data";
import { links } from "./Navbar/Navbardata";
import MessageForm from "./MessageForm";
function ContactUs() {
  const { address, email, phone } = contactUsInfo;
  return (
    <div className="relative text-[#ffffff] pt-[9.375rem] pb-[7.5rem] contactUs md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
      <div className="bg-[#000000] opacity-60 absolute top-0 left-0 h-full w-full"></div>
      <h3 className="text-[#39b54a] text-[1rem] text-center font-bold tracking-[0.25rem] relative">
        CONTACT US
      </h3>
      <h2 className="text-[3rem] text-center font-[600] mb-[18px] relative">
        Reach out for a new project or just say hello
      </h2>

      <div className="Contact-ctn lg:Flex relative">
        <MessageForm />
        <div>
          <div>
            <h4>{address.name}</h4>
            <h4 className="W-wrap">{address.info}</h4>
          </div>
          <div>
            <h4>{email.name}</h4>
            <h4 className="W-wrap">
              {email.info.map((item, key) => (
                <span key={key}>{item}</span>
              ))}
            </h4>
          </div>
          <div>
            <h4>{phone.name}</h4>
            <div>
              {phone.info.map((item, key) => (
                <div key={key}>
                  <span>{item.name}</span>
                  <span>{item.number}</span>
                </div>
              ))}
            </div>
          </div>
          <ul className="Flex">
            {links.map((item, key) => (
              <li key={key} className="">
                <a
                  href="https://www.linkedin.com/in/chibuike-ewenike-960599172/"
                  className=""
                >
                  <item.title className="nav-svg" />
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
