import { AxiosInstance } from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useI18n, useToast } from '../../shared/hooks';
import { HttpCodes } from '../../utilities/catalogs/HttpCodes';
import { HomeNavigationRoute } from '../../navigator/navigators/homeNavigator/HomeRouteInterfaces';
class InterceptorService {
    toast = useToast();
    i18n = useI18n();
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
                        this.toast.showToast(this.i18n.t('unauthorized'));
                        break;

                    case HttpCodes.BAD_REQUEST:
                        this.toast.showToast(this.i18n.t('badRequest'));
                        break;

                    case HttpCodes.INTERNAL_SERVER_ERROR:
                        this.toast.showToast(this.i18n.t('serverError'));
                        break;

                    case HttpCodes.NOT_FOUND:
                        this.toast.showToast(this.i18n.t('notFound'));
                        break;

                    default:
                        break;
                }
            }
        )
    }
}

export default InterceptorService;