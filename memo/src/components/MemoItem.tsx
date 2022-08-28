import { Image, StyleSheet, View,Text } from 'react-native';

interface Props {
  item: {
    name: string
    src: string
  }
}

const MemoItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={item.src} style={styles.image} />
        <Text>{item.name}</Text>
      </View>
    </>
  );
};

export default MemoItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
});
