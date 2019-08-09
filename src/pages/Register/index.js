import React, { Component } from "react";
import {
  View, Image, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView
  , Platform,
} from "react-native";
import { Picker, Radio, Left, Text, Right, DatePicker, Container, Header, Content, ListItem, CheckBox, Body, Button } from "native-base";

import MultiSelect from 'react-native-multiple-select';
import styles from "./styles";

export const items = [{
  id: 'reading',
  name: 'Reading',
}, {
  id: 'cooking',
  name: 'Cooking',
},
{
  id: 'dancing',
  name: 'Dancing',
}
];

class Register extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    };

  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    let { selectedItems } = this.state
    return (
      <View style={styles.outerContainer}>

        <View style={styles.logoContainer}>
          <Image style={styles.imageContainer} source={require('../../assets/imgs/logo.png')} />
          <Text style={styles.titleText} >Register</Text>
        </View>

        <ScrollView style={styles.elementContainer}>
          <KeyboardAvoidingView>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#cdcdcd"
              returnKeyType="next"

            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#cdcdcd"
              returnKeyType="next"

            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#cdcdcd"
              returnKeyType="next"

            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#cdcdcd"
              returnKeyType="next"
            />
            <View style={styles.dateContainer}>
              <DatePicker
                style={{ fontSize: 20, backgroundColor: 'red' }}
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={true}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select DOB"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#cdcdcd", fontSize: 14 }}
                onDateChange={this.setDate}
                disabled={false}
                cancelBtnText="Cancel"
                confirmBtnText="OK"
              />
            </View>
            <View style={styles.borderContainer}>
              <Picker
                mode="dropdown"
                placeholder="Select Country"
                placeholderStyle={{ color: "#cdcdcd" }}
                placeholderIconColor="#007aff"
                style={styles.selectBox}
              >
                <Picker.Item color="#cdcdcd" label="Select Country" value="null" />
                <Picker.Item color="black" label="Wallet" value="key0" />
                <Picker.Item label="black Card" value="key1" />

              </Picker>
            </View>

            <View style={styles.radioContainer}>
              <View style={styles.labelHeading}>
                <Text style={styles.labelHeadingText}>
                  Select Gender
              </Text>
              </View>
              <View style={styles.radioInner}>
                <View style={styles.radioInner}>
                  <Text style={styles.radioInnerText}>Male</Text>
                  <Radio style={styles.radioInnerSelect} selected={false} />
                </View>

                <View style={styles.radioInner}>
                  <Text style={styles.radioInnerText}>Female</Text>
                  <Radio style={styles.radioInnerSelect} selected={true} />
                </View>
              </View>
            </View>

            <MultiSelect
              hideTags
              items={items}
              uniqueKey="id"
              ref={(component) => { this.multiSelect = component }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Select Your Hobbies"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={(text) => console.log(text)}
              //  altFontFamily="ProximaNova-Light"
              tagRemoveIconColor="#CCC"
              tagBorderColor="#cdcdcd"
              tagTextColor="black"
              selectedItemTextColor="black"
              selectedItemIconColor="black"
              itemTextColor="orange"
              displayKey="name"
              searchInputStyle={{ color: '#CCC' }}
              submitButtonColor="black"
              submitButtonText="Submit"
              textColor="#cdcdcd"
              styleTextDropdown={styles.labelHeadingText}
            />
            <View>
              {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
            </View>

            <View style={styles.radioContainer}>
              <View style={styles.labelHeading}>
                <Text style={styles.labelHeadingText}>
                  Select Communication Modes
              </Text>
              </View>
              <View >
                <View >
                  <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                      <Text>Text Message</Text>
                    </Body>
                  </ListItem>
                </View>
                <View >
                  <ListItem >
                    <CheckBox checked={true} />
                    <Body>
                      <Text>Email</Text>
                    </Body>
                  </ListItem>
                </View>
                <View >
                  <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                      <Text>Phone Call</Text>
                    </Body>
                  </ListItem>
                </View>
              </View>


              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <Button block danger><Text> Register </Text></Button>
              </View>
              {/* <Content>
                <ListItem>
                  <CheckBox checked={true} />
                  <Body>
                    <Text>Phone Call</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox checked={true} />
                  <Body>
                    <Text>Message</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox checked={true} color="green" />
                  <Body>
                    <Text>E-mail</Text>
                  </Body>
                </ListItem>
              </Content> */}
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

      </View>
      // <View style={styles.outerContainer}>
      //   <View style={styles.mainContainer}>
      //     <View style={styles.logoContainer}>
      //       <Image style={styles.imageContainer} source={require('../../assets/imgs/logo.png')} />
      //       <Text style={styles.titleText} >Register</Text>

      //       <View style={styles.innerContainer}>
      //         <TextInput
      //           style={{ height: 40 }}
      //           placeholder="Type here to translate!"

      //         />

      //       </View>
      //     </View>


      //   </View>

      //   <View style={styles.footerContainer}>


      //   </View>

      // </View>
      // <View>
      //   <Text style={styles.heading}> Register Screen </Text>
      //   <Button
      //     title="Register Screen"
      //     onPress={() => this.props.navigation.navigate("Details")}
      //   />
      // </View>
    );
  }
}

export default Register;


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});