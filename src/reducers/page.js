import { SWITCH_PAGE } from '../constants/ActionTypes'

let initialState = 1;

export default function (state = initialState, action) {
  switch(action.type) {

    case SWITCH_PAGE:
      return action.payload;

  }

  return state;
}