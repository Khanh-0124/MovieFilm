import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Details,
  Movie,
  FavoriteFilm,
  Search,
  SignUpScreen,
  SignInScreen,
  SplashScreen,
} from '../screens/Index';
import ModalForm from './ModalForm';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="Flash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FavoriteFilm"
        component={FavoriteFilm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
