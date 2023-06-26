import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdventureNavigationParams, AdventureNavigationRoute } from './AdventureRouteInterfaces';
import { AdventureScreen } from '../../../screens/Screens';

const AdventureStack = createStackNavigator<AdventureNavigationParams>();

export const AdventureStackNavigator = () => {
  return (
    <AdventureStack.Navigator initialRouteName={ AdventureNavigationRoute.AdventureScreen }>
      <AdventureStack.Screen name={ AdventureNavigationRoute.AdventureScreen } options={{ title: 'Adventure' }} component={ AdventureScreen } />
    </AdventureStack.Navigator>
  );
};