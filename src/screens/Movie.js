import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const Movie = () => {
  const route = useRoute().params;

  return (
    <>
      <StatusBar hidden={true} />
      <WebView
        source={{uri: `https://www.2embed.ru/embed/tmdb/movie?id=${route.id}`}}
      />
    </>
  );
};

export default Movie;

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
