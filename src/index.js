import React, { Component } from "react";
import { Text, View, StyleSheet, AppRegistry } from "react-native";
import App1 from "./lib/router";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App1 />
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
