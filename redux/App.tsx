import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import store from './src/redux/store';
import { Provider as ReduxProvider } from 'react-redux';

import UserList from './src/components/UserList';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ReduxProvider store={store}>
          <UserList />
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
