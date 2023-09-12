import { useLayoutEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWindowWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);
  return width;
}