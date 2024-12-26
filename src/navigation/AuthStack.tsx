import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import CRUDDemoRTKQuery from '../screens/CRUDDemoRTKQuery';
import GithubDemo from '../screens/GithubDemo';
import {screens} from '../utility/screens';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
  // // "postinstall": "cd ios && pod install && cd .."
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name={screens.CRUDDemo} component={CRUDDemo} /> */}
      {/* <Stack.Screen name={screens.GithubDemo} component={GithubDemo} /> */}
      {/* <Stack.Screen name="Screen1" component={Screen1} /> */}
      {/* <Stack.Screen name="Screen2" component={Screen2} /> */}
      {/* <Stack.Screen name={screens.CRUDDemo} component={CRUDDemo} /> */}
      <Stack.Screen
        name={screens.CRUDDemoRTKQuery}
        component={CRUDDemoRTKQuery}
      />
      <Stack.Screen name={screens.GithubDemo} component={GithubDemo} />
    </Stack.Navigator>
  );
};
export default AuthStack;

const styles = StyleSheet.create({});
