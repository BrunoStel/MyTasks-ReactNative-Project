import React from 'react';
import {Text, View} from 'react-native';
import {stylesHome} from './styles';

export const Home = () => {
  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.title}>Oá dev</Text>
    </View>
  );
};
