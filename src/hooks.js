import { useEffect, useState } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => {
    // console.log("nav intersection observer!", entry);
    setIntersecting(entry.isIntersecting);
  });
  // console.log(ref, "checking ref");
  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
}
