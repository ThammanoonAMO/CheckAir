import React, { Component } from "react";
import { Text, View, StyleSheet, AppRegistry, TextInput ,Button} from "react-native";



class HeadTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

class CommentTextInput extends Component {

  _onChangeText(text) {
  this.setState({ fontSize: text.length > 6 ? 40 : 80 });
}
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {250}
      />
    );
  }
}

export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      head: '',
      comment: '',
       };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#425273" }}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textLine}>ส่งคำติชม</Text>

            <HeadTextInput
              style={styles.textHead}
              placeholder= "   หัวเรื่อง"
              placeholderTextColor = 'white'
              onChangeText = {(head) => this.setState({head})}
              value = {this.state.head}
            />

            <CommentTextInput
              style={styles.textComment}
              placeholder= "   แสดงความคิดเห็น"
              placeholderTextColor = 'white'
              onChangeText = {(comment) => this.setState({comment})}
              value = {this.state.comment}
            />

            <View style={styles.btmSend}>
            <Button
              title="ส่ง"
              color="white"
            />
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  textLine: {
    textAlign: "center",
    margin: 10,
    fontSize: 30,
    color: "white"
  },
  textHead: {
    height: 50, 
    fontSize: 15,
    borderColor: 'white', 
    borderWidth: 1,
    color: "white",
    marginLeft:20,
    marginRight:20,
    marginTop: 20,
  },
    textComment: {
    height: 50, 
    borderColor: 'white', 
    borderWidth: 1,
    color: "white",
    marginLeft:20,
    marginRight:20,
    marginTop: 20,
  },
    btmSend: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 2,
    paddingBottom:5,
    marginLeft:20,
    marginRight:20,
    marginTop: 20,
  },
});