import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigationParams, HomeNavigationRoute } from './HomeRouteInterfaces';
import { HomeScreen } from '../../../screens/Screens';

const HomeStack = createStackNavigator<HomeNavigationParams>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={ HomeNavigationRoute.HomeScreen }>
      <HomeStack.Screen name={ HomeNavigationRoute.HomeScreen } options={{ title: 'Home' }} component={ HomeScreen } />
    </HomeStack.Navigator>
  );
};