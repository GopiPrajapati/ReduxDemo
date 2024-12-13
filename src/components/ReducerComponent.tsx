import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {act, useReducer} from 'react';
import colors from '../utility/colors';
import MText from './Text/MText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ReducerComponent = () => {
  const reducer = (state, action) => {
    console.log('state,action', state, action);
    if (action.type == 'INCREMENT') {
      return state + 1;
    } else if (action.type == 'DECREMENT') {
      return state - 1;
    } else {
      return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <MText style={styles.subTitle} kind="h2">
        Reducer Counter : {counter}
      </MText>

      <TouchableOpacity
        style={{marginHorizontal: hp(2), paddingHorizontal: hp(1)}}
        onPress={() => dispatch({type: 'INCREMENT'})}>
        <MText style={[styles.subTitle, {color: colors.green3}]} kind="h2">
          +
        </MText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type: 'DECREMENT'})}>
        <MText style={[styles.subTitle, {color: colors.red}]} kind="h2">
          -
        </MText>
      </TouchableOpacity>
    </View>
  );
};

export default ReducerComponent;

const styles = StyleSheet.create({
  subTitle: {
    marginTop: hp(2),
    fontSize: hp(2.5),
    textDecorationLine: 'underline',
    color: colors.black,
  },
});
