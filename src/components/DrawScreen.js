import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {Home, FavoriteFilm, Profile} from '../screens/Index';
import StackScreen from './StackScreen';
import CustomDrawer from './CustomDrawer';
import {Icon} from 'react-native-elements';

const Drawer = createDrawerNavigator();
const size = 27;
const DrawScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        lazy: true,
        drawerLabelStyle: {marginLeft: -23},
        drawerActiveBackgroundColor: '#0496ff' + 90,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: 'black',
      }}>
      <Drawer.Screen
        name="Trang chủ"
        component={StackScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home" type="material" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Phim yêu thích"
        component={FavoriteFilm}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="favorite" type="material" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cá nhân"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person" type="ionicons" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawScreen;

const styles = StyleSheet.create({});
