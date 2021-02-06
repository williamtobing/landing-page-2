import { combineReducers } from "redux";

import navButtonReducer from "./navButton";

const allReducers = combineReducers({
  nav: navButtonReducer,
});

export default allReducers;
