import * as types from '../constants/ActionTypes';
import _ from 'lodash';


export default function (state = [], action) {


  switch (action.type) {
    case types.FETCH_EVENTS:

      function filterEvents(events) {

        return _.sortBy(events, function(date) {
          return new Date(date.dates[0].start)
        });

      };

      return [ filterEvents(action.payload.data.data.results), ...state ];
  }

  return state;
}




