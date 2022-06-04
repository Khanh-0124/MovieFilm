import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2800);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/json/34590-movie-theatre.json')}
        autoPlay
        loop
        style={styles.animation1}
      />
      <LottieView
        source={require('../assets/json/94084-pacman-loading.json')}
        autoPlay
        loop
        style={styles.animation2}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation1: {
    width: 350,
    height: 350,
  },
  animation2: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    right: 20,
  },
});
