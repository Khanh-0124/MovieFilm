import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  getPopularMovies,
  getUpcomingMovies,
  getTrendingMovies,
  getTV,
} from '../services/Services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
const dimensions = Dimensions.get('screen');
const Home = ({navigation}) => {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [trending, setTrending] = useState([]);
  const [tv, setTv] = useState([]);
  const [image, setImage] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const imageArray = [];
        movies.forEach(e => {
          imageArray.push(`https://image.tmdb.org/t/p/w500${e.poster_path}`);
        });
        setImage(imageArray);
        setUpcoming(movies);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });

    getPopularMovies().then(movies => {
      setPopular(movies);
    });

    getTrendingMovies().then(movies => {
      setTrending(movies);
    });
    getTV().then(movies => {
      setTv(movies);
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={image}
          dotStyle={{height: 0}}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          sliderBoxHeight={dimensions.height / 1.75}
        />
        <List title={'Phim phổ biến'} content={popular} />
        <List title={'Sắp công chiếu'} content={upcoming} />
        <List title={'Top Trending ngày'} content={trending} />
        <List title={'Truyền hình TV'} content={tv} />
      </View>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  sliderContainer: {},
});
