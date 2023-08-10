import React, { useEffect } from "react";
import pt from "../assets/pointer.png";
import { useRef } from "react";
import "../index.css";

const Service = () => {
  const cs = useRef(null);
  // const cursorVisible = useRef(true);
  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x =useRef(0);
  const _y =useRef(0);

  useEffect(()=>{
    document.addEventListener('mousemove',mouseMoveEvent)
  })

const mouseMoveEvent = (e) => {
  endX.current = e.pageX;
  endY.current = e.pageY;
  // cursorVisible.current =true;
  cs.current.style.top = endY.current + "px";
  cs.current.style.left = endX.current + "px";

}

  return (
    <img
      src={pt}
      ref={cs}
      alt=""
      className="h w-8 h-8 pointer-events-none absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%] "
    />
  );
};

export default Service;
