import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (
  className: string = "",
  threshold: number = 0,
): [boolean, React.RefObject<HTMLDivElement>] => {
  // State variables to track intersection and rendering state
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);
  const [count, setCount] = useState(0);

  // Ref to track the element to observe
  const ref = useRef<HTMLDivElement>(null);

  // Effect to set up the IntersectionObserver
  useEffect(() => {
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Log the intersection entry
        console.log({ entry });

        // Update the state based on intersection
        setIsIntersecting(entry.isIntersecting);

        // Check if the element has rendered and update state accordingly
        if (entry.isIntersecting && !hasRendered) {
          if (count > 1) setHasRendered(true);
          else setCount((prevCount) => prevCount + 1);
        }
      },
      { threshold }, // Set the threshold for intersection
    );

    const element = ref.current;

    // Observe the element with the IntersectionObserver
    if (element) {
      observer.observe(element);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, hasRendered, count]);

  // Effect to add a CSS class to the observed element
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add(className);
    }
  }, [className]);

  // Return the intersection status and the ref to the observed element
  return [isIntersecting || hasRendered, ref];
};

export default useIntersectionObserver;
