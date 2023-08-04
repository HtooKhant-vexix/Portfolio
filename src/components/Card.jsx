import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import "../index.css";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="p-9">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="w-[400px] group hover:shadow-primary/50 hover:shadow-2xl duration-100 relative rounded-3xl p-3 z-40  bg-white"
      >
        <div className="relative group py-1 z-40 px-1">
          <img
            className="object-cover group-hover:z-50 z-40 rounded-t-2xl w-full object-center h-[200px]"
            src=" data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsA2wMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQMEBgECB//EADMQAAEDAgQEBAQGAwEAAAAAAAEAAgMEERIUIWEFMUFRE1KBkQYicaEjMkJi0fAVosFy/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIBEBAAICAwEAAwEAAAAAAAAAAAESAhEDIVExEyJBBP/aAAwDAQACEQMRAD8AgZfuAmX/AGj2VvKbJlNl9W7dUTL7D2TL7D2VvKbJlNkuVRMvsPZMvsPZW8psmUPZLpVFNOOjQPReZbYeyt5Q9kymyXWqJl9h7Jl/2g+it5TZe5TZLlUPL7D2TLbD2VvKbJkz2S6VRMvsPZMt+0eyuCjPZDSEfpS5VDy+w9ky+w9lcyZ7Jk0uVQ8vsPZMv+0D0VvKHsvcpslyqHlx5R7Jl9h7K5lNl5lNkutUTL92g+iZfYeyt5TZMpslyqJl9h7Jl9h7K3lNkymyXKomX2Hsgpx1aD6K3lNkyh7JdKomX7AeyZbYeyt5Q9kymyXKuiyY7Jkx2VLCmFeK71UTcmOyZMdlSsmFLlE3JjsmU2VKyWS5RNymyZMdlSwphHdLlE3JjsmT2VLCO4TC3ul5KJuTHZeijv0VLCFljjBUnOVjjS20Gy+/8dsrTImrL4TVieWXWOFz54fbovg0Vui6F8TVryRhWOSZSeHSHk9l9Mo2k2dpobfVUnNHZfOFavLlRNNFbSyZMdlSwphVuUTcmOyZMdlSwphS5RNyY7Jkx2VGwXuFLlE3JjsmU2VLCmFLlE3JjsmTHZUsKYR3CXKNHNHzL3NHzKfjGyYgs6ehQzR8y8zJ8y0MaYk0N/MnzJmT5loYx3TEmhv5k+ZeZndaBeBzIH1TGOhBSqdN/M7r0VO6lSVlPHhL5Wi/qshnjY1rnvaASACTYEnkEqbhUZUXPNfUHFI3cRNCI3+IGY8VvlU4TNZh0viNhZbzGseHc2ue3DibofdZyjUOvHG56WonOe4Na0kk2AHVV4+EvLAZJmsJ6Wuo/CS2GaPW+FtgXHmvPiDjsUNdwyme0PbJUfiXJGEaAcv/AFf0K4Jz/ktrBt11NLSOAfYtPJw6qfLIbKnxCdk1D+EQG6Fht91AnAL7uN2jVvcH+FY+unFvLD9vr5lqCDzWE1Vjq7msM7wDYnUqJ8QVMMFPTmaURYqqJrXXsR82tvS/pdd4hwy1DoM0e6Zo+ZTmPdgHiCzuqNmY42a5pPYFWqdKOaPmXuaPmU/GNkxBNKoZr9y8zJ8y0MYTGmhv5k+ZMyfMtDGO6Yk0N/NHzLzM7rQMjRzcB6pjCVRzzamoDQGzvwgWGqyvrqhzWgODbdQOa1WtwiwXq9WoeSMp9fbppnuDnSuJHLVZpK2Z8eHFhPVzbgrWRWsEZT6zxVc8d7SF1/OboK6cSgmS/XDYW+iwL5t+JfpZSsFp9Za2pdOcUhs0A4WqFxDjclHTOhicRO/UAHQDuVZc0OGoUnjXDaZ8bqyQuaYm3cL6OA6bFJjrpJmXxwLiYrAYKgjxxqDoA8fytL4jrnuqo6cucRTm7ddBoLeoN/dIzTcGiZOx3i1krPljxaRg872UiqqH1VRJPJbG83IHIbLEz0m3bU/F5eJ08MoeA5jr4WkXbY6Eq3T/ABG3xjSeJGahrcRHW30X55wCtjo6l4luGyiwI6Hos9PQxOrMUtXNHJiMmO4Bw/zySYjKHTDlyxnp+q0XFJH4ZDLYNOvRc5UcYmqJXvlEUhsGhzm3NhyUys4m10PgQSOcHfnI6rUZNoVznieuOff13HDuM1NTSRse/E4E/lNrBoaBp6r2fizmxOa5uKS3PouHiqvDkBJIbyNnEaeizsqmwuL8RcHcvnPLXurjxQxl/omI1ClLXzsqInPc57WvxEF3Lv8AZct8TcX/AMtM2Nro2wRDxYzfXVurTuqreIxiB8tURGW/f6Liza9x91vKIjp5Zzmf67Tg/FpK+mDJJn+KA4ubiPyi+g9rLZilw1BDCWOHIhcnwOuZQ1J8VpwSANLh+nXmrlbxSlp6dk9ODP4jrNw6DTnqtRMM7ldbWVDXYvFLh2PJeurah7sQlwjoAAtOGVs1OyRmIB4uA4EH7r6ZoLdlaw1afWeGomikLw8m/MG5uvqarnldfGWaWswkBYESsFp9bAragR4Md7cnEXK+oq2Zgdid4lxpi6LVRWsFp9YayV1i+5dITqtmKomMbSKh7RbljOn3WIsaTcjVPDb2V1CblrcKro+IU/iM+WQaSR+U/wALcsuBpqqekk8SmlMb7WuADcequUfxK5lG8VTTJUN/IQAA/wCvZYjL1FmurYKGISVDiAThAbzJXLT8aqn12ZicWADC1nMAbjqVr8SrpeIVRml0AGFjAbho7LVUnKUdLQ8Znl4bKGR+LWRC9j+pvV1utuqy8Dl4iJpaeuilc0fN4jv0ntfkuZp5n007JojZ7DcK/wDD/GY2MlgrXtYBeRjrWG4/hIntYdCFF+JeIMhpzRts+SUfNpfA2/P6qPxniz+JSYW3ZTtPys6u3KmplkSIiLCCz0s/hTYn6h2hPZYEVidC1TzsnvgPLoea2Gl1tApPDajwpPDs35+V+6rY5ACfC/2/v9K6ROxqV9SYGhrfzuGh7LDT8Scxn413lvL9y26wNdE500TRg1Di7l/f+qGTc3ta/RZmdD7lmklJL3OIJvYnQfRfCIsAtvh9Y6llaHEmEva6RnO9jzG61EV2P0NhbJG2SNwcxwuHA6EI6zWlziA0cyVxFJxSto2hkE1owb4C0EfcXVmp+JmmBogg/Ecw4sXJh/6txl0r6n+I6fLvNMx/jXIaHDT63Uan4vXU4sJi8F+M4hcnuPoVonU3PNFm0pt3tHUR1lMyeG5a4a7HqDusy4Wj4hVULZBSy4MdtcN7HuN10g+IaccObO5odUfl8EGxxd/otxkquLcybDfRQp/iSKOZ7IoXyMabB4da652rqZaud01Q/G89bWsOw7LEs2NiIiwgiIgIiICIiAiIgIiIC2GV1QxzyH3LrakLXRUbVbWuqQxtsLWjUdytVEQERFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z "
            alt="kcard-img"
          />
          <div className=" w-[80px] h-[80px] bg-red-800 z-40 bottom-[-27px] right-8 rounded-full absolute"></div>
        </div>
        <div className="px-3 bg-white z-30 relative pb-3 pt-7">
          <h3 className=" text-2xl text-primary  w-[80%] pb-2 font-semibold">
            hellokjdl ajlajlsdfjlasjlfjsdk
          </h3>
          <h3 className=" text-primary text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur iusto hic totam cumque mollitia culpa perferendis
            veniam animi ex
          </h3>
        </div>
        <div className="absolute w-full  inset-x-0 group-hover:translate-y-0 duration-300 -translate-y-24 bg-white pb-5 rounded-b-3xl pt-32 bottom-[-80px] z-0">
          <hr className="my-5 w-[90%] mx-auto h-[2px] bg-primary bg-opacity-50" />
          <div className=" mt-3 justify-between w-full px-8 mx-1 flex">
            <div className=" text-primary  flex items-center">
              <AiFillGithub className="hover:text-secondary my-auto text-3xl" />
              <FaLink className="hover:text-secondary duration-100 my-auto ms-8 text-2xl" />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-lg ms-auto p-2 px-5 text-primary border hover:shadow-primary/50 hover:shadow-xl border-primary hover:bg-primary hover:text-white duration-100 rounded-lg"
            >
              View Detail
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
