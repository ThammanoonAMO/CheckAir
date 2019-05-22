import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Home from "../page/home/main";
import Location from "../page/home/selectLocation";
import Help from "../page/home/help";
import About from "../page/home/about";
import Setting from "../page/home/setting";
import ShowAQI from "../page/home/showAQI";
import Send from "../page/home/sendFeedback";
import Report from "../page/home/reportProblem";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.propsnavigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} />
      </View>
    );
  }
}

const MainScreen_StackNavigator = createStackNavigator({
  First: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Check Air",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const Location_StackNavigator = createStackNavigator({
  Second: {
    screen: Location,
    navigationOptions: ({ navigation }) => ({
      title: "Select Location",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const Help_StackNavigator = createStackNavigator({
  third: {
    screen: Help,
    navigationOptions: ({ navigation }) => ({
      title: "Help",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const About_StackNavigator = createStackNavigator({
  fourth: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: "About",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const Setting_StackNavigator = createStackNavigator({
  fifth: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      title: "Setting",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

const ShowAQI_Hidden = createStackNavigator({
  sixth: {
    screen: ShowAQI,
    navigationOptions: ({ navigation }) => ({
      title: "Check Air",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});
const Send_Hidden = createStackNavigator({
  sixth: {
    screen: Send,
    navigationOptions: ({ navigation }) => ({
      title: "Feedback",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});
const Report_Hidden = createStackNavigator({
  sixth: {
    screen: Report,
    navigationOptions: ({ navigation }) => ({
      title: "Report",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});

class Hidden extends React.Component {
  render() {
    return null;
  }
}

const DrawerNavigatorExample = createDrawerNavigator({
  Home: {
    screen: MainScreen_StackNavigator,
    navigationOptions: {
      drawerLabel: "Check Aqi"
    }
  },
  Location: {
    screen: Location_StackNavigator,
    navigationOptions: {
      drawerLabel: "Select Location"
    }
  },
  Help: {
    screen: Help_StackNavigator,
    navigationOptions: {
      drawerLabel: "Help"
    }
  },
  About: {
    screen: About_StackNavigator,
    navigationOptions: {
      drawerLabel: "About"
    }
  },
  Setting: {
    screen: Setting_StackNavigator,
    navigationOptions: {
      drawerLabel: "Setting"
    }
  },
  ShowAQI: {
    screen: ShowAQI_Hidden,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Send: {
    screen: Send_Hidden,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Report: {
    screen: Report_Hidden,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  }
});
export default createAppContainer(DrawerNavigatorExample);
