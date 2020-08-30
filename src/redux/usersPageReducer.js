import { usersApi, followApi } from './../API/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_USER = 'SET-TOAL-COUNT-USER';
const TOOGLE_FETCHED = 'TOGGLE-FETCHED';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 5,
	currentPage: 1,
	fetched: false,
	followingInProgress: []
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
		case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
			return {
				...state,
				followingInProgress: action.fetched ?
					[...state.followingInProgress, action.id] :
					state.followingInProgress.filter(id => id != action.id)
			}
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
export const toggleFetched = (fetched) => ({ type: TOOGLE_FETCHED, fetched });
export const toggleFollowingProgress = (fetched, id) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, fetched, id });

export const getUsersThunkcreator = (pageSize, currentPage) => {
	return (dispatch) => {
		dispatch(toggleFetched(true));

		usersApi.getUsers(pageSize, currentPage)
			.then(data => {

				dispatch(toggleFetched(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalCountUser(data.totalCount));
			})
	}

}
export const getUsersPageThunkcreator = (pageSize, page) => {
	return (dispatch) => {
		dispatch(setCurrentPage(page));
		dispatch(toggleFetched(true));
		usersApi.getUsers(pageSize, page)
			.then(data => {
				dispatch(toggleFetched(false));
				dispatch(setUsers(data.items));
			})



	}
}

export const unfollowThunkCreator = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, id));
		followApi.unfollow(id).then((data) => {
			if (data.resultCode === 0) {
				dispatch(unfollow(id));
			};
			dispatch(toggleFollowingProgress(false, id));
		})
	}
}

export const followThunkCreator = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, id));
		followApi.follow(id).then((data) => {
			if (data.resultCode === 0) {
				dispatch(follow(id))
			};
			dispatch(toggleFollowingProgress(false, id));
		})

	}
}




export default usersPageReducer;