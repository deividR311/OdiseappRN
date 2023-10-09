import axios, { AxiosInstance } from 'axios';
import { REACT_APP_API } from 'react-native-dotenv';
import { useNavigation } from '@react-navigation/native';


class BaseService {
    ADVENTURE_API: AxiosInstance;
    navigator = useNavigation();

    constructor() {
        this.ADVENTURE_API = axios.create({
            baseURL: `${REACT_APP_API}`,
            timeout: 15000,
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

    async get(url: string) {
        return await this.ADVENTURE_API.get(url);
    }

    async post(url: string, data: Object) {
        return await this.ADVENTURE_API.post(url, data);
    }
}

export default BaseService;