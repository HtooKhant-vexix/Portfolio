import React from "react";
import { useEffect, useRef } from "react";
import pt from "../assets/pointer.png";

const Cursor = () => {
  const pointer = {
    cursor: "../assets/pointer.png",
  };
  const cs = useRef(null);
  const cursorVisible = useRef(true);
  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);
  const requestRef = useRef(null);
  const toggleCursor = () => {
    if (cursorVisible.current) {
      cs.current.style.opacity = 1;
    } else {
      cs.current.style.opacity = 0;
    }
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursor();
  };
  // const mouseLeaveEvent = () => {
  //   cursorVisible.current = false;
  //   toggleCursor();
  // };
  const mouseLeaveEvent = () => {
    console.log("leave")
  };
 
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current)
    };
  }, []);

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursor();
    endX.current = e.pageX;
    endY.current = e.pageY;
    cs.current.style.top = endY.current - 20 + "px";
    cs.current.style.left = endX.current - 20 + "px";
  };
  return (
    <img
      src={pt}
      ref={cs}
      alt=""
      className="z-[99] opacity-0 h w-8 h-8  pointer-events-none absolute  overflow-hidden top-[50%] right-[50%] translate-x-[50%] translate-y-[50%] "
    />
  );
};

export default Cursor;

