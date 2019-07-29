import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { NavigationActions } from "react-navigation";

class DashBoard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Dash"
    };
  };
  render() {
    return (
      <View>
        <Text>DashBoard Page</Text>
        <Button
          title="Go to Home"
          onPress={() =>
            this.props.navigation.reset(
              [NavigationActions.navigate({ routeName: "Login" })],
              0
            )
          }
        />
      </View>
    );
  }
}

export default DashBoard;
//npm install react-native-gesture-handler --save
