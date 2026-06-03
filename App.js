import { useEffect, useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return <AppNavigator />;
}