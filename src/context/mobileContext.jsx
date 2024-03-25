// mobileContext.js

import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Function to detect if the user is on a mobile device
  const detectMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Function to open navigation
  const openNav = () => {
    setNavOpen(true);
  };

  // Function to close navigation
  const closeNav = () => {
    setNavOpen(false);
  };

  // Detect mobile on component mount
  useEffect(() => {
    detectMobile();
    // Re-detect if the window size changes
    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, navOpen, openNav, closeNav }}>
      {children}
    </MobileContext.Provider>
  );
};
// Custom hook to use the mobile context
export const useMobile = () => {
  return useContext(MobileContext);
};

MobileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
