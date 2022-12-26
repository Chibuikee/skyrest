import React from "react";
import { HiOutlineMail } from "react-icons/hi";
function Footer() {
  return (
    <section className="">
      {/* <div className=" bg-[#111111] text-[rgba(255,255,255,0.3)] w-[90%] mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]"> */}
      <div className="pb-[60px] pt-[90px] px-[25px] bg-[#111111] text-[rgba(255,255,255,0.3)] mx-auto">
        <div className="md:flex footer-text-ctn md:px-[5rem] md:w-[100%] w-[94%] mx-auto">
          <div>
            <h1
              translate="no"
              className="text-center sm:text-left mb-[3.6rem] text-[1.6rem] text-[#ffffff] font-extrabold "
            >
              SKYREST
            </h1>
            <p className="footer-text mb-[40px] sm:mb-[initial]">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
          <div>
            <h4 className="mb-[3.6rem] text-[#FFFF] text-[1.6rem]">
              Get Notified
            </h4>
            <p className="footer-text mx-auto sm:mx-[initial] ">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
            <div className="sm:flex justify-between">
              <div className="Flex form-ctn">
                <HiOutlineMail
                  size={24}
                  id="email-icon"
                  className="text-[#FFFF] hidden sm:block ml-5"
                />
                <input
                  placeholder="Email Address"
                  className="footer-email mx-auto sm:mx-[initial]"
                />
              </div>
              <button className="w-full sm:w-auto tracking-[2.82353px] px-[20px] h-[50.8px] bg-[rgb(57,181,74)] text-[#FFFF] text-[12px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex copyright">
          <h5>© Copyright Skyrest 2022</h5>
          <span translate="no" className="copyright-span hidden sm:block">
            |
          </span>
          <h5 className="mt-3 sm:mt-[initial]">
            Site Design by <a href="/">Skyrest</a>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Footer;
