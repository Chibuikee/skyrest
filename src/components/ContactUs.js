import React from "react";
import { contactUsInfo } from "./Data";
import { links } from "./Navbar/Navbardata";
import MessageForm from "./MessageForm";
function ContactUs() {
  const { address, email, phone } = contactUsInfo;
  return (
    <div className="contactUs">
      <h3>CONTACT US</h3>
      <h1>Reach out for a new project or just say hello</h1>

      <div className="Contact-ctn Flex">
        <MessageForm />
        <div>
          <div>
            <h4>{address.name}</h4>
            <h4>{address.info}</h4>
          </div>
          <div>
            <h4>{email.name}</h4>
            <h4>
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
