import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {stylesHome} from './styles';

export const Home = () => {
  return (
    <SafeAreaView style={stylesHome.safeArea}>
      <View style={stylesHome.container}>
        <Text style={stylesHome.title}>Oá dev</Text>
      </View>
    </SafeAreaView>
  );
};
