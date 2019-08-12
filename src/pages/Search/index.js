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
  TextInput,
  TouchableOpacity
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
  Subtitle,
  List, ListItem
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

const listItem = [
  "Mark",
  "Keith",
  "Specncer",
  "Harvey",
  "Tom Riddle",
  "Harry Potter",
  "Pown Wiesly",
  "Harmonie",
  "McGonagal",
  "Dumbeldore",
  "Snake",
  "Jack Sparrow",
  "Juliet",
  "Romeo"
];
SEARCH_HEADER_MAX_HEIGHT = Platform.OS === "ios" ? 145 : 110;
SEARCH_HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 90 : 45;
class Search extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#03A9F4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
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

  goBack = () => {
    this.props.navigation.goBack();
    // this.props.navigation.navigate("search");
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, SEARCH_HEADER_MAX_HEIGHT - SEARCH_HEADER_MIN_HEIGHT, SEARCH_HEADER_MAX_HEIGHT],
      outputRange: [SEARCH_HEADER_MAX_HEIGHT, SEARCH_HEADER_MAX_HEIGHT, SEARCH_HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    const textOpacity = this.state.scrollY.interpolate({
      inputRange: [0, SEARCH_HEADER_MAX_HEIGHT - SEARCH_HEADER_MIN_HEIGHT, SEARCH_HEADER_MIN_HEIGHT],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const mainSearchOpacity = this.state.scrollY.interpolate({
      inputRange: [0, SEARCH_HEADER_MAX_HEIGHT - SEARCH_HEADER_MIN_HEIGHT, SEARCH_HEADER_MIN_HEIGHT],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });

    const searchTextDisplay = this.state.scrollY.interpolate({
      inputRange: [0, SEARCH_HEADER_MAX_HEIGHT - SEARCH_HEADER_MIN_HEIGHT, SEARCH_HEADER_MIN_HEIGHT],
      outputRange: [1, 1, 0],

      extrapolate: "clamp"
    });
    return (
      <Container >
        <Animated.View
          style={{
            backgroundColor: 'rgb(249, 249, 249)',
            paddingTop: 10,
            padding: 5,
            height: headerHeight,
            borderWidth: 0.2,
            borderColor: '#5c5c5c'
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: Platform.OS === "ios" ? 25 : 15
            }}
          >
            <TouchableOpacity onPress={() => this.goBack()}>
              <View style={{ paddingRight: 10, paddingLeft: 10, paddingTop: 10, paddingBottom: 10 }}>
                <Icon ios='ios-arrow-back' android="md-arrow-back" style={{ fontSize: 35, color: 'rgb(0, 122, 255)' }} />
              </View>
            </TouchableOpacity>

            <Animated.View
              style={{
                transform: [
                  { scale: searchTextDisplay },
                  { translateY: 1 },
                ],
              }}
            >
              <Animated.Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 14,
                  marginLeft: 6,
                  width: 100
                }}
              >
                Search
              </Animated.Text>


            </Animated.View>
            <Animated.View style={{
              flexDirection: 'row',
              marginLeft: -100,
              opacity: mainSearchOpacity,
              flex: 1,
              height: 40,
              marginTop: 5,
              alignItems: 'center',
              transform: [
                { scale: mainSearchOpacity },
                { translateY: 1 },

              ],
            }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  backgroundColor: '#e0e0e1',
                  borderColor: "#e0e0e1",

                }}>
                <Icon name="search" style={{ marginTop: 5, marginLeft: 8, fontSize: 23, color: '#5c5c5c' }} />
                <TextInput
                  style={{
                    paddingLeft: 8,
                    margin: 0,
                    fontSize: 18
                  }}
                  placeholder="Search"
                  placeholderTextColor="#5c5c5c"
                />
              </View>

              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Text style={{ color: 'rgb(0, 122, 255)', fontSize: 15, alignContent: 'center', padding: 2 }}>Cancel</Text>
              </TouchableOpacity>
            </Animated.View>

          </View>
          <Animated.View style={{
            flexDirection: 'row',
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 5,
            opacity: textOpacity,
            borderWidth: 1,
            backgroundColor: '#e0e0e1',
            borderColor: "#e0e0e1",
            transform: [
              { scale: textOpacity },
              { translateY: 1 },
            ],
          }}>
            <Icon name="search" style={{ marginTop: 8, marginLeft: 8, fontSize: 23, color: '#5c5c5c' }} />
            <TextInput
              style={{
                paddingLeft: 8,
                margin: 0,
                height: 40,
                fontSize: 18
              }}
              placeholder="Search"
              placeholderTextColor="#5c5c5c"
            />
          </Animated.View>
        </Animated.View>
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <View>
            <FlatList

              data={listItem}
              renderItem={({ item }) => (
                <ListItem>
                  <Text style={{ padding: 5, fontSize: 20, borderColor: '#cdcdcd', borderBottomWidth: 0.2 }}> {item} </Text>
                </ListItem>

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
      </Container >
    );
  }
}

export default Search;
