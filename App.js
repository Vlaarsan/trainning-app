import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import Page4 from "./screens/Page4";
import Page5 from "./screens/Page5";
import Page6 from "./screens/Page6";
import Page7 from "./screens/Page7";

import { CounterProvider } from "./context/CounterContext";
import { UserInfoProvider } from "./context/UserInfoContext";

import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen name="Page 1" component={Page1} />
        <Stack.Screen name="Page 2" component={Page2} />
        <Stack.Screen name="Page 3" component={Page3} />
        <Stack.Screen name="Page 4" component={Page4} />
        <Stack.Screen name="Page 5" component={Page5} />
        <Stack.Screen name="Page 6" component={Page6} />
        <Stack.Screen name="Page 7" component={Page7} />
      </Stack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <UserInfoProvider>
        <CounterProvider>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </CounterProvider>
      </UserInfoProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
    alignItems: "center",
    justifyContent: "center",
  },
});
