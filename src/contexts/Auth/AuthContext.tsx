import { createContext } from 'react';
import { AuthStateInterface } from './Interfaces';
import { LoginInterface } from '../../interfaces';

export type AuthContextProps = {
    authState: AuthStateInterface,
    login: (data: LoginInterface) => void,
    logOut: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;