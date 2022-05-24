import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Details, Movie} from '../screens/Index';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default StackScreen;
