import { createStore, combineReducers, applyMiddleware } from "redux";
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReduser';
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	usersPage: usersPageReducer,
	auth: authReducer,
	form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;




export default store;
