import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabsNavigator';
import { LoginStackNavigator } from './navigators';
import { NavigationParams, NavigationRoute } from './NavigatorInterface';

const Stack = createStackNavigator<NavigationParams>();

export const NavigatorApp = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name={NavigationRoute.Tabs} options={{ title: 'Login' }} component={LoginStackNavigator} /> */}
            <Stack.Screen name={NavigationRoute.Login} options={{ title: 'Tabs', headerShown: false }} component={Tabs} />
        </Stack.Navigator>
    );
};