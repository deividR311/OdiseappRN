
import { useNavigation } from '@react-navigation/native';
import BaseService from './Base.service';
import { HttpCodes } from '../../utilities/catalogs/HttpCodes';
import { HomeNavigationRoute } from '../../navigator/navigators/homeNavigator/HomeRouteInterfaces';

class InterceptorService extends BaseService {
    navigator = useNavigation();

    constructor() {
        super();
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
}

export default InterceptorService;