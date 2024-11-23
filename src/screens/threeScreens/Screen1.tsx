import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../utility/colors';
import MText from '../../components/Text/MText';
import Input from '../../components/Input';
import {useDispatch} from 'react-redux';
import {
  addUserDetails,
  showUser,
} from '../../feature/userDetailsMock/userDetailsSlice';

const Screen1: FC = ({navigation}) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  const handleSubmitPress = () => {
    dispatch(addUserDetails(name));
    navigation.navigate('Screen2');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        hidden={false}
        backgroundColor={colors.purple}
        translucent={false}
        barStyle={'light-content'}
      />
      <View style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: colors.white,
          }}>
          <View>
            <View style={styles.con}>
              <MText style={styles.title} kind="h2">
                Name
              </MText>
            </View>

            <View style={{marginHorizontal: wp(4)}}>
              <Input
                hint={'Name'}
                placeholder={'Enter Name'}
                onChange={value => setName(value)}
                value={name}
                autoCapitalize={'none'}
                isMandatory={true}
              />

              <TouchableOpacity
                style={styles.submitCon}
                onPress={handleSubmitPress}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.purple, flex: 1},
  con: {
    backgroundColor: colors.purple,
    paddingBottom: hp(1),
  },
  title: {
    fontSize: hp(3.5),
    textDecorationLine: 'underline',
    color: colors.white,
    marginHorizontal: wp(4),
  },
  checkmark: {
    fontSize: hp(2),
  },
  checkmarkCon: {
    paddingHorizontal: hp(0.6),
    paddingVertical: hp(0.6),
    marginVertical: hp(1),
    borderRadius: hp(1),
    borderColor: colors.black,
    borderWidth: hp(0.15),
  },
  subTitle: {
    marginTop: hp(2),
    fontSize: hp(2.5),
    textDecorationLine: 'underline',
    color: colors.black,
  },
  flatListCon: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    backgroundColor: '#846fb070',
    marginVertical: hp(1),
    borderRadius: hp(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitCon: {
    backgroundColor: colors.purple,
    marginVertical: hp(2),
    alignItems: 'center',
    paddingVertical: hp(1),
    borderRadius: hp(1),
  },
  submitText: {
    fontWeight: '500',
    fontSize: hp(2.5),
    textDecorationLine: 'underline',
    color: colors.white,
  },
});
