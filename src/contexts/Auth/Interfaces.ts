import { Login } from "../../models";

export interface AuthStateInterface {
    logged: Login | null,
    status: 'checking' | 'not-authenticated' | 'authenticated',
    error: boolean,
    message: string | null
}