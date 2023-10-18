import { Adventure, HttpResponse } from '../models';
import BaseService from './settings/Base.service';

class AdventureService extends BaseService {
    constructor() {
        super();
    }

    getAdventures = async (): Promise<HttpResponse> => {
        let response = await this.getAll(`adventure/getAll`);
        return response?.data;
    };

    getAdventureById = async (id: number): Promise<HttpResponse> => {
        let response = await this.getById(`adventure/`, id);
        return response?.data;
    };

    createAdventure = async (url: string, data: Adventure): Promise<HttpResponse> => {
        let response = await this.post(url, data);
        return response?.data;
    }

    updateAdventure = async (url: string, data: Adventure): Promise<HttpResponse> => {
        let response = await this.put(url, data);
        return response?.data;
    }
}

const adventureService = new AdventureService();

export default adventureService;