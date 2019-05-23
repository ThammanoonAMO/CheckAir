import React, { Component } from "react";
import { Text, Image, View, StyleSheet, Button, FlatList } from "react-native";

export default class ShowAQI extends Component {
  render() {
    const { navigation } = this.props;
    var name = navigation.dangerouslyGetParent().getParam("name", "NO-NAME");
    var AQI = navigation.dangerouslyGetParent().getParam("AQI", "NO-AQI");
    var subject = navigation
      .dangerouslyGetParent()
      .getParam("subject", "NO-subject");
    var AQIUser = navigation
      .dangerouslyGetParent()
      .getParam("AQIUser", "NO-AQI");

    return (
      <View style={styles.MainContrainer}>
        <Text style={styles.District}>{JSON.stringify(name)}</Text>
        <Text style={styles.Name}>{JSON.stringify(subject)}</Text>

        <View style={styles.body}>
          <View style={styles.LeftBodyTextBox}>
            <View style={styles.LeftHeadTextBox}>
              <Text style={styles.CenterHeadBox}>Local Check</Text>
            </View>
            <View style={styles.column}>
              <View style={styles.borderColumn}>
                <View style={styles.FreshAQI}>
                  <Image
                    source={require("./imgs/goodIcon.png")}
                    style={styles.IconAQI}
                  />
                </View>
              </View>
              <View style={styles.borderColumn}>
                <View style={styles.FreshAQI}>
                  <View style={styles.TextAQI}>
                    <Text>{JSON.stringify(AQI)}</Text>
                    <Text>AQI</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.LeftBodyTextBox}>
            <View style={styles.LeftHeadTextBox}>
              <Text style={styles.CenterHeadBox}>Data check</Text>
            </View>
            <View style={styles.column}>
              <View style={styles.borderColumn}>
                <View style={styles.FreshAQI}>
                  <Image
                    source={require("./imgs/goodIcon.png")}
                    style={styles.IconAQI}
                  />
                </View>
              </View>
              <View style={styles.borderColumn}>
                <View style={styles.FreshAQI}>
                  <View style={styles.TextAQI}>
                    <Text>{JSON.stringify(AQIUser)}</Text>
                    <Text>AQI</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
          <View
            style={{
              width: 38,
              height: 40,
              padding: 5,
              backgroundColor: "#425473"
            }}
          >
            <Image
              source={require("./imgs/icons8-temperature.png")}
              style={styles.IconTemp}
            />
          </View>
          <View
            style={{
              width: 58,
              height: 40,
              padding: 5,
              backgroundColor: "#425473"
            }}
          >
            <Text>30 °</Text>
          </View>
          <View
            style={{ width: 1, height: 40, backgroundColor: "powderblue" }}
          />
          <View
            style={{
              width: 38,
              height: 40,
              padding: 5,
              backgroundColor: "#425473"
            }}
          >
            <Image
              source={require("./imgs/icons8-dew_point.png")}
              style={styles.IconTemp}
            />
          </View>
          <View
            style={{
              width: 58,
              height: 40,
              padding: 5,
              backgroundColor: "#425473"
            }}
          >
            <Text>30 %</Text>
          </View>
          <View
            style={{ width: 1, height: 40, backgroundColor: "powderblue" }}
          />
          <View
            style={{
              width: 38,
              height: 40,
              padding: 5,
              backgroundColor: "#425473"
            }}
          >
            <Image
              source={require("./imgs/icons8-wind_filled.png")}
              style={styles.IconTemp}
            />
          </View>
          <View
            style={{
              width: 58,
              height: 40,
              padding: 5,
              backgroundColor: "#425473"
            }}
          >
            <Text>3 km/hr</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContrainer: {
    flex: 1,
    paddingTop: 5,
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#708090"
  },
  District: {
    fontSize: 30
  },
  Name: {
    fontSize: 20
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100
  },
  body: {
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  AboutHeader: {
    textAlign: "left",
    padding: 5,
    marginLeft: 20
  },
  CheckAirFont: {
    color: "#001121",
    fontSize: 35
    //fontFamily: "KohinoorW00-Bold"
  },
  DescriptFont: {
    fontSize: 15,
    //fontFamily: "KohinoorW00-Bold",
    marginLeft: 25
  },
  imageLogo: {
    width: 100,
    height: 100,
    marginRight: 30
  },
  LeftHeadTextBox: {
    backgroundColor: "#425473"
  },
  LeftHeadBox: {
    color: "#F5F5F5",
    padding: 10,
    textAlign: "left",
    //fontFamily: "KohinoorW00-Bold",
    fontSize: 15
  },
  RightHeadTextBox: {
    backgroundColor: "#F5F5F5"
  },
  RightHeadBox: {
    color: "#425473",
    padding: 10,
    textAlign: "right",
    //fontFamily: "KohinoorW00-Bold",
    fontSize: 15
  },
  CenterHeadBox: {
    color: "#F5F5F5",
    padding: 10,
    textAlign: "center"
    //fontFamily: "KohinoorW00-Bold",
    // fontSize: 15
  },
  LeftBodyTextBox: {
    borderRadius: 4,
    borderWidth: 5,
    borderColor: "#425473",
    fontFamily: "KohinoorW00-Bold",
    marginTop: 10
  },
  RightBodyTextBox: {
    borderRadius: 4,
    borderWidth: 5,
    borderColor: "#F5F5F5",
    //fontFamily: "KohinoorW00-Bold",
    marginTop: 10
  },
  BodyTextBox: {
    padding: 10,
    //fontFamily: "KohinoorW00-Bold",
    color: "#001121"
  },
  column: {
    flexDirection: "row"
    // marginLeft: 10,
    // marginRight: 10
  },
  borderColumn: {
    //borderWidth: 3,
    borderColor: "#425473",
    width: 140
  },
  borderColorColumn: {
    //borderWidth: 3,
    borderColor: "#425473",
    width: 50
  },
  headColumn: {
    height: 25,
    textAlign: "center",
    padding: 5,
    backgroundColor: "#425473",
    color: "#F5F5F5"
    //fontFamily: "KohinoorW00-Bold"
  },
  SubheadColumn: {
    height: 100,
    textAlign: "center",
    padding: 5,
    backgroundColor: "#425473",
    color: "#F5F5F5"
    //fontFamily: "KohinoorW00-Bold"
  },
  FreshAQI: {
    textAlign: "center",
    height: 100,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#87CEFA",
    color: "#001121"
  },
  GoodAQI: {
    textAlign: "center",
    height: 100,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#ADFF2F",
    color: "#001121"
  },
  NormalAQI: {
    textAlign: "center",
    height: 100,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#F0D000",
    color: "#001121"
  },
  HighAQI: {
    textAlign: "center",
    height: 100,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#FF8C00",
    color: "#001121"
  },
  VeryHighAQI: {
    textAlign: "center",
    height: 100,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#CD5C5C",
    color: "#001121"
  },
  IconAQI: {
    width: 100,
    height: 100,
    marginLeft: 20,
    marginRight: 30
  },
  IconTemp: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10
  },
  TextAQI: {
    width: 100,
    height: 100,
    marginLeft: 50,
    marginRight: 30,
    marginTop: 30,
    fontSize: 30
  },
  IconContact: {
    width: 75,
    height: 75,
    margin: 20
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
