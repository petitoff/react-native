import { StyleSheet, View, Text } from "react-native";

interface Props {
  item: {
    index: number;
    item: string;
  };
}
const GoalItem = ({ item }: Props) => {
  return (
    <View key={item.index} style={styles.goalItems}>
      <Text style={styles.goalText}>{item.item}</Text>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
