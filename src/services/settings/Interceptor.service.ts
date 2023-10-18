
import { AxiosInstance } from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useI18n, useToast } from '../../shared/hooks';
import { HttpCodes } from '../../utilities/catalogs/HttpCodes';
import { HomeNavigationRoute } from '../../navigator/navigators/homeNavigator/HomeRouteInterfaces';

const { showToast } = useToast();
const { t } = useI18n();

class InterceptorService {
    navigator = useNavigation();

    constructor(private ADVENTURE_API: AxiosInstance) { }

    apiInterceptor = () => {
        this.ADVENTURE_API.interceptors.response.use(
            response => response,
            err => {
                const { response: { status } } = err;
                console.log('error', err);
                switch (status) {
                    case HttpCodes.UNAUTHORIZED:
                        this.navigator.navigate(HomeNavigationRoute.HomeScreen as never)
                        showToast(t('unauthorized'));
                        break;

                    case HttpCodes.BAD_REQUEST:
                        showToast(t('badRequest'));
                        break;

                    case HttpCodes.INTERNAL_SERVER_ERROR:
                        showToast(t('serverError'));
                        break;

                    case HttpCodes.NOT_FOUND:
                        showToast(t('notFound'));
                        break;

                    default:
                        break;
                }
            }
        )
    }
}

export default InterceptorService;