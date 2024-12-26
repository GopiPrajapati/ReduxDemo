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
import {useDispatch, useSelector} from 'react-redux';
import {getAllData} from '../feature/github/githubUserSlice';
import Input from './src/components/Input';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MText from '../components/Text/MText';
import colors from '../utility/colors';

const GithubDemo: FC = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.gitHubReducer);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  if (data.loading) {
    return <View></View>;
  }
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
            <TouchableOpacity
              style={styles.con}
              onPress={() => navigation?.goBack()}>
              <MText style={styles.title} kind="h2">
                GitHub
              </MText>
            </TouchableOpacity>
            <View style={{marginHorizontal: wp(4)}}>
              {/* <Input
                value={todoText}
                hint="Enter Todo Note Here"
                onChange={text => setTodoText(text)}
                rightIcon={rightIcon()}
              /> */}
            </View>
            <View style={{marginHorizontal: wp(4)}}>
              <TouchableOpacity onPress={() => dispatch(getAllData())}>
                <MText style={styles.subTitle} kind="h2">
                  GitHub Users List
                </MText>
              </TouchableOpacity>
              <FlatList
                data={data?.users}
                renderItem={item => {
                  return (
                    <View style={styles.flatListCon}>
                      <View style={styles.row}>
                        <MText
                          style={{
                            fontSize: hp(1.8),
                            textDecorationLine: 'underline',
                            color: colors.black,
                            // marginHorizontal: wp(4),
                          }}
                          kind="medium">
                          {item.item.title}
                        </MText>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            {/* <TouchableOpacity onPress={() => null}>
              <MText style={styles.subTitle} kind="medium">
                FetchTodoListAPI
              </MText>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GithubDemo;

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
});
