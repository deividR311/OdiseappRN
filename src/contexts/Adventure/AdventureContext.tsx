import { createContext } from 'react';
import { AdventureStateInterface } from './Interfaces';
import { Adventure } from '../../models';

export type AdventureContextProps = {
    adventureState: AdventureStateInterface,
    getAdventures: () => void,
    createAdventure: (data: Adventure) => void
}

const AdventureContext = createContext<AdventureContextProps>({} as AdventureContextProps);

export default AdventureContext;