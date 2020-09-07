import { authApi } from './../API/api'

const SET_USER_DATA = 'SET_USER_DATA';
const POST_LOGIN_DATA = 'POST_LOGIN_DATA';
const LOGIN_OUT = 'LOGIN_OUT';

const initialState = {
	dataLogin: {
		email: '',
		password: '',
		rememberMe: ''
	},

	id: null,
	email: null,
	login: null,
	authed: false,
	fetched: false

}



const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				authed: true

			}

		case POST_LOGIN_DATA: {
			return {
				...state,
				// email: action.formData.email,
				// password: action.formData.password,
				// rememberMe: action.formData.rememberMe
				dataLogin: action.formData
			}
		}

		case LOGIN_OUT: {
			return {
				...state,
				...action.data,
				authed: false

			}
		}


		default: return state
	}
}

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const postLoginData = (formData) => ({ type: POST_LOGIN_DATA, formData });
export const loginOut = (id, email, login) => ({ type: LOGIN_OUT, data: { id, email, login } })


export const authThunk = () => {
	return (dispatch) => {
		authApi.me().then(response => {
			if (response.data.resultCode === 0) {
				let { id, email, login } = response.data.data;
				dispatch(setUserData(id, email, login));
			}

		})


	}

}

export const loginThunk = (email, password, rememberMe) => {
	return (dispatch) => {
		authApi.login(email, password, rememberMe)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(authThunk())
				}
			})
	}
}

export const loginOutThunk = () => {
	return (dispatch) => {
		authApi.loginOut()
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data;
					dispatch(loginOut(id, email, login))
				}
			})
	}
}

export default authReducer;