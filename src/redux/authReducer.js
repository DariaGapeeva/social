import { authApi } from './../API/api'

const SET_USER_DATA = 'SET_USER_DATA';
const POST_LOGIN_DATA = 'POST_LOGIN_DATA';
// const LOGOUT = 'LOGOUT';

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
				...action.payload,


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

		// case LOGOUT: {
		// 	return {
		// 		...state,
		// 		...action.data,
		// 		authed: false

		// 	}
		// }


		default: return state
	}
}

export const setUserData = (id, email, login, authed) => ({ type: SET_USER_DATA, payload: { id, email, login, authed } });
export const postLoginData = (formData) => ({ type: POST_LOGIN_DATA, formData });
// export const logout = (id, email, login) => ({ type: LOGOUT, data: { id, email, login } })


export const authThunk = () => {
	return (dispatch) => {
		authApi.me().then(response => {
			if (response.data.resultCode === 0) {
				let { id, email, login } = response.data.data;
				dispatch(setUserData(id, email, login, true));
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

export const logoutThunk = () => {
	return (dispatch) => {
		authApi.logOut()
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data;
					dispatch(setUserData(id, email, login, false));
				}
			})
	}
}

export default authReducer;