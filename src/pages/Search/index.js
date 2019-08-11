import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  // Text,
  View,
  RefreshControl,
  ScrollView,
  Image,
  FlatList,
  Keyboard,
  TextInput
} from "react-native";
import styles from "./styles";
import { colors } from "../../common/index";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Left,
  Body,
  Right,
  Title,
  Subtitle
} from "native-base";
import * as Animatable from "react-native-animatable";
// const HEADER_MAX_HEIGHT = 300;
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const logo = require("../../assets/imgs/logo.png");
// class Search extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             scrollY: new Animated.Value(
//                 // iOS has negative initial scroll value because content inset...
//                 Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
//             ),
//             refreshing: false,
//         };
//     }

//     _renderScrollViewContent() {
//         const data = Array.from({ length: 30 });
//         return (
//             <View style={styles.scrollViewContent}>
//                 {data.map((_, i) => (
//                     <View key={i} style={styles.row}>
//                         <Text>{i}</Text>
//                     </View>
//                 ))}
//             </View>
//         );
//     }

//     render() {
//         // Because of content inset the scroll value will be negative on iOS so bring
//         // it back to 0.
//         const scrollY = Animated.add(
//             this.state.scrollY,
//             Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
//         );
//         const headerTranslate = scrollY.interpolate({
//             inputRange: [0, HEADER_SCROLL_DISTANCE],
//             outputRange: [0, -HEADER_SCROLL_DISTANCE],
//             extrapolate: 'clamp',
//         });

//         const imageOpacity = scrollY.interpolate({
//             inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//             outputRange: [1, 1, 0],
//             extrapolate: 'clamp',
//         });
//         const imageTranslate = scrollY.interpolate({
//             inputRange: [0, HEADER_SCROLL_DISTANCE],
//             outputRange: [0, 100],
//             extrapolate: 'clamp',
//         });

//         const titleScale = scrollY.interpolate({
//             inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//             outputRange: [1, 1, 0.8],
//             extrapolate: 'clamp',
//         });
//         const titleTranslate = scrollY.interpolate({
//             inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//             outputRange: [0, 0, -8],
//             extrapolate: 'clamp',
//         });

//         return (
//             <View style={styles.fill}>
//                 {/* <StatusBar
//                     translucent
//                     barStyle="light-content"
//                     backgroundColor="rgba(0, 0, 0, 0.251)"
//                 /> */}
//                 <Animated.ScrollView
//                     style={styles.fill}
//                     scrollEventThrottle={1}
//                     onScroll={Animated.event(
//                         [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
//                         { useNativeDriver: true },
//                     )}
//                     refreshControl={
//                         <RefreshControl
//                             refreshing={this.state.refreshing}
//                             onRefresh={() => {
//                                 this.setState({ refreshing: true });
//                                 setTimeout(() => this.setState({ refreshing: false }), 1000);
//                             }}
//                             // Android offset for RefreshControl
//                             progressViewOffset={HEADER_MAX_HEIGHT}
//                         />
//                     }
//                     // iOS offset for RefreshControl
//                     contentInset={{
//                         top: HEADER_MAX_HEIGHT,
//                     }}
//                     contentOffset={{
//                         y: -HEADER_MAX_HEIGHT,
//                     }}
//                 >
//                     {this._renderScrollViewContent()}
//                 </Animated.ScrollView>
//                 <Animated.View
//                     pointerEvents="none"
//                     style={[
//                         styles.header,
//                         { transform: [{ translateY: headerTranslate }] },
//                     ]}
//                 >
//                     <Animated.Image
//                         style={[
//                             styles.backgroundImage,
//                             {
//                                 opacity: imageOpacity,
//                                 transform: [{ translateY: imageTranslate }],
//                             },
//                         ]}
//                         source={logo}
//                     />
//                 </Animated.View>
//                 <Animated.View
//                     style={[
//                         styles.bar,
//                         {
//                             transform: [
//                                 { scale: titleScale },
//                                 { translateY: titleTranslate },
//                             ],
//                         },
//                     ]}
//                 >
//                     <Text style={styles.title}>Title</Text>
//                 </Animated.View>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     fill: {
//         flex: 1,
//     },
//     content: {
//         flex: 1,
//     },
//     header: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: '#03A9F4',
//         overflow: 'hidden',
//         height: HEADER_MAX_HEIGHT,
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         width: null,
//         height: HEADER_MAX_HEIGHT,
//         resizeMode: 'cover',
//     },
//     bar: {
//         backgroundColor: 'transparent',
//         marginTop: Platform.OS === 'ios' ? 28 : 38,
//         height: 32,
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//     },
//     title: {
//         color: 'white',
//         fontSize: 18,
//     },
//     scrollViewContent: {
//         // iOS uses content inset, which acts like padding.
//         paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
//     },
//     row: {
//         height: 40,
//         margin: 16,
//         backgroundColor: '#D3D3D3',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 70 : 73;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;
class Animation1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: "clamp"
    });

    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: "clamp"
    });
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "lightskyblue",
            height: headerHeight,
            zIndex: headerZindex,
            alignItems: "center"
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              bottom: headerTitleBottom
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 14
              }}
            >
              Priya Kumari{" "}
            </Text>
          </Animated.View>
        </Animated.View>

        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT,
              borderColor: "white",
              borderWidth: 3,
              overflow: "hidden",
              marginTop: profileImageMarginTop,
              marginLeft: 10,
              backgroundColor: "gray"
            }}
          >
            <Image
              source={logo}
              style={{
                height: null,
                width: null,
                flex: 1
              }}
            />
          </Animated.View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }}>
              {" "}
              Priya Kumari{" "}
            </Text>
          </View>
          <View style={{ height: 1000 }} />
        </ScrollView>
      </View>
    );
  }
}

