import Home from "./app/components/Home";
import DashBoard from "./app/components/Dashboard";
import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";

const RootStack = createStackNavigator(
  {
    home: Home,
    dashboard: DashBoard
  },
  {
    initialRouteName: "home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
