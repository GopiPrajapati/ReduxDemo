import React, {useState, useEffect} from 'react';
import {
  FlatList,
  LogBox,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../../components/Input';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MText from '../../../components/Text/MText';
import colors from '../../../utility/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoDemo = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState('');

  const addTodoHandler = () => {
    setTodoText('');
  };

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const rightIcon = () => {
    return (
      <TouchableOpacity style={styles.checkmarkCon} onPress={addTodoHandler}>
        <Ionicons name="checkmark-sharp" style={styles.checkmark} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
                Todo
              </MText>
            </View>
            <View style={{marginHorizontal: wp(4)}}>
              <Input
                value={todoText}
                hint="Enter Todo Note Here"
                onChange={text => setTodoText(text)}
                rightIcon={rightIcon()}
              />
            </View>
            <View style={{marginHorizontal: wp(4)}}>
              <MText style={styles.subTitle} kind="h2">
                Todo List
              </MText>
              <FlatList
                data={todos}
                renderItem={item => {
                  const {items} = item ?? {};
                  return (
                    <View style={styles.flatListCon}>
                      <View style={styles.row}>
                        <MText style={styles.itemTitle} kind="medium">
                          {items?.title}
                        </MText>
                        <TouchableOpacity onPress={() => null}>
                          <MaterialCommunityIcons
                            name="delete"
                            style={{fontSize: hp(2.2), color: colors.black}}
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

export default TodoDemo;

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
    marginTop: hp(1),
    borderRadius: hp(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: hp(1.8),
    textDecorationLine: 'underline',
    color: colors.white,
  },
});
