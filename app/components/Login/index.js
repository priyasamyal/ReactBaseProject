import React, { Component } from "react";
import { View, Button, Text } from "react-native";

import { StackActions, NavigationActions } from "react-navigation";

class Login extends Component {
  render() {
    return (
      <View>
        <Text> Login Screen </Text>
        <Button
          title="Login Screen"
          onPress={() =>
            this.props.navigation.reset(
              [NavigationActions.navigate({ routeName: "tabs" })],
              1
            )
          }
        />
      </View>
    );
  }
}

export default Login;
