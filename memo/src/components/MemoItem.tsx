import { Image, StyleSheet, View,Text, Pressable } from 'react-native';

interface Props {
  item: {
    name: string
    src: string
  }
}

const MemoItem: React.FC<Props> = ({ item }) => {
  return (
    <>
    <Pressable onPress={()=>console.log("test")}>
      <View style={styles.container}>
        <Image source={item.src} style={styles.image} />
        <Text>{item.name}</Text>
      </View>
      </Pressable>
    </>
  );
};

export default MemoItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 12,
    backgroundColor: "#ccc",
  },
  image: {
    width: '100%',
    height: 250,
  },
});
