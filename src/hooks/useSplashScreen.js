import { useState, useEffect } from "react";

export function useSplashScreen(zoomDelay = 1200, hideDelay = 2000) {
  const [splashState, setSplashState] = useState("visible");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      setSplashState("zooming");
    }, zoomDelay);

    const hideTimer = setTimeout(() => {
      setSplashState("hidden");
      setIsMounted(true);
    }, hideDelay);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(hideTimer);
    };
  }, [zoomDelay, hideDelay]);

  return { splashState, isMounted };
}
