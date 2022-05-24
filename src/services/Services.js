import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '6ca6a602284a72b57f9ba91fd2103cd8&language=vi-US&page=1';

//get popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  return resp.data.results;
};

//get Upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}`);
  return resp.data.results;
};

//get Upcoming movies
export const getTrendingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/trending/all/day?api_key=${apiKey}`);
  return resp.data.results;
};
//get Tv show
export const getTV = async () => {
  const resp = await axios.get(`${apiUrl}/tv/airing_today?api_key=${apiKey}`);
  return resp.data.results;
};

const styles = StyleSheet.create({});
