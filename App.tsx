import "react-native-gesture-handler";

import AddToDo from "./src/screens/AddToDo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";
import ThingsToDo from "./src/screens/ThingsToDo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import rootReducer from "./src/redux/modules";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ThingsToDo" component={ThingsToDo} />
          <Tab.Screen name="AddToDo" component={AddToDo} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
