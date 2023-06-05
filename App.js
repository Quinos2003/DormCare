const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import FrameScreen15 from "./screens/FrameScreen15";
import InviteFriends from "./screens/InviteFriends";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Language from "./screens/Language";
import NotificationsSettings from "./screens/NotificationsSettings";
import FrameScreen from "./screens/FrameScreen";
import FrameScreen1 from "./screens/FrameScreen1";
import FrameScreen2 from "./screens/FrameScreen2";
import FrameScreen3 from "./screens/FrameScreen3";
import FrameScreen4 from "./screens/FrameScreen4";
import FrameScreen5 from "./screens/FrameScreen5";
import FrameScreen6 from "./screens/FrameScreen6";
import FrameScreen7 from "./screens/FrameScreen7";
import FrameScreen8 from "./screens/FrameScreen8";
import FrameScreen9 from "./screens/FrameScreen9";
import FrameScreen10 from "./screens/FrameScreen10";
import FrameScreen11 from "./screens/FrameScreen11";
import FrameScreen12 from "./screens/FrameScreen12";
import FrameScreen13 from "./screens/FrameScreen13";
import FrameScreen14 from "./screens/FrameScreen14";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Frame1"
              component={FrameScreen15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InviteFriends"
              component={InviteFriends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Language"
              component={Language}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationsSettings"
              component={NotificationsSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10665"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10664"
              component={FrameScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10656"
              component={FrameScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame14"
              component={FrameScreen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={FrameScreen4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={FrameScreen5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={FrameScreen6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10654"
              component={FrameScreen7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10673"
              component={FrameScreen8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10646"
              component={FrameScreen9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10648"
              component={FrameScreen10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame11"
              component={FrameScreen11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10663"
              component={FrameScreen12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10667"
              component={FrameScreen13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10669"
              component={FrameScreen14}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
