import { createStore, combineReducers, applyMiddleware } from "redux";
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReduser';
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';


let reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	usersPage: usersPageReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;




export default store;
