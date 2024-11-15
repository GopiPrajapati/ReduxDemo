import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoDemo from './src/navigation/stack/screens/TodoDemo';
import Product from './src/navigation/stack/screens/Product';
// import {Provider} from 'react-redux';
// import {store} from './src/app/store';

const App = () => {
  return (
    // <Provider store={store}>
    // <TodoDemo />
    <Product />
    // </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
