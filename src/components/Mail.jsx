import React from "react";
import mail from "../assets/mail.png";
import mailBg from "../assets/mailBg.jpg";
import '../index.css'
const Mail = () => {
  return (
    <div>
      <div className="w-[80%] bg-white bg-opacity-30 h-[500px] mx-auto my-14 border border-white grid grid-cols-2 rounded-3xl">
        <div className=" flex justify-center items-center">
          <img src={mail} alt="" className="p-16 hidden md:flex" />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mx-auto text-primary ">
            Get in Touch
          </h1>
          <form className="w-[80%] lg:w-[80%] mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <input
                type="text"
                className="rounded-md placeholder:text-primary/40 bg-primary/20 outline-none border-none py-2 ps-3 focus:border focus:ring-2 focus:ring-primary"
                placeholder="first Name"
              />
              <input
                type="text"
                className="rounded-md placeholder:text-primary/40 bg-primary/20 outline-none border-none py-2 ps-3 focus:border focus:ring-2 focus:ring-primary"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              className="rounded-md w-full placeholder:text-primary/40 bg-primary/20 mt-3 outline-none border-none py-2 ps-3 focus:border focus:ring-2 focus:ring-primary"
              placeholder="Email address "
            />
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full placeholder:text-primary/40 bg-primary/20 mt-3 text-sm text-gray-900 bg-gray-50 outline-none rounded-lg border focus:ring-2 focus:ring-primary   border-gray-300 "
              placeholder="Leave a comment..."
            ></textarea>
            <button className="text-semibold text-lg w-full py-2 text-white bg-primary   mt-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mail;
