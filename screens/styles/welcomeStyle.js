import { StyleSheet } from "react-native";
//for responsive font sizing
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../resources/colors";

export default StyleSheet.create({
    container: {
        //splash screen to take up the full screen
        flex: 1,
        backgroundColor: colors.primaryBlue,
    },
    //maniView aligned to center of view
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: RFValue(35)
    }
})