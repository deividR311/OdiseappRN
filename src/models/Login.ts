import { User } from "./User";

export interface Login {
    status: string;
    message: string;
    response: Response;
}

export interface Response {
    user: User;
    token: string;
}

