import {
  FlatList,
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MText from '../components/Text/MText';
import colors from '../utility/colors';
import Input from '../components/Input';
import {
  createUser,
  showUser,
} from '../feature/userDetailsMock/userDetailsSlice';
import {screens} from '../utility/screens';
import ReducerComponent from '../components/ReducerComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useGetUsersQuery} from '../feature/RTK/apiSlice';
import Loader from '../components/basics/Loader';

const CRUDDemoRTKQuery: FC = ({navigation}) => {
  const dispatch = useDispatch();

  //   const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');

  // const handleSubmitPress = async () => {
  //   const response dispatch(createUser({name: name, number: number, id: id}).);

  //   // navigation?.navigate(screens.GithubDemo);
  // };

  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews',
  ]);
  const handleSubmitPress = async () => {
    try {
      // Dispatch the createUser thunk and wait for it to resolve or reject
      const result = await dispatch(createUser({name, number, id})).unwrap();

      // If the API call is successful, clear the input fields
      setName('');
      setId('');
      setNumber('');
      navigation?.navigate(screens.GithubDemo);
      console.log('User created successfully:', result);
    } catch (error) {
      // If the API call fails, log the error
      console.log('Failed to create user:', error);
    }
  };
  // const data = useSelector(state => state.userDetails);

  // console.log('data', data);

  const {
    data,
    isLoading,
    isError,
    error,
    originalArgs,
    isSuccess,
    currentData,
    refetch,
  } = useGetUsersQuery(4, {
    refetchOnFocus: true,
  });
  console.log('data', data);

  // useEffect(() => {
  //   dispatch(showUser());
  // }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Loader isLoading={isLoading} />
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
                CRUD
              </MText>
            </View>
            <View style={{marginHorizontal: wp(4)}}></View>
            <View style={{marginHorizontal: wp(4)}}>
              <MText style={styles.subTitle} kind="h2">
                Enter Details
              </MText>

              <Input
                hint={'Name'}
                placeholder={'Enter Name'}
                onChange={value => setName(value)}
                value={name}
                autoCapitalize={'none'}
                isMandatory={true}
              />
              <Input
                hint={'Id'}
                placeholder={'Enter Id'}
                onChange={value => setId(value)}
                value={id}
                autoCapitalize={'none'}
                isMandatory={true}
              />
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
              <FlatList
                data={data}
                renderItem={item => {
                  const {name} = item.item ?? {};
                  return (
                    <View style={styles.flatListCon}>
                      <View style={styles.row}>
                        <MText
                          style={{
                            fontSize: hp(1.8),
                            textDecorationLine: 'underline',
                            color: colors.black,
                          }}
                          kind="medium">
                          {String(name).charAt(0).toUpperCase() +
                            String(name).slice(1)}
                        </MText>
                        <TouchableOpacity
                          style={{
                            paddingHorizontal: wp(1),
                          }}>
                          <MaterialCommunityIcons
                            name="delete"
                            style={{color: colors.black}}
                            size={hp(3)}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CRUDDemoRTKQuery;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: colors.purple, flex: 1},
  con: {
    backgroundColor: colors.purple,
    paddingBottom: hp(1),
    // marginBottom: hp(1),
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
