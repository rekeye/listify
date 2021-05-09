import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: viewWidth, innerHeight: viewHeight } = window;
  return {
    viewHeight,
    viewWidth,
  };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
