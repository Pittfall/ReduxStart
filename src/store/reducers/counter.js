import {INCREMENT, DECREMENT, ADD_FIVE, SUBTRACT_FIVE} from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
   counter: 0
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREMENT:
        return updateObject(state, { counter: state.counter + 1 });
      case DECREMENT:
        return updateObject(state, { counter: state.counter - 1 });
      case ADD_FIVE:
        return updateObject(state, { counter: state.counter + action.amount});
      case SUBTRACT_FIVE:
         return updateObject(state, { counter: state.counter - action.amount });
      default:
         return state
   }
}

export default reducer;