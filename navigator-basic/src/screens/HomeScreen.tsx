import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../App';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const HomeScreen = ({ route, navigation }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>

      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text>ProfileScreen</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  }
})