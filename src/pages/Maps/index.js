import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Dimensions, ScrollView, Animated, FlatList, } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, List } from 'native-base';
import * as Animatable from "react-native-animatable";
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView, {
    Marker, Circle,
    Polygon,
    Polyline,
} from 'react-native-maps';
import markerLogo from '../../assets/imgs/logo.png';
import styles from "./styles";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);
const locations = require('./locations.json');
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const drawerImage = require("../../assets/imgs/logo.png");

SEARCH_HEADER_MAX_HEIGHT = Platform.OS === "ios" ? 500 : 500;
SEARCH_HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 90 : 90;
// create a component
class Maps extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     animation: "easeInEaseOut",
        //     scrollY: new Animated.Value(0)
        // };
    }

    componentWillMount() {
        this.searchHeight = new Animated.Value(100);
    }

    increaseHeightofSearch = () => {
        Animated.timing(this.searchHeight, {
            toValue: deviceHeight,
            duration: 500
        }).start()
    }

    decreaseHeightofSearch = () => {
        Animated.timing(this.searchHeight, {
            toValue: 100,
            duration: 500
        }).start()
    }
    render() {
        const searchMarginTop = this.searchHeight.interpolate({
            inputRange: [0, deviceHeight],
            outputRange: [20, 90],
            extrapolate: "clamp"
        });
        const backArrowOpactiy = this.searchHeight.interpolate({
            inputRange: [80, deviceHeight - 100, deviceHeight],
            outputRange: [0, 0, 1],
            extrapolate: "clamp"
        });
        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Maps</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <Animated.View
                    style={{
                        position: 'absolute',
                        height: 60,
                        width: 60,
                        left: 25,
                        top: 40,
                        zIndex: 100,
                        //opacity: 0
                        opacity: backArrowOpactiy
                    }}>
                    <TouchableOpacity
                        onPress={() => this.decreaseHeightofSearch()}>
                        <Icon ios='ios-arrow-back' android="md-arrow-back" style={{ fontSize: 35, color: 'rgb(0, 122, 255)' }} />
                    </TouchableOpacity>
                </Animated.View>

                <View style={styles.container}>
                    <View style={styles.inner_container}>
                        <MapView
                            style={styles.map}
                            showsUserLocation={true}
                            region={{
                                latitude: 30.7046,
                                longitude: 76.7179,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            showsCompass={true}
                        >
                        </MapView>

                    </View>

                    <Animatable.View animation="slideInUp" style={[styles.overlay]} iterationCount={1}>
                        <Animated.View style={{ height: this.searchHeight }} >
                            <ScrollView >
                                <TouchableOpacity
                                    onPress={() => this.increaseHeightofSearch()}>
                                    <Animated.View style={{
                                        flex: 1,
                                        margin: 15,
                                        justifyContent: 'center',
                                        marginTop: searchMarginTop,
                                    }}>
                                        <View
                                            pointerEvents='none'
                                            style={[styles.searchBar]}>
                                            <Icon name="search" style={styles.searchIcon} />
                                            <TextInput
                                                style={{
                                                    paddingLeft: 8,
                                                    margin: 0,
                                                    fontSize: 18,
                                                }}
                                                placeholder="Search for place or address"
                                                placeholderTextColor="#5c5c5c"
                                            />
                                        </View>

                                        {/* <FlatList
                                    data={[
                                        { key: 'Devin' },
                                    ]}
                                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                                /> */}
                                    </Animated.View>
                                </TouchableOpacity>
                            </ScrollView>
                        </Animated.View>
                    </Animatable.View>
                </View>
            </Container>
        );
    }
}

//make this component available to the app
export default Maps;



// class Maps1 extends Component {
//     state = {
//         locations: locations
//     }
//     render() {
//         return (
//             <Container>
//                 <Header>
//                     <Left>
//                         <Button transparent>
//                             <Icon name='arrow-back' />
//                         </Button>
//                     </Left>
//                     <Body>
//                         <Title>Maps</Title>
//                     </Body>
//                     <Right>

