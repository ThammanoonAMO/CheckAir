import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigator";

import HomeScreen from "../page/home";
import Main from "../page/home/main";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Main: Main
});

const Drawer = createDrawerNavigator({
  main: {
    screen: HomeScreen
  }
});

export default Drawer;
