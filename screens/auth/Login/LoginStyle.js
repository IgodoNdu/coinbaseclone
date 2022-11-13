import { Platform, StyleSheet, StatusBar } from "react-native";
//for responsive font sizing
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../resources/colors";

export default StyleSheet.create({
    container: {
        //splash screen to take up the full screen
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    //maniView aligned to center of view
    mainView: {
        flexGrow: 1,
        paddingTop: RFValue(60),
        paddingHorizontal: 20,
        justifyContent: "space-between",
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: RFValue(20)
    },
    textStylePrivacy: {
        fontWeight: "bold",
        fontSize: RFValue(14)
    },
    flexRowView: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    setNargin: {
        marginTop: 15,
    },
    textInputStyle: {
        height: RFValue(45),
        paddingHorizontal: 20,
        fontSize: RFValue(15),
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.mediumGray,
    },
    btnView: {
        marginVertical: 20,
    },
    linkStyle: {
        fontSize: RFValue(13),
        color: colors.primaryBlue,
    }
})