import Home from "./app/components/Home";
import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { View, Text } from "react-native";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    home: Home,
    detail: DetailsScreen
  },
  {
    initialRouteName: "detail"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
