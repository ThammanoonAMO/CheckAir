import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default class Location extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 2 </Text>
        <Button
          title="Open Hidden Screen in drawer"
          onPress={() => this.props.navigation.navigate("ShowAQI")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    marginTop: 50,
    justifyContent: "center"
  }
});
