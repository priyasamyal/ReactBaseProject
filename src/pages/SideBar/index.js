import React, { Component } from "react";
import { Image, View } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge,

} from "native-base";
import styles from "./styles";

const drawerCover = require("../../assets/imgs/drawer-cover.png");
const drawerImage = require("../../assets/imgs/logo.png");
const datas = [
    {
        name: "Home",
        route: "home",
        icon: "home",

    },
    {
        name: "My Profile",
        route: "profile",
        icon: "person",
        bg: "#d00",
        types: "2"

    },
    {
        name: "Settings",
        route: "settings",
        icon: "settings",


    },
    {
        name: "Notifications",
        route: "Notifications",
        icon: "notifications",
        bg: "#003893",
        types: "4"
    },
    {
        name: "Inbox",
        route: "Inbox",
        icon: "mail",


    },

    {
        name: "LogOut",
        route: "LogOut",
        icon: "exit-to-app",
        bg: "#C5F442"
    },

];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }
    render() {
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
                >
                    <Image source={drawerCover} style={styles.drawerCover} />
                    <Image square style={styles.drawerImage} source={drawerImage} />
                    <Text style={styles.welcomeText}>
                        Hi, Priya
                     </Text>

                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                noBorder
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Left>
                                    <Icon
                                        type="MaterialIcons"
                                        active
                                        name={data.icon}
                                        style={{ color: "#777", fontSize: 26, width: 30 }}
                                    />
                                    <Text style={styles.text}>
                                        {data.name}
                                    </Text>
                                </Left>
                                {data.types &&
                                    <Right style={{ flex: 1 }}>
                                        <Badge
                                            style={{
                                                borderRadius: 3,
                                                height: 25,
                                                width: 72,
                                                backgroundColor: data.bg
                                            }}
                                        >
                                            <Text
                                                style={styles.badgeText}
                                            >{`${data.types} Types`}</Text>
                                        </Badge>
                                    </Right>}
                            </ListItem>}
                    />

                </Content>
                <Content style={{ position: 'absolute', bottom: 30 }}>
                    <Text style={styles.footerText}>V 1.0.0</Text>
                </Content>

            </Container>
        );
    }
}

export default SideBar;
