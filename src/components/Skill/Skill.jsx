import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import sData from "./skillData";

const Skill = () => {
  return (
    <div className=" bg-primary/30 mt-[-200px] sm:mt-[-90px]  text-center">
      <div className="md:p-8 py-5 px-20 md:px-36 rounded-full bg-white text-secondary shadow-2xl shadow-secondary/20 inline-block text-3xl md:text-5xl font-poppins font-semibold mx-auto mt-[-120px]">
        SKILLS
      </div>
      <div className="w-[98%] xs:w-[90%] md:w-[65%] rounded-3xl  bg-opacity-30 mt-7 flex justify-center items-center bg-white border-white border mx-auto py-5 sm:py-10 xs:h-[700px] md:h-[760px]">
        <div className="w-[95%] md:w-[90%] text-primary/90 rounded-3xl sm:gap-y-12 sm:px-4 py-6 px-5 sm:py-16 items-center grid grid-cols-3 md:gap-0 gap-3 sm:grid-cols-4 bg-opacity-30  bg-white border-white border sm:h-[660px]  xs:h-[600px]">
          {sData.map(({id,title,icon}) => (
            <div key={id} className=" text-center hover:shadow-2xl duration-150 hover:text-secondary  hover:shadow-secondary/20 bg-white w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] flex flex-col justify-center rounded-xl text-[50px] sm:text-[90px] mx-auto">
              {icon}
              <div className="sm:text-xl text-base font-semibold mt-1  mx-auto">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
