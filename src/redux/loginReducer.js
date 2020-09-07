// import { authApi } from "../API/api";
// import { authThunk } from './authReducer'


// const POST_LOGIN_DATA = 'POST_LOGIN_DATA';

// let initialState = {
// 	email: '',
// 	password: '',
// 	rememberMe: ''
// }


// const loginReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case POST_LOGIN_DATA: {
// 			return {
// 				...state,
// 				email: action.formData.email,
// 				password: action.formData.password,
// 				rememberMe: action.formData.rememberMe
// 			}
// 		}


// 		default: return state
// 	}
// }

// export const postLoginData = (formData) => ({ type: POST_LOGIN_DATA, formData })


// export const loginThunk = (email, password, rememberMe) => {
// 	return (dispatch) => {
// 		authApi.login(email, password, rememberMe)
// 			.then(response => {
// 				if (response.data.resultCode === 0) {
// 					dispatch(authThunk())
// 				}
// 			})
// 	}
// }

// export const loginOutThunk = () => {
// 	return (dispatch) => {
// 		authApi.loginOut()
// 			.then(response => {
// 				if (response.data.resultCode === 0) {
// 					dispatch(authThunk())
// 				}
// 			})
// 	}
// }

// export default loginReducer;