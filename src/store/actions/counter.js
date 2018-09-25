import * as actionTypes from './actionTypes';

export const increment = () => {
   return {
      type: actionTypes.INCREMENT
   };
}

export const decrement = () => {
   return {
      type: actionTypes.DECREMENT
   };
}

export const add_five = (value) => {
   return {
      type: actionTypes.ADD_FIVE,
      amount: value
   };
}

export const subtract_five = (value) => {
   return {
      type: actionTypes.SUBTRACT_FIVE,
      amount: value
   };
}