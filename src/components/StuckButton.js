import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add scroll event listener to update state
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the value (e.g., 100) to control when the button appears
      setShowButton(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800 text-white h-8 w-8  bg-primary hover:bg-font duration-300 p-2 rounded-full"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
