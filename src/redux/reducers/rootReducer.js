import { combineReducers } from "redux";
import ProductReducer from'./ProductReducer'
import CuonterReducer from './cuonterReducer';
const rootReducer=combineReducers({
  Product : ProductReducer,
  Counter : CuonterReducer,
})
export default rootReducer