import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";
import locations from "../../../locations";
import { FlatList } from "react-native-gesture-handler";
const KEYS_TO_FILTERS = ["user.name", "subject"];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.state = {
      text: "",
      searchTerm: "",
      newName: "",
      AQIInput: ""
    };
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
  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
  handleInputChange = text => {
    if (/^\d+$/.test(text)) {
      this.setState({ text: text });
    }
  };

  onNewName(txt) {
    this.setState({ newName: txt });
  }

  render() {
    const filteredLocations = locations.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <View style={styles.container}>
        <View style={styles.AqiHeaderInput}>
          <Text style={styles.FontStyle}>ค่า P.AQI</Text>
          <TouchableOpacity onPress={this.onPress}>
            <Image
              source={require("./imgs/selectFromDevice.png")}
              style={styles.IconStyle}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.FontInput}
          placeholder="พิมค่า P.AQI..."
          keyboardType={"numeric"}
          onChangeText={this.handleInputChange}
          value={this.state.text}
        />
        <View style={styles.LocationHeaderInput}>
          <Text style={styles.FontStyle}>ชื่อสถานที่</Text>
          <TouchableOpacity onPress={this.onPress}>
            <Image
              source={require("./imgs/selectLocation.png")}
              style={styles.IconStyle}
            />
          </TouchableOpacity>
        </View>
        <SearchInput
          onChangeText={term => {
            this.searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="พิมชื่อสถานที่ (อำเภอ หรือจังหวัด)..."
          value={this.state.newName}
        />
        <View style={styles.ItemScroll}>
          <ScrollView>
            {filteredLocations.map(location => {
              return (
                <TouchableOpacity
                  onPress={() => this.onNewName(location.user.name)}
                  key={location.id}
                  style={styles.locationItem}
                >
                  <View>
                    <Text style={styles.locationName}>
                      {location.user.name}
                    </Text>
                    <Text style={styles.locationSubject}>
                      {location.subject}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.BottomButton}>
          <TouchableOpacity onPress={this.onPress}>
            <Image
              source={require("./imgs/checkIt.png")}
              style={styles.ButtonIconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#708090"
  },
  AqiHeaderInput: {
    //flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    //justifyContent: "flex-end",
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10
  },
  LocationHeaderInput: {
    //flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    //justifyContent: "flex-end",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  IconStyle: {
    padding: 10,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode: "stretch"
  },
  FontStyle: {
    fontSize: 30,
    width: 270,
    //fontFamily: "KohinoorW00-Bold",
    color: "#001121",
    padding: 5
  },
  FontInput: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 20,
    padding: 10,
    //fontFamily: "KohinoorW00-Bold",
    color: "#001121",
    backgroundColor: "#F5F5F5",
    borderStyle: "solid",
    borderRadius: 10
  },
  locationItem: {
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0.5,
    borderColor: "#F5F5F5",
    padding: 10
  },
  locationName: {
    color: "#001121"
    //fontFamily: "KohinoorW00-Bold"
  },
  locationSubject: {
    color: "#425473"
    //fontFamily: "KohinoorW00-Bold"
  },
  searchInput: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 20,
    padding: 10,
    //fontFamily: "KohinoorW00-Bold",
    color: "#001121",
    backgroundColor: "#F5F5F5",
    borderStyle: "solid",
    borderRadius: 10
  },
  ItemScroll: {
    height: 300
  },
  BottomButton: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  ButtonIconStyle: {
    padding: 10,
    height: 190,
    width: 190,
    resizeMode: "stretch"
  }
});
