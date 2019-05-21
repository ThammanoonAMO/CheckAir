import React, { Component } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default class ShowAQI extends Component {
  render() {
    const { navigation } = this.props;
    var name = navigation.dangerouslyGetParent().getParam("name", "NO-NAME");
    var AQI = navigation.dangerouslyGetParent().getParam("AQI", "NO-AQI");
    var subject = navigation
      .dangerouslyGetParent()
      .getParam("subject", "NO-subject");

    return (
      <View style={styles.MainContrainer}>
        <Text style={styles.District}>{JSON.stringify(name)}</Text>
        <Text style={styles.Name}>{JSON.stringify(subject)}</Text>
        <Text>{JSON.stringify(AQI)}</Text>
        <Button
          title="Back to screen2"
          onPress={() => this.props.navigation.navigate("Location")}
        />
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push("ShowAQI", {
              name: "test"
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContrainer: {
    flex: 1,
    paddingTop: 5,
    alignItems: "center",
    marginTop: 5
  },
  District: {
    fontSize: 30
  },
  Name: {
    fontSize: 20
  }
});
