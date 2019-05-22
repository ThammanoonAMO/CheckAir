import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios:
    "\nคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์\n" +
    "มหาวิทยาลัยธรรมศาสตร์ ปีการศึกษา 2562\n",
  android:
    "\nคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์\n" +
    "มหาวิทยาลัยธรรมศาสตร์ ปีการศึกษา 2562\n"
});

const history = Platform.select({
  ios:
    "\tCheck Air พัฒนาโดยนักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยธรรมศาสตร์ จากการเล็งเห็นถึงปัญหาในด้านสุขภาพคนไทยในปัจจุบันนี้" +
    " เกิดปัญหาในด้านมลภาวะที่ส่งผลกระทบต่อระบบร่างกายต่าง ๆ ปัจจัยหลักมาจากค่าฝุ่น PM 2.5 หนึ่งในทางแก้ไขปัญหาคือการเตรียมความพร้อมต่อสภาพอากาศ จากการวัดค่า P.AQI ซึ่ง" +
    "เป็นค่าที่ได้จากการคำนวณฝุ่นที่เป็นอันตรายต่าง ๆ ในอากาศ Check Air จึงเป็นหนึ่งในตัวเลือกในการตรวจสอบค่า P.AQI ซึ่งนอกจากการตรวจสอบแล้ว ยังสามารถบันทึกค่าของผู้ใช้งาน " +
    "นำไปประมวลผลกับค่า P.AQI ของผู้อื่นในละแวกพื้นที่เดียวกันได้อีกด้วย",
  android:
    "\tCheck Air พัฒนาโดยนักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยธรรมศาสตร์ จากการเล็งเห็นถึงปัญหาในด้านสุขภาพคนไทยในปัจจุบันนี้" +
    " เกิดปัญหาในด้านมลภาวะที่ส่งผลกระทบต่อระบบร่างกายต่าง ๆ ปัจจัยหลักมาจากค่าฝุ่น PM 2.5 หนึ่งในทางแก้ไขปัญหาคือการเตรียมความพร้อมต่อสภาพอากาศ จากการวัดค่า P.AQI ซึ่ง" +
    "เป็นค่าที่ได้จากการคำนวณฝุ่นที่เป็นอันตรายต่าง ๆ ในอากาศ Check Air จึงเป็นหนึ่งในตัวเลือกในการตรวจสอบค่า P.AQI ซึ่งนอกจากการตรวจสอบแล้ว ยังสามารถบันทึกค่าของผู้ใช้งาน " +
    "นำไปประมวลผลกับค่า P.AQI ของผู้อื่นในละแวกพื้นที่เดียวกันได้อีกด้วย"
});

const user = Platform.select({
  ios:
    "บุคคลทั่วไปในพื้นที่ ดังต่อไปนี้\n\t1. จังหวัดกรุงเทพมหานคร\n\t\tอำเภอสายไหม" +
    "\n\t2. จังหวัดปทุมธานี\n\t\tอำเภอคลองหลวง อำเภอเมืองปทุมธานี อำเภอสามโคก อำเภอธัญบุรี อำเภอลาดหลุมแก้ว อำเภอลำลูกกา และอำเภอหนองเสือ" +
    "\n\t3. จังหวัดนครนายก\n\t\tอำเภอบ้านนา อำเภอปากพลี อำเภอเมืองนครนายก และอำเภอองครักษ์" +
    "\n\t4. จังหวัดภูเก็ต\n\t\tอำเภอกะทู้ อำเภอถลาง และอำเภอเมืองภูเก็ต" +
    "\n\t5. จังหวัดกาฬสินธุ์\n\t\tอำเภอฆ้องชัย",
  android:
    "บุคคลทั่วไปในพื้นที่ ดังต่อไปนี้\n\t1. จังหวัดกรุงเทพมหานคร\n\t\tอำเภอสายไหม" +
    "\n\t2. จังหวัดปทุมธานี\n\t\tอำเภอคลองหลวง อำเภอเมืองปทุมธานี อำเภอสามโคก อำเภอธัญบุรี อำเภอลาดหลุมแก้ว อำเภอลำลูกกา และอำเภอหนองเสือ" +
    "\n\t3. จังหวัดนครนายก\n\t\tอำเภอบ้านนา อำเภอปากพลี อำเภอเมืองนครนายก และอำเภอองครักษ์" +
    "\n\t4. จังหวัดภูเก็ต\n\t\tอำเภอกะทู้ อำเภอถลาง และอำเภอเมืองภูเก็ต" +
    "\n\t5. จังหวัดกาฬสินธุ์\n\t\tอำเภอฆ้องชัย"
});

