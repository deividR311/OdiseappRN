import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SeekerNavigationParams, SeekerNavigationRoute } from './SeekerRouteInterfaces';
import { SeekerScreen } from '../../../screens/Screens';

const SeekerStack = createStackNavigator<SeekerNavigationParams>();

export const SeekerStackNavigator = () => {
  return (
    <SeekerStack.Navigator initialRouteName={ SeekerNavigationRoute.SeekerScreen }>
      <SeekerStack.Screen name={ SeekerNavigationRoute.SeekerScreen } options={{ title: 'Seeker' }} component={ SeekerScreen } />
    </SeekerStack.Navigator>
  );
};