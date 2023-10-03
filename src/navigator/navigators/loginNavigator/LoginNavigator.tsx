import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginNavigationParams, LoginNavigationRoute } from './LoginRouteInterfaces';
import { LoginScreen } from '../../../screens/Screens';

const LoginStack = createStackNavigator<LoginNavigationParams>();

export const LoginStackNavigator = () => {
    return (
        <LoginStack.Navigator initialRouteName={LoginNavigationRoute.LoginScreen}>
            <LoginStack.Screen name={LoginNavigationRoute.LoginScreen} options={{ title: 'Login' }} component={LoginScreen} />
        </LoginStack.Navigator>
    )
};