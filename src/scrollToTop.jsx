import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation se hume pata chalta hai ki URL change hua hai ya nahi
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname change hoga, scroll top par chala jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ye component kuch dikhayega nahi, sirf kaam karega
};

export default ScrollToTop;