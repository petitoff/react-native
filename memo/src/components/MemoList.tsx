import MemoItem from './MemoItem';
import Imgs from '../data/data';
import { View, FlatList } from 'react-native';

const MemoList = () => {
  return (
    <View>
      <FlatList
        data={Imgs}
        renderItem={({ item }) => <MemoItem item={item} />}
      />
    </View>
  );
};

export default MemoList;
