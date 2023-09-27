import { User } from "./User";

export interface Adventure {
    idadventure: number;
    iduser: number;
    nameAdventure: string;
    transports: null;
    generalInfo: string;
    citySource: string;
    countrySource: string;
    cityDestination: string;
    countryDestination: string;
    adventureSource: string;
    adventureDestination: string;
    distance: number;
    totalCost: number;
    price: number;
    bestPhoto: string;
    typeTravel: string;
    durationDays: number;
    isVisible: boolean;
    baggage: string;
    weather: string;
    createdAt: string;
    updatedAt: string;
    user: User;
}
