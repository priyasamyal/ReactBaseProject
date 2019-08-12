import React, { Component } from 'react'
import { Animated, Platform, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import {
    Icon
} from "native-base";
const logo = require("../../assets/imgs/logo.png");
HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 70 : 73;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;
class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0)
        };
    }
    goBack = () => {
        this.props.navigation.goBack();
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
            outputRange: [-20, -20, -20, 5],
            extrapolate: "clamp"
        });
        return (
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 2, left: 20, top: 25 }} >
                    <TouchableOpacity onPress={() => this.goBack()}>
                        <Icon ios='ios-arrow-back' android="md-arrow-back" style={{ fontSize: 35, color: 'rgb(0, 122, 255)' }} />
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "lightskyblue",
                        height: headerHeight,
                        zIndex: headerZindex,
                        alignItems: "center",

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
        )
    }
}
export default Details;