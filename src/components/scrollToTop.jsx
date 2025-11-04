import React, 
{ useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, [pathname]);

  return null;
}