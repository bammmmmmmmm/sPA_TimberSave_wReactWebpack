import { combineReducers } from "redux";
import CaseReducer from "./reducer_case-eval";
import SolnReducer from "./reducer_matched-solns";
import selectedSoln from "./reducer_selected-soln";

const allReducers = combineReducers({
  case: CaseReducer,
  solutions: SolnReducer,
  currentSoln: selectedSoln
});

export default allReducers;
