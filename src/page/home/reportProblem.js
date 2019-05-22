/*Example of Expandable ListView in React Native*/
import React, { Component } from 'react';
//import react in our project
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  TextInput,
  Button,
} from 'react-native';
//import basic react native components


class HeadTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        
      />
    );
  }
}


class ExpandableItemComponent extends Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
    this.state = {
      layoutHeight: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0,
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View>
        {/*Header of the Expandable List Item*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.header}>
          <Text style={styles.headerText}>{this.props.item.category_name}</Text>
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: 'hidden',
          }}>
          {/*Content under the header of the Expandable List Item*/}
          {this.props.item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.content}>
              <Text style={styles.text}>
               {item.val}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default class Report extends Component {
  //Main View defined under this Class
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = { listDataSource: CONTENT , head: '', };
  }

  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    //For Single Expand at a time
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false)
    );

    //For Multiple Expand at a time
    //array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topHeading}>ปัญหาที่พบบ่อย</Text>
        <Text style={styles.topHeading}></Text>
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            <ExpandableItemComponent
              key={item.category_name}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
          <Text style={styles.topHeading2}>กรอกปัญหาเพิ่มเติม</Text>
          <HeadTextInput
            style={styles.textHead}
            placeholder= "กรอกปัญหา..."
            placeholderTextColor = 'white'
            onChangeText = {(head) => this.setState({head})}
            value = {this.state.head}
          />
          <View style={styles.btmSend}>
            <Button
              title="ส่ง"
              color="white"
          />
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#425273',
  },
  topHeading: {
    paddingLeft: 30,
    color: 'white',
    fontSize: 25,
  },
  header: {
    backgroundColor: '#425273',
    paddingLeft: 30,
    padding: 16,
    borderWidth: 2,
    borderColor: '#f0d000',
    marginLeft:20,
    marginRight:20,
    marginTop: 1,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',

  },
  separator: {
    height: 4,
    backgroundColor: '#425273',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    backgroundColor: '#fff',
    marginLeft:20,
    marginRight:20,
    height: 150,
    borderRadius: 8,
  },
  textHead: {
    backgroundColor: '#425273',
    paddingLeft: 30,
    padding: 16,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft:20,
    marginRight:20,
    marginTop: 20,
    color: "white",
    borderRadius: 8,
  },
  topHeading2: {
    paddingLeft: 30,
    color: 'white',
    fontSize: 25,
    marginTop: 50,
  },
  btmSend: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 2,
    paddingBottom:5,
    marginLeft:20,
    marginRight:20,
    marginTop: 20,
    borderRadius: 8,
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'กรอกค่า P.AQI ทศนิยมได้ไหม',
    subcategory: [{ id: 1, val: 'สามารถกรอกได้ทั้งจำนวนเต็มและจำนวนทศนิยม \t(ไม่เกิน 2 ตำแหน่ง)' }],
  },
  {
    isExpanded: false,
    category_name: 'กรอกข้อมูลสถานที่เป็นภาษาไทยหรือภาษาอังกฤษ',
    subcategory: [{ id: 4, val: 'ภาษาไทยเท่านั้น' }],
  },
  {
    isExpanded: false,
    category_name: 'คนที่ไม่มีเครื่องวัดค่าใช้ได้ไหม',
    subcategory: [{ id: 7, val: 'ใช้ได้ \nโดยสามารถกรอกค่า P.AQI และกรอกข้อมูลสถานที่เป็นภาษาไทย' }],
  },
];
