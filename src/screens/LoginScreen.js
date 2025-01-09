import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../../components/Container';
import colors from '../../utility/colors';
import MText from '../../components/text/MText';
import images from '../../utility/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import English from '../../assets/images/englishA.svg';
import Hindi from '../../assets/images/hindiA.svg';
import Gujarati from '../../assets/images/gujaratiA.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../../components/Input/Input';

const LoginScreen = () => {
  const [selectedLanguageId, setSelectedLanguageId] = useState(null);

  const [number, setNumber] = useState('');

  const handlePress = id => {
    setSelectedLanguageId(id);
  };
  const languages = [
    {
      id: '1',
      language: 'English',
      renderLocalImage: () => {
        return <English height={20} width={20} />;
      },
    },
    {
      id: '2',
      language: 'हिन्दी',
      renderLocalImage: () => {
        return <Hindi height={20} width={20} />;
      },
    },
    {
      id: '3',
      language: 'ગુજરાતી',
      renderLocalImage: () => {
        return <Gujarati height={20} width={20} />;
      },
    },
  ];
  const renderLanguages = item => {
    const {renderLocalImage, language, id} = item.item ?? {};

    return (
      <TouchableOpacity
        style={{
          flex: 0.33,
          borderRadius: hp(1.2),
          overflow: 'hidden',
          //   paddingVertical: hp(2),
          backgroundColor:
            id === selectedLanguageId ? '#45BFD3' : colors.lightGray,
          flexDirection: 'row',
          marginStart: item.index == 0 ? wp(2.2) : 0,
          marginEnd: wp(2.2),
        }}
        onPress={() => handlePress(item.item.id)}>
        <MText
          style={{
            alignSelf: 'center',
            marginStart: hp(1),
            paddingVertical: hp(2),
            color: id === selectedLanguageId ? colors.white : '#858585',
          }}
          kind="small">
          {language}
        </MText>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            marginEnd: wp(2),
          }}>
          {renderLocalImage?.()}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container style={{backgroundColor: colors.white}}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: hp(25),
              backgroundColor: colors.darkGreen,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: hp(3),
              borderBottomRightRadius: hp(3),
            }}>
            <Image
              source={images.welcomeImage}
              style={{height: hp(10), width: undefined, aspectRatio: 1}}
            />
            <MText
              kind="h3"
              style={{
                color: colors.white,
                fontSize: hp(2.4),
                marginTop: hp(1),
              }}>
              Welcome
            </MText>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              marginHorizontal: wp(4),
              marginBottom: hp(2),
              marginTop: hp(2),
              backgroundColor: 'red',
              flex: 1,
            }}>
            <View style={styles.card}>
              <MText
                kind="h3"
                style={{
                  fontSize: hp(2.2),
                }}>
                Select Language
              </MText>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <FlatList
                  data={languages}
                  numColumns={3}
                  renderItem={renderLanguages}
                />
              </View>
            </View>
            <Input
              hint={'Your Number'}
              isLabelShown={true}
              value={number}
              onChange={value => setNumber(value)}
              keyboardType={'number-pad'}
              autoCapitalize={'none'}
            />

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: colors.gray,
                alignSelf: 'flex-end',
                paddingVertical: hp(2),
                paddingHorizontal: hp(2),
                borderRadius: hp(3),
              }}>
              <SimpleLineIcons name="arrow-right" style={styles.arrow} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  card: {
    shadowOffset: {width: -5, height: 10},
    shadowOpacity: 0.3,
    shadowColor: colors.black,
    shadowRadius: 25,
    borderRadius: hp(1),
    backgroundColor: colors.white,
    zIndex: 5,
    elevation: 5,
    overflow: 'visible',
    marginHorizontal: wp(0.2),
    marginVertical: hp(1),
    marginBottom: hp(5),
    paddingHorizontal: wp(1.2),

    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'rgba(0, 0, 0, 1)',
    //     shadowOpacity: 0.5,
    //     shadowRadius: 5,
    //     shadowOffset: {
    //       height: 5,
    //       width: 5,
    //     },
    //   },
    //   android: {
    //     elevation: 5,
    //     backgroundColor: 'rgba(0, 0, 0, 1)',
    //   },
    // }),
  },

  arrow: {
    fontSize: hp(1.8),
  },
});
