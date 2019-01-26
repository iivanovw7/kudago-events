import axios from 'axios';
import * as types from '../constants/ActionTypes'
import * as moment from 'moment';


export function fetchEvents() {

  //get data from server application (implemented in order to avoid CORS restrictions)
  return function(dispatch) {
    axios.get('/api/events')
      .then((res) => {

        dispatch({
          type: types.FETCH_EVENTS,
          payload: res
        });

      })
  };
}

export function fetchDescription(id) {

  let params = {
    id: id
  };

  //get description data from server application (implemented in order to avoid CORS restrictions)
  return function(dispatch) {
    axios.get(`/api/event/`, {params: params})
      .then((res) => {

        dispatch({
          type: types.FETCH_DESCRIPTION,
          payload: res
        });

      })
  };
}


export function fetchPlaces(options) {

  //get data from server application (implemented in order to avoid CORS restrictions)
  return function(dispatch) {
    axios.get('/api/places')
      .then((res) => {

        dispatch({
          type: types.FETCH_PLACES,
          payload: res
        });

      })
  };


}





