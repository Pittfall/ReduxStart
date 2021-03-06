import {STORE_RESULT, DELETE_RESULT} from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
   results: []
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case STORE_RESULT:
        return updateObject(state, { results: [...state.results, {id: Date(), value: action.result}] });
      case DELETE_RESULT:
        return updateObject(state, { results: state.results.filter(x => x.id !== action.id) });
      default:
        return state
   }
}

export default reducer;