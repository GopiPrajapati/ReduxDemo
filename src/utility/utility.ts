// import { Alert, Dimensions, Linking, PermissionsAndroid, Platform } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FCM_TOKEN } from "../constants/constants";
// import moment from 'moment';
// import Clipboard from "@react-native-clipboard/clipboard";
// import SimpleToast from 'react-native-simple-toast';
// import { FCM_TOKEN } from './constants';
// import { BottomSheetListItems } from '../interfaces/BottomSheetListItemProps';
// import images from './images';
// import RNFetchBlob from 'rn-fetch-blob';
// import NavigationService from '../navigation/NavigationService';
// import { screens } from './screens';


export const storeData = async (key: string, value: String) => {
    try {
        if (!value) return;
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
    }
};

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
    }
};

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
    }
};

export const clearAllData = async () => {
    try {
        await AsyncStorage.getAllKeys().then(keys => {
            keys.forEach(key => {
                if (key != FCM_TOKEN) AsyncStorage.removeItem(key);
            });
        });
    } catch (error) {
        console.log('\n\n error in getting data from AsyncStorage', error);
    }
};

// export const copyToClipboard = (link: string) => {
//     Clipboard.setString(link);
//     if (Platform.OS == 'ios') toastMessage("Copied")
//     else if (Platform.Version < 33) toastMessage("Copied")
// };

// const IPHONE6_SCREEN_WIDTH = 375;
// const IPHONE6_SCREEN_HEIGHT = 667;

// export const scaleWidth = (width: number) => {
//     return Dimensions.get('screen').width / IPHONE6_SCREEN_WIDTH * width;
// };

// export const scaleHeight = (height: number) => {
//     return Dimensions.get('screen').width / IPHONE6_SCREEN_WIDTH * height;
// };

// export const scaleX = scaleWidth;

// export const scaleY = (height: number) =>
//     Dimensions.get('screen').height / IPHONE6_SCREEN_HEIGHT * height;

// export const scaleFont = scaleWidth;

// export const formatDate = (date: string, format = 'lll') => moment(date).format(format);

// export const normalDateFormat = (date: string, format = 'DD MMMM YYYY') => moment(date).format(format);

// export const getString = (number: number) => (number > 1 ? 's' : '');

// export const toastMessage = (msg: string) => {
//     SimpleToast.show(msg, SimpleToast.SHORT);
// };


// export const openURL = async (link?: string) => {
//     try {
//         if (!link) return
//         await Linking.openURL(link)
//     } catch (error) {
//     }
// }

// export const getFileName = (url: string) => url.split('/').pop();

// export const handleDownloadResumeForIos = async (bottomSheetRef: any, resume: string) => {
//     try {
//         console.log('bottomSheetRef=>>', JSON.stringify(bottomSheetRef, null, 4));
//         console.log('resume=>>', JSON.stringify(resume, null, 4));
//         bottomSheetRef.current?.close();
//         const { config, fs } = RNFetchBlob;
//         const downloads = Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
//         const path = downloads + `/${Date.now()}-${getFileName?.(resume)}`;


//         const res = await config({
//             fileCache: true,
//             path,
//             addAndroidDownloads: {
//                 useDownloadManager: true,
//                 path,
//                 notification: true,
//             },
//         }).fetch('GET', resume)
//         if (res?.respInfo?.status == 404) {
//             return toastMessage("Resume not found")
//         }
//         if (Platform.OS === 'ios')
//             RNFetchBlob.ios.previewDocument('file:///' + res.path());
//     } catch (error) {
//         if (Number(Platform.Version) == 33) toastMessage("Resume not found")
//         console.log('error while handleDownloadResume=>>', error);
//         // alert(error?.message?.() ?? SWR);
//     }
// };

// export const handleDownloadResume = async (bottomSheetRef: any, resume: string) => {
//     try {
//         if (Platform.OS == 'ios' || Number(Platform.Version) <= 33) return handleDownloadResumeForIos(bottomSheetRef, resume)
//         bottomSheetRef.current?.close();
//         const { dirs } = RNFetchBlob.fs;
//         const downloads = dirs.DownloadDir;
//         const path = downloads + `/${Date.now()}-${getFileName?.(resume)}`;


//         const configfb = {
//             fileCache: true,
//             useDownloadManager: true,
//             notification: true,
//             mediaScannable: true,
//             path: path,
//         };

//         const configOptions = Platform.select({
//             ios: configfb,
//             android: configfb,
//         });
//         await RNFetchBlob.config(
//             configOptions || {})
//             .fetch('GET', resume, {})
//             .then(res => {
//                 if (res?.respInfo?.status == 404) toastMessage("Resume Not Found")
//                 if (res?.respInfo?.status == 200) toastMessage("Resume Downloaded Successfully")
//             })
//             .catch(e => {
//                 console.log('Resume Download==>', e);
//             });
//     } catch (error) {
//         console.log('Resume Download error==>', error);
//     }
// };


// export const handleViewResumePress = async (bottomSheetRef: any, resume: string) => {
//     bottomSheetRef.current?.close();
//     NavigationService.navigate(screens.VIEW_RESUME, { uri: resume })
// }


// export const MoreActions = (resume: string) => {

//     const MORE_ACTIONS: Array<BottomSheetListItems> = [
//         {
//             title: 'View Resume',
//             subTitle: 'You can view resume From Here',
//             onPress: (bottomSheetRef) => handleViewResumePress(bottomSheetRef, resume),
//             image: images.viewResume,
//         },
//         {
//             title: 'Download Resume',
//             subTitle: 'You can download resume From Here',
//             onPress: (bottomSheetRef) => handleDownloadResume(bottomSheetRef, resume),
//             image: images.downloadResume,
//         },
//     ]

//     return MORE_ACTIONS

// }