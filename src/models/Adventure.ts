import { User } from "./User";

export interface Adventure {
    idadventure?: number;
    iduser: number;
    nameAdventure: string;
    transports: null;
    generalInfo: string | null;
    citySource: string | null;
    countrySource: string | null;
    cityDestination: string | null;
    countryDestination: string | null;
    adventureSource: string | null;
    adventureDestination: string | null;
    distance: number | null;
    totalCost: number | null;
    price: number | null;
    bestPhoto: string | null;
    typeTravel: string | null;
    durationDays: number | null;
    isVisible: boolean;
    baggage: string | null;
    weather: string | null;
    createdAt?: string;
    updatedAt?: string;
    user?: User;
}
