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
import ScrollToTop from "./components/ScrollToTop";
import Works from "./components/Work/Works";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    //  window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return children;
};

function App() {

  return (
    <>
      <div className=" w-full overflow-hidden bg-img app">
        {/* <div className="fixed w-full"> */}
        <Wrapper>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Service" element={<Service />} />
            <Route path="Work" element={<Works />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Card" element={<Card />} />
          </Routes>
          <Footer />
        </Wrapper>
      </div>
    </>
  );
}

export default App;
