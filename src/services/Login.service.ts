import BaseService from './settings/Base.service';

export interface LoginInput {
    email: string,
    password: string
}

class LoginService extends BaseService {
    constructor() {
        super();
    }

    login = async (data: LoginInput) => {
        let response = await this.post(`auth/login`, data);
        return response?.data;
    }

}

const loginService = new LoginService();

export default loginService;