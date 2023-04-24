import { combineReducers } from "redux";
import addReducer from "./addReducer";
import authReducer from "./authReducer";
import deleteReducer from "./deleteReducer";
import editReducer from "./editReducer";
import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from "react-redux-firebase";

const rootReducers = combineReducers({
  add: addReducer,
  edit: editReducer,
  delete: deleteReducer,
  auth: authReducer,
  firestore: firestoreReducer,
});
export default rootReducers;
