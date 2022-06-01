import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
// import {context} from '../screens/Details';
import {useRoute} from '@react-navigation/native';
const FavoriteFilm = props => {
  // const dataContext = useContext(context);
  // console.log(dataContext);
  const route = useRoute().params;

  return (
    <View>
      {/* <Text>{route.item.toString()}</Text> */}
      <Text>FavoriteFilm</Text>
    </View>
  );
};

export default FavoriteFilm;

const styles = StyleSheet.create({});
