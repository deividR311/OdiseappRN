import axios, { AxiosInstance } from 'axios';
import { REACT_APP_API } from 'react-native-dotenv';
import { HttpCodes } from '../utilities/catalogs/HttpCodes';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationRoute } from '../navigator/navigators/homeNavigator/HomeRouteInterfaces';


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

        this._apiInterceptor();
    }

    private _apiInterceptor = () => {
        this.ADVENTURE_API.interceptors.response.use(
            response => response,
            err => {
                const { response: { status } } = err;

                switch (status) {
                    case HttpCodes.UNAUTHORIZED:
                        this.navigator.navigate(HomeNavigationRoute.HomeScreen as never)
                        return console.log(status);

                    default:
                        break;
                }
            }
        )
    }

    async get(url: string) {
        return await this.ADVENTURE_API.get(url);
    }

    async post(url: string, data: Object) {
        return await this.ADVENTURE_API.post(url, data);
    }
}

export default BaseService;