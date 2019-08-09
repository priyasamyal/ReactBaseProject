import { colors } from '../../common/index';
export default {
    centerIcons: {
        width: 25,
        textAlign: 'center'
    },
    container: {
        backgroundColor: "#FFF"
    },
    headerText: {
    },
    headerLeft: {
        paddingLeft: 6,
    },
    /**Date Picker Custom Styling* */
    dateCustomStyles: {
        dateIcon: {
            position: 'absolute',
            left: 0,
            top: 7,
            marginLeft: 0,
            width: 22, height: 22
        },
        dateInput: {
            marginLeft: 0,
            borderWidth: 0,

        },
        dateText: {
            color: "black",
            textAlign: 'left',
            marginLeft: 10,
            fontSize: 16
        },
        placeholderText: {
            color: colors.GREY_BORDER,
            fontSize: 16
        },
        btnTextConfirm: {
            color: 'black',
            fontWeight: 'bold'
        },
        datePickerCon: {

        }

    },
    labelHeadingText: {
        color: colors.GREY_BORDER,
        fontSize: 16,
        paddingLeft: 15

    },
    labelHeadingTextSelected: {
        color: "black",
        fontSize: 16,
        paddingLeft: 15
    },


};
