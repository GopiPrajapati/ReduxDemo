import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import GithuDemo from './src/screens/GithuDemo';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <GithuDemo />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
