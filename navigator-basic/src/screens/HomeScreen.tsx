import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../App';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const HomeScreen = ({ route, navigation }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Test</Text>

      <View style={styles.btn}>
      <Text style={styles.textSmall}>{'Click -> '}</Text>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.textSmall}>ProfileScreen</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  textTitle: {
    fontSize: 30,
  },
  textSmall: {
    fontSize: 20,
  },
  btn:{
    flexDirection: 'row',
  }
});
