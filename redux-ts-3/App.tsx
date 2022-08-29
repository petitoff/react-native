import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/index';

import {LoginScreen} from './src/screens/LoginScreen';

export default function App() {
  return (
      <Provider store={store}><LoginScreen /></Provider>
  );
}

const styles = StyleSheet.create({});
