import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawScreen from './src/components/DrawScreen';
import StackScreen from './src/components/StackScreen';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <DrawScreen />
      {/* <StackScreen /> */}
    </NavigationContainer>
  );
};

export default App;
