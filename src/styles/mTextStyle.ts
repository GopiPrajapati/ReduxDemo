import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../utility/colors";
import fonts from "../utility/fonts";

export default StyleSheet.create({
    h1: {
        fontSize: hp(3.2),
        color: colors.black,
        fontFamily: fonts.rubikSemiBold,
    },
    h2: {
        fontSize: hp(2.6),
        color: colors.black,
        fontFamily: fonts.rubikSemiBold,
    },
    h3: {
        fontSize: hp(2),
        color: colors.black,
        fontFamily: fonts.rubikSemiBold,
    },
    h4: {
        fontSize: hp(2),
        color: colors.black,
        fontFamily: fonts.rubikMedium,
    },
    desc: {
        fontSize: hp(1.8),
        color: colors.gray,
        fontFamily: fonts.rubikRegular,
    },
    buttonLabel: {
        fontSize: hp(1.8),
        color: colors.black,
        fontFamily: fonts.rubikMedium,
    },
    line: {
        fontSize: hp(1.8),
        color: colors.black,
        fontFamily: fonts.rubikMedium,
    },
    small: {
        fontSize: hp(1.6),
        color: colors.black,
        fontFamily: fonts.rubikMedium,
    },
    label: {
        fontSize: hp(1.6),
        color: colors.gray,
        fontFamily: fonts.rubikRegular,
    },
    tiny: {
        fontSize: hp(1.4),
        color: colors.black,
        fontFamily: fonts.rubikRegular,
    },
    body: {
        fontSize: hp(1.4),
        color: colors.black,
        fontFamily: fonts.rubikRegular,
    },
    medium: {
        fontSize: hp(2.4),
        color: colors.white,
        fontFamily: fonts.rubikMedium,
    }
})



requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          // {
          //   title: 'Camera Permission',
          //   message: 'App needs camera permission to take photos',
          //   buttonNeutral: 'Ask Me Later',
          //   buttonNegative: 'Cancel',
          //   buttonPositive: 'OK',
          // },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const val = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.CAMERA,
          ).then((result) => {
            if (!result) {
              Alert.alert(
                'Permission Denied',
                'Please enable camera access in your settings.',
                [
                  {text: 'Cancel', style: 'cancel'},
                  {text: 'Settings', onPress: () => this.openSettings()},
                ],
              );
              console.log('Camera permission denied');
            }
            console.log('permission result ', result);
          });
          // res
          // Alert.alert(
          //   'Permission Denied',
          //   'Please enable camera access in your settings.',
          //   [
          //     {text: 'Cancel', style: 'cancel'},
          //     {text: 'Settings', onPress: () => this.openSettings()},
          //   ],
          // );
          // console.log('Camera permission denied');
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };
