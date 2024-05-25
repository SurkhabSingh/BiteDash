import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact Us</h1>
      <form>
        <input
          placeholder="Name"
          className="border border-black p-2 m-2"
          type="text"
        />
        <input
          placeholder="Message"
          className="border border-black p-2 m-2"
          type="text"
        />
        <button className="border border-black p-2 m-2 rounded-lg bg-slate-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
