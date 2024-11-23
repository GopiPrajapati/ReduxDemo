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
import {
  addUserNumber,
  createUser,
} from '../../feature/userDetailsMock/userDetailsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {screens} from '../../utility/screens';

const Screen2: FC = ({navigation}) => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state?.userDetails);
  const handleSubmitPress = () => {
    dispatch(addUserNumber(number));
    dispatch(createUser({number: data.number, name: data.name, id: 23}));
    navigation.navigate(screens.CRUDDemo);
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
                Number
              </MText>
            </View>

            <View style={{marginHorizontal: wp(4)}}>
              <Input
                hint={'Number'}
                placeholder={'Enter Number'}
                onChange={value => setNumber(value)}
                value={number}
                keyboardType={'number-pad'}
                maxLength={10}
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

export default Screen2;

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
