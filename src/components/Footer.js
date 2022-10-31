import React from "react";
import { HiOutlineMail } from "react-icons/hi";
function Footer() {
  return (
    <section>
      <div className="Flex footer">
        <div>
          <h1>SKYREST</h1>
          <p>
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </p>
        </div>
        <div>
          <h4>Get Notified</h4>
          <p>
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
            aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
            iusto porro.
          </p>
          <div>
            <div className="Flex">
              <HiOutlineMail />
              <input placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Flex">
        <h5>© Copyright Skyrest 2022</h5>|
        <h5>
          Site Design by <a href="">Skyrest</a>
        </h5>
      </div>
    </section>
  );
}

export default Footer;
