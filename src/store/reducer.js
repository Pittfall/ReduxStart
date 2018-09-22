import {INCREMENT, DECREMENT, ADD_FIVE, SUBTRACT_FIVE, STORE_RESULT, DELETE_RESULT} from './ActionTypes';

const initialState = {
   counter: 0,
   results: []
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
      case STORE_RESULT:
         return { ...state, results: [...state.results, {id: Date(), value: state.counter}] }
      case DELETE_RESULT:
        return { ...state, results: state.results.filter(x => x.id !== action.id) }
      default:
         return state
   }
}

export default reducer;