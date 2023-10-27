import { Login } from '../../models';
import * as Types from '../Types';
import { AuthStateInterface } from './Interfaces';

type action = {
  type: string,
  payload: { logged: Login | null, error: boolean, message: string | null, status: 'checking' | 'not-authenticated' | 'authenticated' }
}

const authReducer = (state: AuthStateInterface, { type, payload }: action): AuthStateInterface => {
  switch (type) {

    case Types.LOGIN:
      return {
        ...state,
        logged: payload.logged,
        status: payload.status
      };

    case Types.LOGIN_ERROR:
      return {
        ...state,
        error: payload.error,
        message: payload.message
      };

    case Types.LOGOUT:
      return {
        ...state,
        error: payload.error,
        status: payload.status
      };

    default:
      return state;
  }
};

export default authReducer;