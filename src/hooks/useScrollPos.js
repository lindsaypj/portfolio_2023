import { useLayoutEffect, useState } from "react";

export default function useScrollPos() {
  const [yPos, setYPos] = useState(0);
  useLayoutEffect(() => {
    function updateScrollPos() {
      setYPos(window.scrollY);
    }
    window.addEventListener('scroll', updateScrollPos);
    window.addEventListener('resize', updateScrollPos);
    updateScrollPos();
    
    return () => {
      window.removeEventListener('scroll', updateScrollPos);
      window.removeEventListener('resize', updateScrollPos);
    }
  }, []);
  return yPos;
}