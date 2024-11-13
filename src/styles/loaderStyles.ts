import { Dimensions, StyleSheet } from "react-native";
import colors from "../utility/colors";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: colors.transparent,
        borderRadius: 16,
        alignSelf: 'center',
        width: width,
        alignItems: 'center',
    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        justifyContent: 'center',
    }

})