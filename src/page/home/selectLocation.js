import React, { Component } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";

export default class Location extends Component {
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
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 2 </Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() => {
                this.props.navigation.navigate("ShowAQI", {
                  name: item.name,
                  AQI: item.AQI,
                  subject: item.subject
                });
              }}
            />
          )}
          keyExtractor={({ id }, index) => id}
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
