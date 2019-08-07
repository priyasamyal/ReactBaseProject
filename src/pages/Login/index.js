import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import styles from "./styles";
import { StackActions, NavigationActions } from "react-navigation";

class Login extends Component {
  render() {
    const { heading, input } = styles;
    return (
      <View>
        <Text style={styles.heading}> Login Screen from iOS </Text>
        <Button
          title="Login Screenn"
          onPress={() =>
            this.props.navigation.reset(
              [NavigationActions.navigate({ routeName: "tabs" })],
              0
            )
          }
        />
      </View>
    );
  }
}

export default Login;
