import React from "react";
import { HiOutlineMail } from "react-icons/hi";
function Footer() {
  return (
    <section className="">
      <div className="footer">
        <div className="footer-text-ctn md:flex md:px-[10rem] md:w-[100%] w-[80%] mx-auto">
          <div>
            <h1 className="">SKYREST</h1>
            <p className="footer-text">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </p>
          </div>
          <div>
            <h4>Get Notified</h4>
            <p className="footer-text">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </p>
            <div id="form">
              <div className="Flex form-ctn">
                <HiOutlineMail size={24} id="email-icon" />
                <input placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Flex copyright">
          <h5>© Copyright Skyrest 2022</h5> <span id="copyright-span">|</span>
          <h5>
            Site Design by <a href="">Skyrest</a>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Footer;
