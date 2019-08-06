import { StyleSheet } from "react-native";
import { colors } from '../../common/index';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 20
  },

  logoContainer: {
    alignItems: "center",
    height: 150,
    justifyContent: "center",
    // backgroundColor: 'skyblue',
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  titleText: {
    color: colors.GREY_TEXT,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",

  },
  elementContainer: {
    flex: 1,
    width: "100%",
    //backgroundColor: "red",

  },
  input: {
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.GREY_BORDER,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "black",
    paddingHorizontal: 10
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
  borderContainer: {

    height: 40,
    borderWidth: 1,
    borderColor: colors.GREY_BORDER,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5,
    marginBottom: 10,

  },
  selectBox: {
    height: 35,
    // fontSize: 10,
  },

  radioContainer: {
    flexDirection: "column"
  },

  radioInner: {
    flexDirection: "row",
    // justifyContent: 'space-between'
  },
  radioInnerText: {
    marginEnd: 14,
    color: colors.GREY_TEXT
  },
  radioInnerSelect: {
    marginEnd: 20,

  },
  labelHeading: {
    marginBottom: 8,

  },
  labelHeadingText: {
    color: colors.GREY_TEXT,
    fontSize: 16,
    fontWeight: "bold",
  },

  dateContainer: {
    alignItems: "flex-start",
    justifyContent: 'center',
    fontSize: 13,
    borderWidth: 1,
    borderColor: colors.GREY_BORDER,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5,
    marginBottom: 10,

  },

});
