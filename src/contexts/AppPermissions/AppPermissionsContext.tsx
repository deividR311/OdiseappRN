import { createContext } from 'react';
import { PermissionsState } from './AppPermissionsInterface';

export type AppPermissionsContextProps = {
    permissions            : PermissionsState;
    askLocationPermission  : () => void;
    checkLocationPermission: () => void;
}

const AppPermissionsContext = createContext<AppPermissionsContextProps>({} as AppPermissionsContextProps);

export default AppPermissionsContext;