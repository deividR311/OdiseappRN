import { AxiosInstance } from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useI18n, useToast } from '../../shared/hooks';
import { HttpCodes } from '../../utilities/catalogs/HttpCodes';
import { StackScreenProps } from '@react-navigation/stack';
import { LoginNavigationRoute } from '../../navigator/navigators/loginNavigator/LoginRouteInterfaces';

class InterceptorService {
    toast = useToast();
    i18n = useI18n();
    navigator!: StackScreenProps<any, any>;


    constructor(private ADVENTURE_API: AxiosInstance) { }

    apiInterceptor = () => {
        this.ADVENTURE_API.interceptors.response.use(
            response => response,
            err => {
                const { response: { status } } = err;
                console.log('error', err);
                switch (status) {
                    case HttpCodes.UNAUTHORIZED:
                        this.navigator.navigation.replace(LoginNavigationRoute.LoginScreen as never)
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