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

import { ButtonComp } from '../components/ButtonComp';
import { TextField } from '../components/TextField';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { user, error } = useSelector(
    (state: ApplicationState) => state.userReducer
  );

  const { token } = user;

  // console.log(token);
  console.log(user);

  // email: test@test.com
  // pass: 1234567

  const onTapLogin = () => {
    dispatch(onLogin(email, password));
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.loginView}>
          <TextField placeholder="Email" onTextChange={setEmail} />
          <TextField
            placeholder="Password"
            onTextChange={setPassword}
            isSecure={true}
          />
          <ButtonComp title="Login" onTap={onTapLogin} />

          {token !== undefined && (
            <Text style={{ marginLeft: 20, marginRight: 20 }}>
              {JSON.stringify(user)}
            </Text>
          )}
        </View>
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
  },
  body: {
    flex: 9,
  },
  loginView: {
    marginTop: 200,
  },
  footer: {
    flex: 1,
  },
});
