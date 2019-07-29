import Home from "./app/components/Home";
import DashBoard from "@components/Dashboard";
import Register from "@components/Register";
import Login from "@components/Login";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import React, { Component } from "react";
import { Text, View, Button } from "react-native";

const TabNavigator = createBottomTabNavigator({
  home: Home,
  dashBoard: DashBoard
});

const RootStack = createStackNavigator(
  {
    Login: Login,
    registerScreen: Register,
    tabs: TabNavigator,
    dashBoard: DashBoard
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
