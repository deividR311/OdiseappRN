import { Adventure } from "../../models";

export interface AdventureStateInterface {
    adventures: Adventure[],
    adventure: Adventure | null
}