import { useState, useEffect } from "react";
import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
// import navigation from "./assets/navigation.png"
import {
  About,
  Service,
  Work,
  Home,
  Contact,
  Nav,
  Footer,
} from "./components/index";
import { Card } from "antd";
import Cursor from "./components/Cursor";

function App() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Cursor />
      <div className=" w-full overflow-hidden bg-img app">
        {/* <div className="fixed w-full"> */}
        <div
          className={`active ${
            show && "-translate-y-40"
          } delay-500 duration-500 fixed w-full z-50`}
        >
          <div className="w-full flex z-40 justify-center relative backdrop-blur-md bg-white bg-opacity-80 ">
            <Nav />
          </div>
        </div>

        <div className="">
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Work" element={<Work />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Card" element={<Card />} />
            </Routes>
          </div>
        </div>

        <div className="">
          <div className="">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
