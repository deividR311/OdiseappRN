import { Adventure } from '../models';
import BaseService from './Base.service';

class AdventureService extends BaseService {
    constructor() {
        super();
    }

    getAdventures = async () => {
        let response = await this.ADVENTURE_API.get(`adventure/getAll`);
        return response.data;
    };
}

const adventureService = new AdventureService();

export default adventureService;