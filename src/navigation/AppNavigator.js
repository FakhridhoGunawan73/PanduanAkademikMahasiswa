import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import CourseDetailScreen from "../screens/CourseDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CourseDetail"
          component={CourseDetailScreen}
          options={{ title: "Detail Mata Kuliah" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}