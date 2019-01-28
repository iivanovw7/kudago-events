import { combineReducers } from 'redux';
import events from './events';
import places from './places';
import description from './description';
import page from './page';


const rootReducer = combineReducers({

  events, places, description, page

});

export default rootReducer;