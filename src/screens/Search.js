import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {useRoute} from '@react-navigation/native';

const Search = props => {
  const {navigation} = props;
  const [data, setData] = useState(['a', 'b', '1', '2']);
  const route = useRoute().params;
  return (
    <View style={styles.container}>
      <Icon
        raised
        name="arrow-back-outline"
        type="ionicon"
        color="#333"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.viewInput}>
        <TextInput placeholder="Nhập tìm kiếm" style={styles.input} />
        <TouchableOpacity>
          <Icon name="search" style={styles.iconSearch} size={27} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          numColumns="3"
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  viewInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#33',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 47,
  },
  input: {
    width: '90%',
  },
  iconSearch: {
    alignSelf: 'center',
  },
});
