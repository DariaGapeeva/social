const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		// { id: 1, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: false, fullName: 'Daria', status: 'I am a superstar', location: { country: 'Russia', city: 'Novosibirsk' } },
		// { id: 2, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: true, fullName: 'Misha', status: 'I am here', location: { country: 'Russia', city: 'Moscow' } },
		// { id: 3, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: false, fullName: 'Lada', status: 'I am from Mars', location: { country: 'Russia', city: 'Novosibirsk' } },
		// { id: 4, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: true, fullName: 'Mila', status: 'Hi', location: { country: 'Russia', city: 'Novosibirsk' } },
		// { id: 5, photoUrl: 'https://vignette.wikia.nocookie.net/fabulous-patrol/images/e/ed/%D0%90%D0%BB%D1%91%D0%BD%D0%BA%D0%B0.png/revision/latest/top-crop/width/360/height/450?cb=20200122132618&path-prefix=ru', followed: false, fullName: 'Anton', status: 'I am just your dream', location: { country: 'Russia', city: 'Novosibirsk' } },
	]


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
			return { ...state, users: [...state.users, ...action.users] }
		}
		default:
			return state;
	}
}

export const followAC = (id) => ({ type: FOLLOW, id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersPageReducer;