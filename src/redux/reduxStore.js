import { createStore, combineReducers } from "redux";
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReduser';
import usersPageReducer from "./usersPageReducer";


let reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	usersPage: usersPageReducer
});

let store = createStore(reducers);

window.store = store;




export default store;
