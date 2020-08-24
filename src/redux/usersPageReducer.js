const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_USER = 'SET-TOAL-COUNT-USER';
const TOOGLE_FETCHED = 'TOGGLE-FETCHED'

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 5,
	currentPage: 1,
	fetched: false
}


const usersPageReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(users => {
					if (users.id === action.id) {
						return {
							...users,
							followed: true
						}
					}
					return users;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(users => {
					if (users.id === action.id) {
						return {
							...users,
							followed: false
						}
					}
					return users;
				})
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_COUNT_USER: {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case TOOGLE_FETCHED: {
			return { ...state, fetched: action.fetched }
		}
		default:
			return state;
	}
}

export const follow = (id) => ({ type: FOLLOW, id });
export const unfollow = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountUser = (totalCount) => ({ type: SET_TOTAL_COUNT_USER, totalCount });
export const toggleFetched = (fetched) => ({ type: TOOGLE_FETCHED, fetched })

export default usersPageReducer;