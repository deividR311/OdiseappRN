import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileNavigationParams, ProfileNavigationRoute } from './ProfileRouteInterfaces';
import { ProfileScreen } from '../../../screens/Screens';

const ProfileStack = createStackNavigator<ProfileNavigationParams>();

export const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName={ ProfileNavigationRoute.ProfileScreen }>
      <ProfileStack.Screen name={ ProfileNavigationRoute.ProfileScreen } options={{ title: 'Profile' }} component={ ProfileScreen } />
    </ProfileStack.Navigator>
  );
};