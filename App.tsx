import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAccessoryNavigation} from 'react-native-keyboard-accessory';
import Input from './src/components/Input';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MText from './src/components/Text/MText';
const App = () => {
  const [todoText, setTodoText] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.con}>
        <MText style={styles.title} kind="h2">
          Todo List
        </MText>

        <Input
          hint="Enter Todo Note Here"
          onChange={text => setTodoText(text)}
        />
      </View>
      {Platform.OS == 'ios' && (
        <KeyboardAccessoryNavigation androidAdjustResize />
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  con: {
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: hp(3),
    textDecorationLine: 'underline',
  },
});
