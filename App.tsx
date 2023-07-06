import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Tabs from './src/navigator/TabsNavigator';
import { AppPermissionsState } from './src/contexts/contexts';
import { useToast } from './src/hooks/useToast';

const App = () => {

  const { toastConfig } = useToast();

  return (
    <NavigationContainer>
      <AppPermissionsState>
        <Tabs />
        <Toast config={ toastConfig }/>
      </AppPermissionsState>
    </NavigationContainer>
  )
}

export default App;