import { Adventure } from '../../models/Adventure';
import * as Types from '../Types';
import { AdventureStateInterface } from './Interfaces';

type action = {
  type: string,
  payload: { adventures: Adventure[], adventure: Adventure | null, adventureCreated: Adventure | null }
}

const adventureReducer = (state: AdventureStateInterface, { type, payload }: action): AdventureStateInterface => {
  switch (type) {

    case Types.ADVENTURES_ALL:
      return {
        ...state,
        adventures: payload.adventures
      };

    case Types.ADVENTURES_ALL_ERROR:
      return {
        ...state,
        adventures: payload.adventures
      };

    case Types.CREATE_ADVENTURE:
      return {
        ...state,
        adventureCreated: payload.adventureCreated
      };

    case Types.ADVENTURES_ALL_ERROR:
      return {
        ...state,
        adventureCreated: payload.adventureCreated
      };

    default:
      return state;
  }
};

export default adventureReducer;