import React from "react";
import Profile from "@components/Profile";
import Home from "@components/Home";
import Login from "@components/Login";
import Register from "@components/Register";

import Search from "@components/Search";
import Settings from "@components/Settings";
import SideBar from "@components/SideBar";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

const TabNavigator = createBottomTabNavigator({
  home: Home,
  profile: Profile
});
const Drawer = createDrawerNavigator(
  {
    home: Home,
    profile: Profile,
    settings: Settings,
    Login: Login,
    registerScreen: Register,
  }, {
    initialRouteName: "profile",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  })

const RootStack = createStackNavigator(
  {
    Drawer: Drawer,
    search: Search,
    Login: Login,
    registerScreen: Register,
    tabs: TabNavigator,
    profile: Profile
  },
  {
    initialRouteName: "search",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
