import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

const checked = false;
const checkedTemp = false;
const checkedWind = false;

export default class Setting extends Component {
  constructor() {
    super();
    this.state = {
      imageURL:
        "file:///Users/ten/works/airPollution/src/page/home/imgs/nonTickIcon.png",
      tempImageURL:
        "file:///Users/ten/works/airPollution/src/page/home/imgs/celciusIcon.png",
      windImageURL:
        "file:///Users/ten/works/airPollution/src/page/home/imgs/kmIcon.png"
    };
  }
  Load_New_Image = () => {
    if (this.state.checked) {
      this.setState({
        imageURL:
          "file:///Users/ten/works/airPollution/src/page/home/imgs/nonTickIcon.png",
        checked: false
      });
    } else {
      this.setState({
        imageURL:
          "file:///Users/ten/works/airPollution/src/page/home/imgs/tickIcon.png",
        checked: true
      });
    }
  };
  Load_Temp_Image = () => {
    if (this.state.checkedTemp) {
      this.setState({
        tempImageURL:
          "file:///Users/ten/works/airPollution/src/page/home/imgs/celciusIcon.png",
        checkedTemp: false
      });
    } else {
      this.setState({
        tempImageURL:
          "file:///Users/ten/works/airPollution/src/page/home/imgs/farenIcon.png",
        checkedTemp: true
      });
    }
  };
  Load_Wind_Image = () => {
    if (this.state.checkedWind) {
      this.setState({
        windImageURL:
          "file:///Users/ten/works/airPollution/src/page/home/imgs/kmIcon.png",
        checkedTemp: false
      });
    } else {
      this.setState({
        windImageURL:
          "file:///Users/ten/works/airPollution/src/page/home/imgs/miIcon.png",
        checkedWind: true
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Box}>
          <Text style={styles.Head}>การแจ้งเตือน</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={styles.Subject}>แสดงแจ้งเตือนอัตโนมัติ</Text>
              <Text style={styles.Detail}>
                แสดงแจ้งเตือนเมื่อทำการบันทึกข้อมูลสำเร็จ
              </Text>
            </View>
            <TouchableOpacity onPress={this.Load_New_Image}>
              <Image
                source={{ uri: this.state.imageURL }}
                style={styles.IconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Box}>
          <Text style={styles.Head}>การเปลี่ยนหน่วย</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={styles.Subject}>หน่วยอุณหภูมิ</Text>
              <Text style={styles.Detail}>
                เปลี่ยนหน่วยอุณหภูมิระหว่างเซลเซียสและฟาเรนไฮต์
              </Text>
            </View>
            <TouchableOpacity onPress={this.Load_Temp_Image}>
              <Image
                source={{ uri: this.state.tempImageURL }}
                style={styles.IconStyle}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={styles.Subject}>หน่วยแรงลม</Text>
              <Text style={styles.Detail}>
                เปลี่ยนหน่วยแรงลมระหว่างกิโลเมตรและไมล์
              </Text>
            </View>
            <TouchableOpacity onPress={this.Load_Wind_Image}>
              <Image
                source={{ uri: this.state.windImageURL }}
                style={styles.IconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: "#708090"
  },
  Box: {
    margin: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 5
  },
  Head: {
    //fontFamily: "KohinoorW00-Bold",
    color: "#425473",
    fontSize: 20
  },
  Subject: {
    //fontFamily: "KohinoorW00-Bold",
    color: "#001121",
    fontSize: 18,
    marginTop: 20
  },
  Detail: {
    //fontFamily: "KohinoorW00-Bold",
    color: "#425473",
    fontSize: 13
  },
  IconStyle: {
    width: 40,
    height: 40,
    marginTop: 20
  }
});
