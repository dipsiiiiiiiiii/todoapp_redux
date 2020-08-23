import "react-native-gesture-handler";

import AddToDo from "./src/screens/AddToDo";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ThingsToDo from "./src/screens/ThingsToDo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ThingsToDo" component={ThingsToDo} />
        <Tab.Screen name="AddToDo" component={AddToDo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
