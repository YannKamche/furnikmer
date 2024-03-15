import React, { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    function toTop() {
      const top = document.querySelector(".top");

      const handleScroll = () => {
        if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
          top.style.display = "block";
        } else {
          top.style.display = "none";
        }
      };

      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

      window.addEventListener("scroll", handleScroll);
      top.addEventListener("click", scrollToTop);

      // Clean up the event listeners when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        top.removeEventListener("click", scrollToTop);
      };
    }

    toTop();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="top">
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default Scroll;
