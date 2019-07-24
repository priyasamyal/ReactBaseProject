import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View>
        <Text>Home Page</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("dashboard")}
        />
      </View>
    );
  }
}

export default Home;
