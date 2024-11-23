import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utility/screens';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const RootNavigation: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={screens.HOME_STACK} component={HomeStack} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
