import axios, { AxiosInstance } from 'axios';
import { REACT_APP_API } from 'react-native-dotenv';

class BaseService {
    ADVENTURE_API: AxiosInstance;

    constructor() {
        this.ADVENTURE_API = axios.create({
            baseURL: `${REACT_APP_API}`,
            timeout: 15000,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMSIsImlhdCI6MTY5NTg0OTMzNiwiZXhwIjoxNjk4NDQxMzM2fQ.-wjAahUN228_oZTVKSc_zRKwsdn-ZkaqFGUXztfzHls'
            }
        });
    }
}

export default BaseService;