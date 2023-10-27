import { useReducer, useEffect } from 'react';

import * as Types from '../Types';
import { AuthStateInterface } from './Interfaces';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';
import authService from '../../services/Auth.service';
import { LoginInterface } from '../../interfaces';
import { useAsyncStorage } from '../../shared/hooks';
import { User } from '../../models';

interface props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: AuthStateInterface = {
  logged: null,
  status: 'checking',
  error: false,
  message: null
}

const AuthState = ({ children }: props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const { setStorage, getStorage, removeStorage } = useAsyncStorage();

  useEffect(() => {
    checkToken();
  }, [])

  const checkToken = async () => {
    const token = await getStorage('token');
    if (!token) return logOut();

    dispatch({
      type: Types.LOGIN,
      payload: { ...authState, logged: { user: {} as User, token }, status: 'authenticated' }
    })
  }


  const login = (data: LoginInterface) => {
    authService.login(data).then(
      (response) => {
        setStorage('token', response.token);
        dispatch({
          type: Types.LOGIN,
          payload: { ...authState, logged: response, status: 'authenticated' }
        })
      }
    ).catch(
      (err) => {
        dispatch({
          type: Types.LOGIN_ERROR,
          payload: { ...authState, error: true, message: err.response.data?.message, status: 'not-authenticated' }
        })
      }
    )
  }

  const logOut = async () => {
    await removeStorage('token');
    dispatch({
      type: Types.LOGOUT,
      payload: { ...authState, logged: null, error: false, message: null, status: 'not-authenticated' }
    })
  }

  return (
    <AuthContext.Provider value={{
      authState,
      logOut,
      login
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;