const React = require("react-native");
import { colors } from "../../common/index";
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 8,
    width: 70,
    height: 70,
    resizeMode: "cover"
    //     backgroundColor: "#fff"
  },
  welcomeText: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 4.5 : deviceHeight / 4.5,
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
    width: 100
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  listItemHeight: {
    height: Platform.OS === "android" ? 50 : undefined
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? undefined : undefined
  },
  footerContainer: {
    position: "absolute",
    bottom: Platform.OS === "android" ? 10 : 30
  },
  footerText: {
    textAlign: "center",
    padding: 20,
    color: colors.GREY_TEXT
  }
};
