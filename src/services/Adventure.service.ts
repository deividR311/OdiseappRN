import { Adventure, HttpResponse } from '../models';
import BaseService from './settings/Base.service';

class AdventureService extends BaseService {
    constructor() {
        super();
    }

    getAdventures = async (): Promise<Adventure[]> => {
        let response = await this.getAll(`adventure/getAll`);
        return response?.data.response;
    };

    getAdventureById = async (id: number): Promise<Adventure> => {
        let response = await this.getById(`adventure/`, id);
        return response?.data.response;
    };

    createAdventure = async (data: Adventure): Promise<Adventure> => {
        let response = await this.post(`adventure/create`, data);
        return response?.data.response;
    }

    updateAdventure = async (url: string, data: Adventure): Promise<Adventure> => {
        let response = await this.put(url, data);
        return response?.data.response;
    }
}

const adventureService = new AdventureService();

export default adventureService;