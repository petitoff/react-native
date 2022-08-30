import { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { incrementCounter } from '../redux/reducers/numberSlice';

const Home = () => {
  const dispatch = useDispatch();
  const screenSelector = useSelector((state: RootState) => state.numberSlice);

  const handlePress = () => {
    dispatch(incrementCounter());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{screenSelector.counter}</Text>
      <Pressable onPress={() => handlePress()}>
        <Text style={styles.text}>Click</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 25,
  },
  text: {
    fontSize: 24,
  },
});
