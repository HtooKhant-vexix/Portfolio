import React, { useEffect, useRef } from "react";
import pt from "../assets/pointer.png";
import cstyle from "./cursor.module.css";

const Cursor = () => {
  const cs = useRef(null);

  const handleMouseLeave = () => {
    console.log("Mouse left the document.");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cs.current.clientWidth / 2;
      const mouseY = clientY - cs.current.clientHeight / 2;
      cs.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <img src={pt} ref={cs} alt="" className={cstyle.cursor} />;
};

export default Cursor;
