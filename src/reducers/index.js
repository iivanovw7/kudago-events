import { combineReducers } from 'redux';
import events from './events';
import places from './places';
import description from './description';



const rootReducer = combineReducers({

  events, places, description

});

export default rootReducer;