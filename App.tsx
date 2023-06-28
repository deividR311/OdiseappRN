import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigator/TabsNavigator';
import { AppPermissionsState } from './src/contexts/contexts';

const App = () => {
  return (
    <NavigationContainer>
      <AppPermissionsState>
      <Tabs />
      </AppPermissionsState>
    </NavigationContainer>
  )
}

export default App;