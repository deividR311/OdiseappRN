import axios, { AxiosInstance } from 'axios';
import { REACT_APP_API } from 'react-native-dotenv';
import { useNavigation } from '@react-navigation/native';
import InterceptorService from './Interceptor.service';


class BaseService {
    ADVENTURE_API: AxiosInstance;
    interceptor: InterceptorService;
    navigator = useNavigation();

    constructor() {
        this.ADVENTURE_API = axios.create({
            baseURL: `${REACT_APP_API}`,
            timeout: 15000,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMSIsImlhdCI6MTY5Nzc0MDU5OSwiZXhwIjoxNzAwMzMyNTk5fQ.Iye5ckPIf6H8W7vzWezbHEdGdbZe0yf2HMkxCRPHHFs'
            }
        });

        this.interceptor = new InterceptorService(this.ADVENTURE_API);

        this.interceptor.apiInterceptor();
    }

    async getAll(url: string) {
        return await this.ADVENTURE_API.get(url);
    }

    async getById(url: string, id: number) {
        return await this.ADVENTURE_API.get(`${url}${id}`);
    }

    async post(url: string, data: Object) {
        return await this.ADVENTURE_API.post(url, data);
    }

    async put(url: string, data: Object) {
        return await this.ADVENTURE_API.put(url, data);
    }
}

export default BaseService;