const howto = Platform.select({
  ios:
    "การบันทึกค่า P.AQI\n\tผู้ใช้งานจะต้องบันทึกสองค่า ได้แก่ ค่า P.AQI และชื่อสถานที่ของบริเวณที่ต้องการบันทึกค่า โดยค่าทั้ง 2 ค่านี้ นอกจากผู้ใช้จะสามารถกรอกได้เอง ยังสามารถรับจากเครื่องวัดค่าฝุ่น P.AQI และระบบ GPS" +
    "\n\nการอ่านค่า P.AQI\n\tในแต่ละสถานที่จากกลุ่มผู้ใช้งาน จะแสดงค่า P.AQI ทั้งหมด 2 แบบ ได้แก่ LocalCheck และ DataCheck\n\tLocalCheck :" +
    "\n\t\tค่า P.AQI ที่ได้จากการเฉลี่ยจากผู้ใช้งานที่บันทึกในพื้นที่นั้น ๆ\n\tDataCheck :\n\t\tค่า P.AQI ที่ได้จากแหล่งอ้างอิง เพื่อนำมาเปรียบเทียบกับ LocalCheck" +
    "\n\tนอกจากการอ่านค่าด้วยตัวเลขแล้วยังมีสัญลักษณ์ และสีในการบ่งบอกถึงสภาพมลภาวะต่าง ๆ ให้ทราบถึงระดับความอันตราย\n\tตารางเปรียบเทียบค่า P.AQI",
  android:
    "การบันทึกค่า P.AQI\n\tผู้ใช้งานจะต้องบันทึกสองค่า ได้แก่ ค่า P.AQI และชื่อสถานที่ของบริเวณที่ต้องการบันทึกค่า โดยค่าทั้ง 2 ค่านี้ นอกจากผู้ใช้จะสามารถกรอกได้เอง ยังสามารถรับจากเครื่องวัดค่าฝุ่น P.AQI และระบบ GPS" +
    "\n\nการอ่านค่า P.AQI\n\tในแต่ละสถานที่จากกลุ่มผู้ใช้งาน จะแสดงค่า P.AQI ทั้งหมด 2 แบบ ได้แก่ LocalCheck และ DataCheck\n\tLocalCheck :" +
    "\n\t\tค่า P.AQI ที่ได้จากการเฉลี่ยจากผู้ใช้งานที่บันทึกในพื้นที่นั้น ๆ\n\tDataCheck :\n\t\tค่า P.AQI ที่ได้จากแหล่งอ้างอิง เพื่อนำมาเปรียบเทียบกับ LocalCheck" +
    "\n\tนอกจากการอ่านค่าด้วยตัวเลขแล้วยังมีสัญลักษณ์ และสีในการบ่งบอกถึงสภาพมลภาวะต่าง ๆ ให้ทราบถึงระดับความอันตราย\n\tตารางเปรียบเทียบค่า P.AQI"
});

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.head}>
            <View style={styles.AboutHeader}>
              <Text style={styles.CheckAirFont}>Check Air</Text>
              <Text style={styles.DescriptFont}>For your breath</Text>
            </View>
            <Image
              source={require("./imgs/checkAirLogo02_02.jpg")}
              style={styles.imageLogo}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.LeftBodyTextBox}>
              <View style={styles.LeftHeadTextBox}>
                <Text style={styles.LeftHeadBox}>ความเป็นมา</Text>
              </View>
              <Text style={styles.BodyTextBox}>{history}</Text>
            </View>
            <View style={styles.RightBodyTextBox}>
              <View style={styles.RightHeadTextBox}>
                <Text style={styles.RightHeadBox}>กลุ่มผู้ใช้งาน</Text>
              </View>
              <Text style={styles.BodyTextBox}>{user}</Text>
            </View>
            <View style={styles.LeftBodyTextBox}>
              <View style={styles.LeftHeadTextBox}>
                <Text style={styles.LeftHeadBox}>การใช้งานแอพฯ</Text>
              </View>
              <Text style={styles.BodyTextBox}>{howto}</Text>
              <View style={styles.column}>
                <View style={styles.borderColumn}>
                  <Text style={styles.headColumn}>สภาพอากาศ</Text>
                  <Text style={styles.FreshAQI}>สภาพอากาศสดชื่น</Text>
                  <Text style={styles.GoodAQI}>สภาพอากาศดี</Text>
                  <Text style={styles.NormalAQI}>สภาพอากาศปกติ</Text>
                  <Text style={styles.HighAQI}>สภาพมลพิษสูง</Text>
                  <Text style={styles.VeryHighAQI}>สภาพมลพิษสูงมาก</Text>
                </View>
                <View style={styles.borderColumn}>
                  <Text style={styles.headColumn}>ช่วงค่า P.AQI</Text>
                  <Text style={styles.FreshAQI}>0 - 25</Text>
                  <Text style={styles.GoodAQI}>26 - 50</Text>
                  <Text style={styles.NormalAQI}>51 - 100</Text>
                  <Text style={styles.HighAQI}>101 - 200</Text>
                  <Text style={styles.VeryHighAQI}>200 ขึ้นไป</Text>
                </View>
                <View style={styles.borderColorColumn}>
                  <Text style={styles.headColumn}>สี</Text>
                  <Text style={styles.FreshAQI}>ฟ้า</Text>
                  <Text style={styles.GoodAQI}>เขียว</Text>
                  <Text style={styles.NormalAQI}>เหลือง</Text>
                  <Text style={styles.HighAQI}>ส้ม</Text>
                  <Text style={styles.VeryHighAQI}>แดง</Text>
                </View>
              </View>
              <Text style={styles.BodyTextBox}>สัญลักษณ์ถึงสภาวะต่าง ๆ</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./imgs/freshIcon.png")}
                  style={styles.IconAQI}
                />
                <Text style={styles.BodyTextBox}>สภาพอากาศสดชื่น</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./imgs/goodIcon.png")}
                  style={styles.IconAQI}
                />
                <Text style={styles.BodyTextBox}>สภาพอากาศดี</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./imgs/normalinIcon.png")}
                  style={styles.IconAQI}
                />
                <Text style={styles.BodyTextBox}>สภาพอากาศปกติ</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./imgs/highRiskIcon.png")}
                  style={styles.IconAQI}
                />
                <Text style={styles.BodyTextBox}>สภาพมลพิษสูง</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./imgs/dangerIcon.png")}
                  style={styles.IconAQI}
                />
                <Text style={styles.BodyTextBox}>สภาพมลพิษสูงมาก</Text>
              </View>
            </View>
            <View style={styles.RightBodyTextBox}>
              <View style={styles.RightHeadTextBox}>
                <Text style={styles.RightHeadBox}>ผู้พัฒนา</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity onPress={this.onPress}>
                  <Image
                    source={require("./imgs/facebook.png")}
                    style={styles.IconContact}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress}>
                  <Image
                    source={require("./imgs/twitter.png")}
                    style={styles.IconContact}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress}>
                  <Image
                    source={require("./imgs/google-plus.png")}
                    style={styles.IconContact}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#708090"
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
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  borderColumn: {
    //borderWidth: 3,
    borderColor: "#425473",
    width: 133
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
  FreshAQI: {
    textAlign: "center",
    height: 25,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#87CEFA",
    color: "#001121"
  },
  GoodAQI: {
    textAlign: "center",
    height: 25,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#ADFF2F",
    color: "#001121"
  },
  NormalAQI: {
    textAlign: "center",
    height: 25,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#F0D000",
    color: "#001121"
  },
  HighAQI: {
    textAlign: "center",
    height: 25,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#FF8C00",
    color: "#001121"
  },
  VeryHighAQI: {
    textAlign: "center",
    height: 25,
    borderColor: "#425473",
    borderWidth: 2,
    backgroundColor: "#CD5C5C",
    color: "#001121"
  },
  IconAQI: {
    width: 100,
    height: 100,
    marginLeft: 30,
    marginRight: 30
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
