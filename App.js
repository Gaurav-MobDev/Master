/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import Router from './src/Navigation/Router';
const App = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Router />
    </View>
  );
};

export default App;
