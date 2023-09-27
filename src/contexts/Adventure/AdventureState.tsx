import { useReducer } from 'react';

import * as Types from '../Types';
import { AdventureStateInterface } from './Interfaces';
import adventureReducer from './AdventureReducer';
import adventureService from '../../services/Adventure.service';
import AdventureContext from './AdventureContext';

interface props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: AdventureStateInterface = {
  adventures: [],
  adventure: null
}

const AdventureState = ({ children }: props) => {
  const [adventureState, dispatch] = useReducer(adventureReducer, INITIAL_STATE);

  const getAdventures = () => {
    adventureService.getAdventures().then(
      (response) => {
        console.log(response);
        dispatch({
          type: Types.ADVENTURES_ALL,
          payload: { adventures: response, adventure: null }
        });
      }
    ).catch(err => {
      dispatch({
        type: Types.ADVENTURES_ALL_ERROR,
        payload: { adventures: [], adventure: null }
      });
    })
  };

  return (
    <AdventureContext.Provider value={{
      adventureState,
      getAdventures
    }}>
      {children}
    </AdventureContext.Provider>
  );
};

export default AdventureState;