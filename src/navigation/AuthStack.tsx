import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../utility/screens';
import CRUDDemo from '../screens/CRUDDemo';
import {StyleSheet} from 'react-native';
import GithubDemo from '../screens/GithubDemo';
import Screen1 from '../screens/threeScreens/Screen1';
import Screen2 from '../screens/threeScreens/Screen2';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={screens.CRUDDemo} component={CRUDDemo} /> */}
      {/* <Stack.Screen name={screens.GithubDemo} component={GithubDemo} /> */}
      {/* <Stack.Screen name="Screen1" component={Screen1} /> */}
      {/* <Stack.Screen name="Screen2" component={Screen2} /> */}
      <Stack.Screen name={screens.CRUDDemo} component={CRUDDemo} />
    </Stack.Navigator>
  );
};
export default AuthStack;

const styles = StyleSheet.create({});
