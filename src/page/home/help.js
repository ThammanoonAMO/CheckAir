import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class Help extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Help"
  });

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#425273" }}>
        <View style={{ marginTop: 50 }}>
          <View style={styles.btmSend}>
            <Button
              title="ส่งคำติชม"
              color="white"
              onPress={() => this.props.navigation.navigate("Send")}
            />
          </View>

          <View style={styles.btmReport}>
            <Button
              title="รายงานปัญหา"
              color="white"
              onPress={() => this.props.navigation.navigate("Report")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btmSend: {
    backgroundColor: "#425273",
    borderColor: "white",
    borderWidth: 2,
    paddingBottom: 5,
    paddingTop: 5,
    marginLeft: 20,
    marginRight: 20
  },
  btmReport: {
    backgroundColor: "#425273",
    borderColor: "white",
    borderWidth: 2,
    paddingBottom: 5,
    paddingTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  }
});
