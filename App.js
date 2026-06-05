import { useEffect, useState } from "react";
import { PaperProvider } from "react-native-paper";

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

  return (
    <PaperProvider>
      {isSplashVisible ? <SplashScreen /> : <AppNavigator />}
    </PaperProvider>
  );
}