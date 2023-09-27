import { createContext } from 'react';
import { AdventureStateInterface } from './Interfaces';

export type AdventureContextProps = {
    adventureState: AdventureStateInterface,
    getAdventures: () => void
}

const AdventureContext = createContext<AdventureContextProps>({} as AdventureContextProps);

export default AdventureContext;