import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './TabsNavigator';
import { LoginStackNavigator } from './navigators';
import { NavigationParams, NavigationRoute } from './NavigatorInterface';
import AuthContext from '../contexts/Auth/AuthContext';
import { CustomLoading } from '../shared/components';

const Stack = createStackNavigator<NavigationParams>();

export const NavigatorApp = () => {
    const { authState: { status } } = useContext(AuthContext);
    if (status === 'checking') return <CustomLoading></CustomLoading>;

    return (
        <Stack.Navigator>
            {(status === 'not-authenticated')
                ? <Stack.Screen name={NavigationRoute.Login} options={{ title: 'Login', headerShown: false }} component={LoginStackNavigator} />
                : <Stack.Screen name={NavigationRoute.Tabs} options={{ title: 'Tabs', headerShown: false }} component={Tabs} />
            }
        </Stack.Navigator>
    );
};