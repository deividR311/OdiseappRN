import { Adventure } from '../../models/Adventure';
import { AdventureState } from './Interfaces';
import * as Types from '../Types';

type action = {
  type: string,
  payload: { adventures: Adventure[], adventure: Adventure | null }
}

const adventureReducer = (state: AdventureState, { type, payload }: action): AdventureState => {
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

    default:
      return state;
  }
};

export default adventureReducer;