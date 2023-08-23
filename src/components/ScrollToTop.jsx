import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef("");

  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      window.location.reload();
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
