import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import mailBg from "../assets/mailBg.jpg";
import mail from "../assets/mail.png";
import "../index.css";
import { motion } from "framer-motion";

const Mail = () => {
  const [notiShow, setNotiShow] = useState(false);
  const variant = {
   open: {opacity: 1, y:-140},
   close: { opacity: 0, y:0 }

  }
  const noti = () => {
   setNotiShow(true);

    setTimeout(()=>{
      setNotiShow(false)
    },1000)
  };
  // const inRef = useRef();
  // console.log(inRef);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_deeesqg",
        "template_gx98y0t",
        form.current,
        "ntG_Jpc70knB4szwe"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("ok");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );
  };
  return (
    <div>
      <div className="w-[90%] sm:w-[80%] bg-white bg-opacity-30 h-[400px] sm:h-[450px] md:h-[500px] mx-auto my-14 border border-white grid md:grid-cols-2 rounded-3xl">
        <div className=" hidden md:flex justify-center items-center">
          <img src={mail} alt="" className="p-16" />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mx-auto text-primary ">
            Get in Touch
          </h1>
          <form
            lang="en"
            ref={form}
            onSubmit={sendEmail}
            className="w-[80%] lg:w-[80%] mt-8 sm:mt-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4">
              <input
                // ref={inRef}
                name="first_name"
                type="text"
                className="rounded-md placeholder:text-primary/40 bg-primary/20 outline-none border-none py-2 ps-3 focus:border focus:ring-2 focus:ring-primary"
                placeholder="First Name"
              />
              <input
                // ref={inRef}
                name="last_name"
                type="text"
                className="rounded-md placeholder:text-primary/40 bg-primary/20 outline-none border-none py-2 ps-3 focus:border focus:ring-2 focus:ring-primary"
                placeholder="Last Name"
              />
            </div>
            <input
              name="user_email"
              type="email"
              className="rounded-md w-full placeholder:text-primary/40 bg-primary/20 mt-3 outline-none border-none py-2 ps-3 focus:border focus:ring-2 focus:ring-primary"
              placeholder="Email address "
            />
            <textarea
              // id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full placeholder:text-primary/40 bg-primary/20 mt-3 text-gray-900 bg-gray-50 outline-none rounded-lg border focus:ring-2 focus:ring-primary   border-gray-300 "
              placeholder="Leave a comment..."
            ></textarea>
            <motion.button
              onClick={()=>noti()}
              whileTap={{ backgroundColor: "#3B2A8290" }}
              type="submit"
              value="Send"
              className="text-semibold text-lg w-full py-2 text-white bg-primary   mt-3 rounded-lg"
            >
              Send Message
            </motion.button>
          </form>
          {/* noti  */}
          {notiShow && (
            <motion.div
            variants={variant}
            animate={notiShow?"open":"close"}
            className="bg-red-300 w-[300px] me-4 rounded-md fixed right-0 top-40 z-50  h-20"></motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mail;
