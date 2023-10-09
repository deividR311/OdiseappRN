import { Adventure } from '../models';
import BaseService from './settings/Base.service';

class AdventureService extends BaseService {
    constructor() {
        super();
    }

    getAdventures = async () => {
        let response = await this.get(`adventure/getAll`);
        return response?.data;
    };

    createAdventure = async (data: Adventure) => {
        let response = await this.post(`adventure/382`, data);
        return response?.data;
    }

}

const adventureService = new AdventureService();

export default adventureService;