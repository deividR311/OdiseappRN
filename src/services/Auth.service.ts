import axios from 'axios';
import { Login } from '../models';
import { REACT_APP_API } from 'react-native-dotenv';
import { LoginInterface } from '../interfaces';

class AuthService {
    constructor() { }

    login = async (data: LoginInterface): Promise<Login> => {
        let response = await axios.post(`${REACT_APP_API}auth/login`, data);
        return response?.data.response;
    }

}

const authService = new AuthService();

export default authService;