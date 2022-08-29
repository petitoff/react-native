import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/index';

import Login from './src/screens/login';

export default function App() {
  return (
      <Provider store={store}><Login /></Provider>
  );
}

const styles = StyleSheet.create({});
