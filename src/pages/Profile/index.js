import React, { Component } from "react";
import {
	Label, Thumbnail, Container, Header, Title, Text, Content, Button, ListItem, Picker, Icon, Left, Body, Right, Form, Item, Input
} from "native-base";
import {
	View, Image, TouchableHighlight
} from "react-native";
import DatePicker from 'react-native-datepicker'
import MultiSelect from 'react-native-multiple-select';
import { colors } from '../../common/index';
import styles from "./styles";
import { Grid, Col, Row } from "react-native-easy-grid";

const profile_img = require("../../assets/imgs/dp.png");
const edit = require("../../assets/imgs/edit.png");
const dob = require("../../assets/imgs/calendar.png");

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
},
{
	id: 'sports',
	name: 'Sports',
},
{
	id: 'surfing',
	name: 'Surfing',
}
];

class Profile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			date: "",
			selectedItems: [],
			selected: ""
		}
	}
	onSelectedItemsChange = selectedItems => {
		this.setState({ selectedItems });
	};
	onValueChange(value) {
		this.setState({
			selected: value
		});
	}

	render() {
		let { selectedItems } = this.state
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
						<Title>Edit Profile</Title>
					</Body>
					<Right>
						<Button hasText transparent>
							<Text>Save</Text>
						</Button>
					</Right>
				</Header>
				<Content>
					<Form>
						<Grid>
							<Row style={{ marginBottom: 10 }} >
								<Col size={1} style={{}} >
									<ListItem avatar style={{
										marginLeft: 0, margin: 0,
									}}>
										<Left style={{
											alignItems: 'center',
											textAlign: 'center', flex: 1,
											justifyContent: 'center',
										}}>
											<Thumbnail source={profile_img} style={{ textAlign: 'center', height: 90, width: 90, borderRadius: 50, borderColor: colors.GREY_BORDER, borderWidth: 1 }}
											/>
											< TouchableHighlight style={{ position: 'absolute', bottom: 0, right: "37%" }} >
												<Image source={edit} />
											</ TouchableHighlight>

										</Left>

									</ListItem>
								</Col>
							</Row>
							<Row >
								<Col size={1} style={{ backgroundColor: "white" }} >
									<ListItem itemDivider>
										<Text>Personal Information</Text>
									</ListItem>

									<Item>
										<Input placeholder='Enter your name' placeholderTextColor={colors.GREY_BORDER} />
									</Item>
									<Item >
										<DatePicker
											style={{ width: 150, }}
											date={this.state.date}
											mode="date"
											iconSource={dob}
											placeholder="Select DOB"
											format="YYYY-MM-DD"
											minDate="2016-05-01"
											maxDate="2020-06-01"
											confirmBtnText="Done"
											cancelBtnText="Cancel"
											showIcon="false"
											customStyles={styles.dateCustomStyles}
											onDateChange={(date) => { this.setState({ date: date }) }}
										/>
									</Item>
									<View style={{ marginLeft: 10, marginRight: 10 }}>
										<MultiSelect
											hideTags
											items={items}
											uniqueKey="id"
											ref={(component) => { this.multiSelect = component }}
											onSelectedItemsChange={this.onSelectedItemsChange}
											selectedItems={selectedItems}
											selectText="Select Your Intrests"
											searchInputPlaceholderText="Search Items..."
											onChangeInput={(text) => console.log(text)}
											//  altFontFamily="ProximaNova-Light"
											tagRemoveIconColor="#CCC" // color of  cross icon of selected options
											tagBorderColor={colors.GREY_BORDER} //border color of selected options
											tagTextColor="black" // color of  text  of selected options
											selectedItemTextColor="black"
											selectedItemIconColor="black"
											itemTextColor={colors.GREY_BORDER}
											displayKey="name"
											searchInputStyle={{ color: 'black', height: 40, fontSize: 15, }}
											submitButtonColor="black"
											submitButtonText="Submit"
											textColor={colors.GREY_BORDER}
											styleTextDropdown={styles.labelHeadingText} //default text shown in placeholder
											styleTextDropdownSelected={styles.labelHeadingTextSelected} // text shown in placeholder after selection
											styleItemsContainer={{ backgroundColor: colors.GREY_BORDER }}// highlight text click
											styleSelectorContainer={{ backgroundColor: "pink" }}
											styleRowList={{ fontSize: 15, padding: 5, backgroundColor: "white", }}
											styleInputGroup={{ backgroundColor: "white", paddingRight: 5 }}

										/>
										<View style={{ marginLeft: 5, marginBottom: 5 }}>
											{this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
										</View>
									</View>
									<ListItem itemDivider>
										<Text>Private Information</Text>
									</ListItem>

									<Item>
										<Icon style={styles.centerIcons} active android='md-mail' ios='ios-mail' />
										<Input placeholder='Email' placeholderTextColor={colors.GREY_BORDER} />
									</Item>
									<Item >
										<Icon style={styles.centerIcons} active android='md-phone-portrait' ios="ios-phone-portrait" />
										<Input placeholder='Phone Number' placeholderTextColor={colors.GREY_BORDER} />
									</Item>
									<Item>
										<Icon style={styles.centerIcons} active ios="ios-transgender" android="md-transgender" />
										<Picker
											style={{ color: "red" }}
											iosHeader="Gender"
											placeholder="Select Gender"
											placeholderStyle={{ color: colors.GREY_BORDER, marginLeft: -8 }}
											itemStyle={{ color: "black", }}
											itemTextStyle={{ color: "black", }}
											textStyle={{ color: 'black' }}
											note
											mode="dropdown"
											style={{ width: 200 }}
											selectedValue={this.state.selected}
											onValueChange={this.onValueChange.bind(this)}
										>
											<Picker.Item label="Male" value="key0" />
											<Picker.Item label="Female" value="key1" />
											<Picker.Item label="Trans-Gender" value="key2" />

										</Picker>

									</Item>

									<ListItem itemDivider>
										<Text>Address</Text>
									</ListItem>
									<Item stackedLabel>
										<Label>Street</Label>
										<Input placeholder="Apt, Suite, Bldg. (optional)" placeholderTextColor={colors.GREY_BORDER} />
									</Item>
								</Col>
							</Row>
							<Row>
								<Col>
									<Item stackedLabel>
										<Label>City</Label>
										<Input placeholder="Enter your city" placeholderTextColor={colors.GREY_BORDER} />
									</Item>
								</Col>
								<Col>
									<Item stackedLabel>
										<Label>State</Label>
										<Input placeholder="Enter your state" placeholderTextColor={colors.GREY_BORDER} />
									</Item>
								</Col>
							</Row>
							<Row>
								<Col>

									<ListItem icon >
										<Left style={{ borderBottomColor: colors.GREY_BORDER, borderBottomWidth: 0.2 }}>
											<Text style={{ textAlign: 'left' }}>Country</Text>
										</Left>
										<Body>

										</Body>
										<Right>
											<Text>India</Text>
											<Icon active name="arrow-forward" />
										</Right>
									</ListItem>
								</Col>
							</Row>
							<Row style={{ marginTop: 30, marginBottom: 30 }}>
								<Col>
									<Button block primary style={{ margin: 10, backgroundColor: colors.THEME_BLUE }}>
										<Text>Save Profile</Text>
									</Button>
								</Col>
							</Row>
						</Grid>
					</Form>
				</Content>

			</Container >
			// <View>
			//   <Text>Profile Page</Text>
			//   <Button
			//     title="Go to Homee"
			//     onPress={() =>
			//       this.props.navigation.reset(
			//         [NavigationActions.navigate({ routeName: "Login" })],
			//         0
			//       )
			//     }
			//   />
			// </View>
		);
	}
}

export default Profile;
