import React from "react";
import Details from "@components/Details";
import Profile from "@components/Profile";
import Home from "@components/Home";
import Login from "@components/Login";
import Maps from "@components/Maps";
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
    initialRouteName: "home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  })

const RootStack = createStackNavigator(
  {
    Drawer: Drawer,
    details: Details,
    search: Search,
    Login: Login,
    registerScreen: Register,
    tabs: TabNavigator,
    profile: Profile,
    maps: Maps
  },
  {
    initialRouteName: "maps",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
