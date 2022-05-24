import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const image_empty = require('../assets/film_empty.jpg');

const Card = props => {
  const navigation = useNavigation();
  const {item} = props;
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', {item});
            }}>
            <Image
              style={styles.image}
              source={
                item.poster_path
                  ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  : image_empty
              }
            />
          </TouchableOpacity>

          {item.poster_path && (
            <View style={styles.title}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                {item.original_title || item.original_name}
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    marginTop: 5,
    width: 120,
    alignItems: 'center',
    height: 60,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});
