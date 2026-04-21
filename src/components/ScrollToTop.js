import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      setTimeout(() => {
        const delayedEl = document.querySelector(hash);
        if (delayedEl) {
          delayedEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}



export default ScrollToTop;