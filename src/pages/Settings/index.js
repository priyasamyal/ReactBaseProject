import { colors } from '../../common/index';
import React, { Component } from "react";
import {
    Badge, Container, Header, Title, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch
} from "native-base";
import styles from "./styles";
class Settings extends Component {
    static navigationOptions = {
        title: "Home"
    };

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left style={styles.headerLeft}>

                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>

                    </Left>
                    <Body style={styles.headerText}>
                        <Title>Settings</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <Content>
                    <ListItem itemDivider>
                        <Text></Text>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: colors.THEME_RED }}>
                                <Icon active name="notifications" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Push Notification</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: colors.THEME_BLUE }}>
                                <Icon active name="chatbubbles" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>SMS Notifications</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text></Text>
                    </ListItem>
                    <ListItem icon >
                        <Left>
                            <Button style={{ backgroundColor: colors.THEME_RED }}>
                                <Icon active name="key" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Change Password</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>

                    <ListItem icon >
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon name="mail" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Inbox</Text>
                        </Body>
                        <Right>
                            <Badge warning>
                                <Text>2</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default Settings;
