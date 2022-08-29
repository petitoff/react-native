import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { ApplicationState, onLogin } from '../redux/index';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { user, error } = useSelector(
    (state: ApplicationState) => state.userReducer
  );

  const { token } = user;

  console.log(token);
  console.log(user);
  console.log(error);

  const onTapLogin = () =>{
    dispatch(onLogin(email, password));
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email ID"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => {
          onTapLogin();
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
