import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdventureNavigationParams, AdventureNavigationRoute } from './AdventureRouteInterfaces';
import { AdventureScreen, PermissionsScreen } from '../../../screens/Screens';
import AppPermissionsContext from '../../../contexts/AppPermissions/AppPermissionsContext';
import { CustomLoading } from '../../../shared/components/sharedComponents';

const AdventureStack = createStackNavigator<AdventureNavigationParams>();

export const AdventureStackNavigator = () => {

  const { permissions } = useContext(AppPermissionsContext);

  if ( permissions.locationStatus === 'unavailable' ) {
    return <CustomLoading></CustomLoading>
  }

  return (
    <AdventureStack.Navigator>
      {
        (permissions.locationStatus === 'granted')
        ? <AdventureStack.Screen name={ AdventureNavigationRoute.AdventureScreen } options={{ title: 'Adventure' }} component={ AdventureScreen } />
        : <AdventureStack.Screen name={ AdventureNavigationRoute.PermissionsScreen } options={{ title: 'Permissions' }} component={ PermissionsScreen } />
      }
    </AdventureStack.Navigator>
  );
};