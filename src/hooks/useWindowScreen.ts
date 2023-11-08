import { useEffect, useState } from "react";

// We define an interface to hold the width and height of the window screen.
interface WindowScreen {
  width: number;
  height: number;
}

// Create a custom hook called useWindowScreen.
const useWindowScreen = (): WindowScreen => {
  // Create a state variable and a setter function named windowScreen.
  // Initialize them with the initial window dimensions.
  const [windowScreen, setWindowScreen] = useState<WindowScreen>(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      return {
        width: 0, // Varsayılan bir değer ayarlayabilirsiniz.
        height: 0, // Varsayılan bir değer ayarlayabilirsiniz.
      };
    }
  });

  // This function will be called when window dimensions change and will update the state.
  const updateWindowDimensions = () => {
    setWindowScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Start listening to window dimensions when the component is initially rendered.
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    // Remove the event listener when the component needs to be cleaned up.
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return windowScreen;
};

export default useWindowScreen;
