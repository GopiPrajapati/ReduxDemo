import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import GithuDemo from './src/screens/GithubDemo';
import {store} from './src/app/store';
import CRUDDemo from './src/screens/CRUDDemo';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation />
        {/* <CRUDDemo /> */}
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
