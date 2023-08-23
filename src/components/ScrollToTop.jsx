import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const delay = 10; // Adjust the delay as needed
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, delay);

    return () => clearTimeout(timer); // Clear the timeout on cleanup
  }, [pathname]);

  return null;
}

export default ScrollToTop;
