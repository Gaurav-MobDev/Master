import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Parent from '../Screens/Parent';
import Home from '../Screens/Home';

const ScreensStack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <ScreensStack.Navigator initialRouteName={Parent}>
        <ScreensStack.Screen name="Parent" component={Parent} />
        <ScreensStack.Screen name="Home" component={Home} />
      </ScreensStack.Navigator>
    </NavigationContainer>
  );
}
