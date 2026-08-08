import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route change; the browser otherwise keeps it. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
