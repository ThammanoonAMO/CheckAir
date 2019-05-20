import React, { Component } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default class ShowAQI extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch("http://localhost:5000/api/data/data")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={StyleSheet.MainContrainer}>
        <Text style={{ fontSize: 23 }}>Screen Show work!!!</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.AQI}</Text>}
          keyExtractor={({ id }, index) => id}
        />
        <Button
          title="Back to screen2"
          onPress={() => this.props.navigation.navigate("Location")}
        />
      </View>
    );
  }
}
