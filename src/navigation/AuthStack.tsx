import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utility/screens';
import CRUDDemo from '../screens/CRUDDemo';
import {StyleSheet} from 'react-native';
import GithubDemo from '../screens/GithubDemo';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={screens.SPLASH} component={Splash} /> */}
      <Stack.Screen name={screens.CRUDDemo} component={CRUDDemo} />
      <Stack.Screen name={screens.GithubDemo} component={GithubDemo} />
    </Stack.Navigator>
  );
};
export default AuthStack;

const styles = StyleSheet.create({});