//                     </Right>
//                 </Header>
//                 <View style={styles.container}
//                 >
//                     <MapView
//                         style={styles.map}
//                         showsUserLocation={true}
//                         region={{
//                             latitude: 30.7046,
//                             longitude: 76.7179,
//                             latitudeDelta: 0.015,
//                             longitudeDelta: 0.0121,
//                         }}
//                         showsCompass={true}
//                     >
//                         <Circle
//                             center={{
//                                 latitude: 30.7046,
//                                 longitude: 76.7179,
//                             }}
//                             radius={500}
//                             // fillColor="rgba(255, 255, 255, 1)"
//                             strokeColor="rgba(0,0,0,0.5)"
//                             //zIndex={2}
//                             strokeWidth={2}
//                         />
//                         {/* <Polyline
//                             coordinates={[
//                                 {
//                                     latitude: 30.7046 + 0.01,
//                                     longitude: 76.7179 - 0.01,
//                                 },
//                                 {
//                                     latitude: 30.7046 - 2 * 0.01,
//                                     longitude: 76.7179 + 2 * 0.01,
//                                 },
//                                 {
//                                     latitude: 30.7046 - 0.01,
//                                     longitude: 76.7179 - 0.01,
//                                 },
//                                 {
//                                     latitude: 30.7046 - 2 * 0.01,
//                                     longitude: 76.7179 - 0.01,
//                                 },
//                             ]}
//                             strokeColor="rgba(0,0,200,0.5)"
//                             strokeWidth={3}
//                             lineDashPattern={[5, 2, 3, 2]}
//                         /> */}

//                         <Marker
//                             coordinate={{
//                                 latitude: 30.7046,
//                                 longitude: 76.7179,
//                             }}
//                             centerOffset={{ x: -18, y: -60 }}
//                             anchor={{ x: 0.69, y: 1 }}
//                             image={markerLogo}
//                         >
//                         </Marker>
//                         {/* <Image
//                             source={drawerImage}
//                             style={{
//                                 flex: 1,
//                                 width: deviceWidth * 0.95,
//                                 alignSelf: 'center',
//                                 height: deviceHeight * 0.15,
//                                 position: 'absolute',
//                                 bottom: deviceHeight * 0.05
//                             }}
//                         /> */}
//                         <Text style={{
//                             flex: 1,
//                             width: deviceWidth * 0.95,
//                             alignSelf: 'center',
//                             height: deviceHeight * 0.15,
//                             position: 'absolute',
//                             bottom: deviceHeight * 0.05
//                         }}>Hi</Text>
//                     </MapView>

//                 </View>
//                 <ScrollView>
//                     <View style={styles.listContainer}>
//                         <List style={{ height: 50 }}>
//                             <ListItem itemHeader first>
//                                 <Text>COMEDY</Text>
//                             </ListItem>
//                             <ListItem >
//                                 <Text>Hangover</Text>
//                             </ListItem>
//                             <ListItem last>
//                                 <Text>Cop Out</Text>
//                             </ListItem>
//                             <ListItem itemHeader>
//                                 <Text>ACTION</Text>
//                             </ListItem>
//                             <ListItem>
//                                 <Text>Terminator Genesis</Text>
//                             </ListItem>
//                             <ListItem>
//                                 <Text>Terminator Genesis</Text>
//                             </ListItem>
//                             <ListItem>
//                                 <Text>Terminator Genesis</Text>
//                             </ListItem>
//                         </List>
//                     </View>
//                 </ScrollView>

//             </Container>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         //...StyleSheet.absoluteFillObject,
//         height: deviceHeight,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         zIndex: 0,
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     marker: {
//         marginLeft: 46,
//         marginTop: 33,
//         fontWeight: 'bold',
//     },
//     listContainer: {
//         // position: 'absolute',
//         //zIndex: 2,
//         // bottom: 0,
//         // left: 0,
//         padding: 5,
//         width: deviceWidth - 10,
//         backgroundColor: 'white',
//         borderRadius: 5,
//         height: 50


//     }
// });
//export default Maps
// provider={PROVIDER_GOOGLE}
