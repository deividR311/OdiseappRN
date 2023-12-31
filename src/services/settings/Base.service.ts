import axios, { AxiosInstance } from 'axios';
import { REACT_APP_API } from 'react-native-dotenv';
import { useNavigation } from '@react-navigation/native';
import InterceptorService from './Interceptor.service';
import { useAsyncStorage } from '../../shared/hooks';

class BaseService {
    ADVENTURE_API: AxiosInstance;
    interceptor: InterceptorService;
    navigator = useNavigation();
    asyncStorage = useAsyncStorage();

    constructor() {
        this.ADVENTURE_API = axios.create({
            baseURL: `${REACT_APP_API}`,
            timeout: 15000,
            headers: {
                'Content-type': 'application/json',
                'Authorization': this._getToken()
            }
        });

        this.interceptor = new InterceptorService(this.ADVENTURE_API);

        this.interceptor.apiInterceptor();
        console.log(this._getToken());
    }

    private _getToken = () => {
        let token: string | null | undefined = null;
        this.asyncStorage.getStorage('token').then(
            res => {
                token = res;
            }
        );

        return token;
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