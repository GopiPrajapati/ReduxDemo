import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppTwo from './TodoDemo';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppTwo />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
