export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD_FIVE = "ADD_FIVE"
export const SUBTRACT_FIVE = "SUBTRACT_FIVE"
export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"

export const increment = () => {
   return {
      type: INCREMENT
   };
}

export const decrement = () => {
   return {
      type: DECREMENT
   };
}

export const add_five = (value) => {
   return {
      type: ADD_FIVE,
      amount: value
   };
}

export const subtract_five = (value) => {
   return {
      type: SUBTRACT_FIVE,
      amount: value
   };
}

export const store_results = (value) => {
   return {
      type: STORE_RESULT,
      result: value
   };
}

export const delete_results = (idToDelete) => {
   return {
      type: DELETE_RESULT,
      id: idToDelete
   };
}