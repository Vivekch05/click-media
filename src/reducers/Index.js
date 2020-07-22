
import { combineReducers } from "redux";
import ClickMediaReducer from './ClickMediaReducer';
export default combineReducers({
  clickMediaItem: ClickMediaReducer
});