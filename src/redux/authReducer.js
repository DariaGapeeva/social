const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
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





		default: return state
	}
}

export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })

export default authReducer;