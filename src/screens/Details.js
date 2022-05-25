import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState, createContext} from 'react';
import {useRoute} from '@react-navigation/native';
import {Button, Icon} from 'react-native-elements';
import {FavoriteFilm} from '../screens/Index';

const dimensions = Dimensions.get('screen');
export const context = createContext();

const Details = props => {
  const route = useRoute().params;
  const {navigation} = props;
  const url_poster = 'https://image.tmdb.org/t/p/w500';
  const [favorite, setFavorite] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: `${url_poster}${route.item.poster_path}`}}
        style={styles.image}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          marginTop: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'pink',
          width: '97%',
          alignSelf: 'center',
        }}>
        <Icon
          raised
          name="arrow-back-outline"
          type="ionicon"
          color="#f50"
          onPress={() => navigation.goBack()}
        />
        <Icon
          raised
          name={favorite ? 'favorite-border' : 'favorite'}
          type="material"
          color="#f50"
          onPress={() => {
            ToastAndroid.showWithGravity(
              favorite
                ? 'Đã thêm vào mục yêu thích'
                : 'Đã xoá khỏi mục yêu thích',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              navigation.navigate('FavoriteFilm', {item: favorite}),
            );
            setFavorite(!favorite);
          }}
        />
      </View>
      <View style={styles.viewContent}>
        <Text style={[styles.titleContent]}>{route.item.title}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Movie', {id: route.item.id})}
          style={{
            flexDirection: 'row',
            backgroundColor: '#0496ff',
            width: '35%',
            borderRadius: 40,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
              marginRight: 8,
            }}>
            Xem phim
          </Text>
          <Icon name="play" type="font-awesome-5" color="#ffd100" size={17} />
        </TouchableOpacity>
        <View style={[styles.textView]}>
          <Text style={styles.text1}>Đánh giá: </Text>
          <Icon name="star" type="material" color="#ffd100" />
          <Text style={styles.text2}> {route.item.vote_average}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text1}>Số lượng vote: </Text>
          <Text style={styles.text2}> {route.item.vote_count}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text1}>Ngày phát hành: </Text>
          <Text style={styles.text2}> {route.item.release_date} </Text>
        </View>
        <View style={[styles.textView, {flexDirection: 'column'}]}>
          <Text
            style={[
              styles.text1,
              {fontSize: 20, marginBottom: 5, marginTop: -5},
            ]}>
            Mô tả
          </Text>
          <Text style={[styles.text2]}>{route.item.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: dimensions.height / 1.7,
  },
  viewContent: {
    marginTop: 10,
  },
  titleContent: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  textView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  viewContent: {
    paddingHorizontal: 10,
  },
  text1: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
  },
  text2: {
    color: 'black',
    fontSize: 17,
    textAlign: 'justify',
  },
});
