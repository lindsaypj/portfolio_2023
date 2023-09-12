import { useLayoutEffect, useState } from "react";

export default function useScrollPos() {
  const [yPos, setYPos] = useState(0);
  useLayoutEffect(() => {
    function updateScrollPos() {
      setYPos(window.scrollY);
    }
    window.addEventListener('scroll', updateScrollPos);
    updateScrollPos();
    return () => window.removeEventListener('scroll', updateScrollPos);
  }, []);
  return yPos;
}