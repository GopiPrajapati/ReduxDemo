import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from './src/components/Input';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MText from './src/components/Text/MText';
import colors from './src/utility/colors';
const App = () => {
  const [todoText, setTodoText] = useState('');
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1, backgroundColor: colors.white}}>
          <View>
            <View style={styles.con}>
              <MText style={styles.title} kind="h2">
                Todo
              </MText>
            </View>
            <View style={{marginHorizontal: wp(4)}}>
              <Input
                hint="Enter Todo Note Here"
                onChange={text => setTodoText(text)}
              />
            </View>
          </View>
          {/* {Platform.OS == 'ios' && (
            <KeyboardAccessoryNavigation androidAdjustResize />
          )} */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

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
});
