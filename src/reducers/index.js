import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import jobsReducer from './job';
//import { reducer as formReducer } from "redux-form";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  jobs: jobsReducer
  //form: formReducer,
  // your reducer here
});
