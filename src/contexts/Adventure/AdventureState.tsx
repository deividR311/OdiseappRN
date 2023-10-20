import { useReducer } from 'react';

import * as Types from '../Types';
import { AdventureStateInterface } from './Interfaces';
import adventureReducer from './AdventureReducer';
import adventureService from '../../services/Adventure.service';
import AdventureContext from './AdventureContext';
import { Adventure } from '../../models';

interface props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: AdventureStateInterface = {
  adventures: [],
  adventure: null,
  adventureCreated: null
}

const AdventureState = ({ children }: props) => {
  const [adventureState, dispatch] = useReducer(adventureReducer, INITIAL_STATE);

  const getAdventures = () => {
    adventureService.getAdventures().then(
      (response) => {
        dispatch({
          type: Types.ADVENTURES_ALL,
          payload: { ...adventureState, adventures: response }
        });
      }
    )
  };

  const createAdventure = (data: Adventure) => {
    adventureService.createAdventure(data).then(
      (response) => {
        console.log(response);
        dispatch({
          type: Types.CREATE_ADVENTURE,
          payload: { ...adventureState, adventureCreated: response }
        })
      }
    )
  }

  return (
    <AdventureContext.Provider value={{
      adventureState,
      getAdventures,
      createAdventure
    }}>
      {children}
    </AdventureContext.Provider>
  );
};

export default AdventureState;