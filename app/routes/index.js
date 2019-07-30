import DashBoard from "@components/Dashboard";
import Home from "@components/Home";
import Login from "@components/Login";
import Register from "@components/Register";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const TabNavigator = createBottomTabNavigator({
  home: Home,
  dashBoard: DashBoard
});

const RootStack = createStackNavigator(
  {
    Login: Login,
    registerScreen: Register,
    tabs: TabNavigator,
    dashBoard: DashBoard
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
