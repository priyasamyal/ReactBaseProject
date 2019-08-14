
import { View, StyleSheet, Text, Dimensions, ScrollView, Image } from 'react-native'
const deviceWidth = Dimensions.get("window").width;
export default {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner_container: {
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#F5FCFF',
        ...StyleSheet.absoluteFillObject,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderRadius: 15,
        backgroundColor: 'white',
        width: deviceWidth,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "#e0e0e1",

    },

    searchBar: {
        flex: 2,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#e0e0e1',
        borderColor: "#e0e0e1",
        marginRight: 8,
        marginLeft: 15,
        alignItems: 'center',
        padding: 5,

    },
    searchIcon: {
        marginLeft: 8,
        fontSize: 23,
        color: '#5c5c5c',

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    panelContainer: {
        flex: 1,
        justifyContent: 'center'
    },

};