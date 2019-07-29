import React, { Component } from "react";
import { View, Button, Text } from "react-native";

class Register extends Component {
  render() {
    return (
      <View>
        <Text> Register Screen </Text>
        <Button
          title="Register Screen"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

export default Register;
