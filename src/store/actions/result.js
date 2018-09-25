import * as actionTypes from './actionTypes';

export const store_results = (value) => {
   return dispatch => {
      setTimeout(() => {
         dispatch({type: actionTypes.STORE_RESULT, result: value})
      }, 2000);
   }
}

export const delete_results = (idToDelete) => {
   return {
      type: actionTypes.DELETE_RESULT,
      id: idToDelete
   };
}