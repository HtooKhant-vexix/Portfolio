import React from "react";
import Landing from "./Landing";
import ScrollToTop from "../ScrollToTop";

const Service = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <div className="">
          <Landing />
        </div>
        <div className="mt-16">
          <div className=" text-center mb-10 text-5xl text-primary font-bold ">
            WHAT I DO
          </div>
          <div className="grid w-[90%] gap-3 mx-auto bg-red-300 h-[300px] grid-cols-2">
            <div className="bg-red-400 p-10 flex flex-col justify-center items-center">
              <div className="bg-white p-10 text-center rounded-xl">
                <div className="">
                  
                </div>
                <div className="">
                  <div className="">Responsive Design</div>
                  <div className="">
                    Responsiveness of a website plays an important role at user
                    experience. I ensure my design is looking good on any kind
                    of devices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
