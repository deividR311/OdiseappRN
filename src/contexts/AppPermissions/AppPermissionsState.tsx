import { useEffect, useState } from 'react';
import { PermissionsState } from './AppPermissionsInterface';
import AppPermissionsContext from './AppPermissionsContext';
import { AppState, Platform } from 'react-native';
import { check, request, PERMISSIONS, PermissionStatus, openSettings } from 'react-native-permissions';

interface props {
  children : JSX.Element | JSX.Element[]
}

const PERMISSION_INITIAL_STATE: PermissionsState = {
    locationStatus: 'unavailable'
}

export const AppPermissionsState = ({ children } : props) => {
  const [permissions, setPermissions] = useState(PERMISSION_INITIAL_STATE);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if ( state !== 'active' ) return;

      checkLocationPermission();
    })
  }, [])
  

  const askLocationPermission = async () => {
    let permissionStatus : PermissionStatus;

    if ( Platform.OS === 'ios' ) {
      permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
    } else {
      permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
    }

    if ( permissionStatus === 'blocked' ) {
      openSettings();
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus
    })
  }

  const checkLocationPermission = async () => {
    let permissionStatus : PermissionStatus;

    if ( Platform.OS === 'ios' ) {
        permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
    } else {
        permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus
    })
  }

  return (
    <AppPermissionsContext.Provider value={{
        permissions,
        askLocationPermission,
        checkLocationPermission
    }}>
      { children }
    </AppPermissionsContext.Provider>
  );
};