import { useState, useEffect } from "react";
import React, { lazy, Suspense } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
// import navigation from "./assets/navigation.png"
import { Nav } from "./components/index";
import { Card } from "antd";
import ScrollToTop from "./components/ScrollToTop";
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

const About = lazy(() => import("./components/about/About"));
const Service = lazy(() => import("./components/servicePage/Service"));
const Works = lazy(() => import("./components/Work/Works"));
const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <div className=" w-full overflow-hidden bg-img app">
        {/* <div className="fixed w-full"> */}
        <Wrapper>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </Wrapper>
      </div>
    </>
  );
}

export default App;
