import {INCREMENT, DECREMENT, ADD_FIVE, SUBTRACT_FIVE} from './ActionTypes';

const initialState = {
   counter: 0
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREMENT:
      return { counter: state.counter + 1 }
      case DECREMENT:
         return { counter: state.counter - 1 }
      case ADD_FIVE:
         return { counter: state.counter + action.amount }
      case SUBTRACT_FIVE:
         return { counter: state.counter - action.amount }
      default:
         return state
   }
}

export default reducer;