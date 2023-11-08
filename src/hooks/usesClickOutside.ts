import { useEffect } from "react";

type RefType = HTMLElement | null;

function useClickOutside(ref: RefType, callback: () => void) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.button === 0 && ref && !ref.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);

  return;
}

export default useClickOutside;
