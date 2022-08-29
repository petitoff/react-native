import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonComp } from '../components/ButtonComp';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.body}>
        <ButtonComp title="Logout" onTap={() => console.log('logout')} />
      </View>

      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 9,
  },
  loginView: {
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    height: 400,
  },
  footer: {
    flex: 1,
  },
});
