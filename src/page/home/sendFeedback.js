import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  AppRegistry,
  TextInput,
  Button
} from "react-native";

class HeadTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable={true}
        maxLength={40}
      />
    );
  }
}

class CommentTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable={true}
        maxLength={250}
      />
    );
  }
}

export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: "",
      comment: ""
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#425273" }}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textLine}>ส่งคำติชม</Text>

          <HeadTextInput
            style={styles.textHead}
            placeholder="หัวเรื่อง"
            placeholderTextColor="white"
            onChangeText={head => this.setState({ head })}
            value={this.state.head}
          />

          <CommentTextInput
            style={styles.textComment}
            placeholder="แสดงความคิดเห็น"
            placeholderTextColor="white"
            onChangeText={comment => this.setState({ comment })}
            value={this.state.comment}
          />

          <View style={styles.btmSend}>
            <Button title="ส่ง" color="white" />
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
    marginTop: 100
  },
  textLine: {
    textAlign: "center",
    margin: 10,
    fontSize: 30,
    color: "white"
  },
  textHead: {
    backgroundColor: "#425273",
    paddingLeft: 30,
    padding: 16,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 1,
    marginTop: 10,
    color: "white",
    borderRadius: 8
  },
  textComment: {
    backgroundColor: "#425273",
    paddingLeft: 30,
    padding: 16,
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 1,
    marginTop: 10,
    color: "white",
    borderRadius: 8
  },
  btmSend: {
    backgroundColor: "green",
    borderColor: "white",
    borderWidth: 2,
    paddingBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 8
  }
});
