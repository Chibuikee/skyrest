import React, { useState } from "react";

function MessageForm() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <form className="">
      <input
        className="bg-[transparent] mt-[2px] py-[15px] block border-solid border-b border-[rgba(255,255,255,0.07)] w-full"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="bg-[transparent] mt-[2px] py-[15px] block border-solid border-b border-[rgba(255,255,255,0.07)] w-full"
        type="email"
        name="email"
        placeholder="Your E-mail"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        className="bg-[transparent] mt-[2px] py-[15px] block border-solid border-b border-[rgba(255,255,255,0.07)] w-full"
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <input
        className="bg-[transparent] mt-[2px] py-[15px] block border-solid border-b border-[rgba(255,255,255,0.07)] w-full"
        type=""
        placeholder="Your Message"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />

      <button className="tracking-[2.82353px] w-full sm:w-auto h-[50.8px] bg-[rgb(57,181,74)] text-[#FFFF] text-[12px] py-2 px-[20px] focus:outline-none">
        Submit
      </button>
    </form>
  );
}

export default MessageForm;
