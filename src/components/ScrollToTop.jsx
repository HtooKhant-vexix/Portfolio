import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); // Debounce for 50ms
    return () => clearTimeout(timer);
  }, [pathname]);
}

export default ScrollToTop;
