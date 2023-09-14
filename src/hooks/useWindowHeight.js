import { useLayoutEffect, useState } from "react";

export default function useWindowHeight() {
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    function updateWindowHeight() {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', updateWindowHeight);
    updateWindowHeight();
    return () => window.removeEventListener('resize', updateWindowHeight);
  }, []);
  return height;
}