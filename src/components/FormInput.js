import {View, Text, TextInput} from 'react-native';
import React from 'react';

const FormInput = props => {
  const {placeholder, ...more} = props;
  return (
    <View>
      <TextInput placeholder={placeholder} style={{width: more.width}} />
    </View>
  );
};

export default FormInput;