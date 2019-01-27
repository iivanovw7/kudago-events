import * as types from '../constants/ActionTypes';

export default function (state = {loaded: false, data: null}, action) {


  switch (action.type) {
    case types.FETCH_DESCRIPTION:
      return {
        loaded: true,
        data: action.payload.data
      }
  }

  return state;
}