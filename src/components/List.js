import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';

const List = props => {
  const {title, content} = props;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <FlatList
        data={content}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },

  textTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
  },
});
