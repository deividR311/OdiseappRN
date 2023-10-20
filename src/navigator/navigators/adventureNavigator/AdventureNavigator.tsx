import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdventureNavigationParams, AdventureNavigationRoute } from './AdventureRouteInterfaces';
import { AdventureScreen, PermissionsScreen } from '../../../screens/Screens';
import AppPermissionsContext from '../../../contexts/AppPermissions/AppPermissionsContext';
import { CustomLoading } from '../../../shared/components';
import AdventureState from '../../../contexts/Adventure/AdventureState';

const AdventureStack = createStackNavigator<AdventureNavigationParams>();

export const AdventureStackNavigator = () => {

  const { permissions } = useContext(AppPermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <CustomLoading></CustomLoading>
  }

  return (
    <AdventureState>
      <AdventureStack.Navigator>
        {
          (permissions.locationStatus === 'granted')
            ? <AdventureStack.Screen name={AdventureNavigationRoute.AdventureScreen} options={{ title: 'Adventure', headerShown: false }} component={AdventureScreen} />
            : <AdventureStack.Screen name={AdventureNavigationRoute.PermissionsScreen} options={{ title: 'Permissions', headerShown: false }} component={PermissionsScreen} />
        }
      </AdventureStack.Navigator>
    </AdventureState>
  );
};