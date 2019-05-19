import React, { Component } from "react";
import { Text, View, StyleSheet, AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./lib/router";
import Drawer from "./lib/router";

const AppIndex = createAppContainer(Drawer);
AppRegistry.registerComponent("RNNavigators", () => Drawer);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppIndex />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: 50
  }
});
