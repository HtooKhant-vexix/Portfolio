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
          <Suspense
            fallback={
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.85)",
                  zIndex: 9999,
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin mb-4"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#6366F1"
                    strokeWidth="4"
                    strokeDasharray="31.4 31.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  style={{
                    color: "#6366F1",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                >
                  Loading...
                </span>
              </div>
            }
          >
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