const listItem = [
  "Priya",
  "Rajanhh",
  "Proliguc",
  "Test",
  "Hello",
  "Hi",
  "List1",
  "Priya",
  "Rajanhh",
  "Proliguc",
  "Test",
  "Hello",
  "Hi",
  "List1"
];
SEARCH_HEADER_MAX_HEIGHT = 110;
SEARCH_HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 70 : 45;
class Search extends Component {
  //   state = {
  //     searchBarFocused: false
  //   };
  //   componentDidMount() {
  //     this.keyboardDidShow = Keyboard.addListener(
  //       "keyboardDidShow",
  //       this.keyboardDidShow
  //     );
  //     this.keyboardWillSho;
  //     w = Keyboard.addListener("keyboardWillShow", this.keyboardWillShow);
  //     this.keyboardWillHide = Keyboard.addListener(
  //       "keyboardWillHide",
  //       this.keyboardWillHide
  //     );
  //   }
  //   keyboardDidShow = () => {
  //     this.setState({ searchBarFocused: true });
  //   };
  //   keyboardWillShow = () => {
  //     this.setState({ searchBarFocused: true });
  //   };
  //   keyboardWillHide = () => {
  //     this.setState({ searchBarFocused: false });
  //   };
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, SEARCH_HEADER_MAX_HEIGHT],
      outputRange: [SEARCH_HEADER_MAX_HEIGHT, SEARCH_HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    return (
      <Container>
        <Animated.View
          style={{
            backgroundColor: "pink",
            padding: 5,
            height: headerHeight
          }}
        >
          <View
            style={{
              flexDirection: "row"
              //  backgroundColor: "pink"
            }}
          >
            <View style={{ padding: 10 }}>
              <Icon name="menu" />
            </View>
            <View
              style={{
                padding: 10
              }}
            >
              <Text
                style={{
                  marginBottom: 10,
                  fontWeight: "bold"
                }}
              >
                Search
              </Text>
            </View>
          </View>
          <View>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: "black"
              }}
              placeholder="Type here to translate!"
            />
          </View>
        </Animated.View>
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <View>
            <Text>Hello1</Text>
            <FlatList
              data={listItem}
              renderItem={({ item }) => (
                <Text style={{ padding: 20, fontSize: 20 }}> {item} </Text>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        {/* <Header searchBar rounded style={{ backgroundColor: "#c45653" }}>
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              flex: 1
            }}
          >
            <Animatable.View
              animation={
                this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
              }
              duration={400}
            >
              <Icon
                style={{ paddingLeft: 15 }}
                name={this.state.searchBarFocused ? "ios-arrow-back" : "search"}
              />
            </Animatable.View>
            <Input
              style={{ paddingLeft: 15 }}
              placeholder="Enter your name"
              placeholderTextColor={colors.GREY_BORDER}
            />
          </Animatable.View>
        </Header>

        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? "rgba(0,0,0,0.3)"
              : "white"
          }}
          data={listItem}
          renderItem={({ item }) => (
            <Text style={{ padding: 20, fontSize: 20 }}> {item} </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </Container>
    );
  }
}

export default Search;
