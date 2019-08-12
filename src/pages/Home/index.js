import { colors } from '../../common/index';
import React, { Component } from "react";
import {
  Badge, Separator,
  Container, Header, Title, Content, Button, List, ListItem, Text, Icon, Left, Body, Right, Thumbnail
} from "native-base";
import styles from "./styles";

const profile_img = require("../../assets/imgs/dp.png");


class Home extends Component {
  goToPage = (page_name) => {
    this.props.navigation.navigate(page_name);
  }
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
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Content>
          <List>
            <Separator bordered>
              <Text>List with Avatar</Text>
            </Separator>
            <ListItem avatar onPress={() => this.goToPage('search')}>
              <Left>
                <Thumbnail source={profile_img} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <Separator bordered>
              <Text>List with Thumbnail</Text>
            </Separator>

            <ListItem thumbnail onPress={() => this.goToPage('details')}>
              <Left>
                <Thumbnail square source={profile_img} style={{ backgroundColor: colors.GREY_BORDER }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text> Details</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>

      </Container>
      // <View>
      //   <Text>Home Page</Text>
      //   <Button
      //     title="Go to Details"
      //     onPress={() => this.props.navigation.push("dashBoard")}
      //   />
      // </View>
    );
  }
}

export default Home;
