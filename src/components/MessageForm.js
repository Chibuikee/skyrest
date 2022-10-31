import React, { useState } from "react";

function MessageForm() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <form className="w-full">
      <input
        className="mt-[2px] block border-solid border border-[red] w-full"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="mt-[2px] block border-solid border border-[red] w-full"
        type="email"
        name="email"
        placeholder="Your E-mail"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        className="mt-[2px] block border-solid border border-[red] w-full"
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <input
        className="mt-[2px] block border-solid border border-[red] w-full"
        type=""
        placeholder="Your Message"
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <button className="bg-black text-white py-2 px-8 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
}

export default MessageForm;
