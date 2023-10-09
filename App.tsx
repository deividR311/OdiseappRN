import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { AppPermissionsState } from './src/contexts/contexts';
import { useToast } from './src/shared/hooks';
import { NavigatorApp } from './src/navigator/Navigator';

const App = () => {

  const { toastConfig } = useToast();

  return (
    <NavigationContainer>
      <AppPermissionsState>
        <NavigatorApp />
        <Toast config={toastConfig} />
      </AppPermissionsState>
    </NavigationContainer>
  )
}

export default App;