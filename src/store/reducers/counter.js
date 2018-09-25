import {INCREMENT, DECREMENT, ADD_FIVE, SUBTRACT_FIVE} from '../actions/actions';

const initialState = {
   counter: 0
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREMENT:
        return { ...state, counter: state.counter + 1 }
      case DECREMENT:
         return { ...state, counter: state.counter - 1 }
      case ADD_FIVE:
         return { ...state, counter: state.counter + action.amount }
      case SUBTRACT_FIVE:
         return { ...state, counter: state.counter - action.amount }
      default:
         return state
   }
}

export default reducer;