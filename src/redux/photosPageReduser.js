import castle from '../jpg/castle.jpg';
import lavender from '../jpg/lavender.jpg';
import mountains from '../jpg/mountains.jpg';
import japan from '../jpg/Japan.jpeg';



const ADD_COMMENT = 'ADD_COMMENT';


let initialState = {
	photos: [
		{ id: 1, url: castle, title: 'Хочу туда съездить', comments: [] },
		{ id: 2, url: lavender, title: 'Я здесь была', comments: [] },
		{ id: 3, url: mountains, title: 'Это море', comments: [] },
		{ id: 4, url: japan, title: 'Это Япония', comments: [] },

	]



}


const photosPageReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COMMENT: {
			return {
				...state,
				photos: state.photos.map(photo => photo.id === action.id ? { ...photo, comments: [...photo.comments, action.newComment] } : photo)

			}
		}

		default: return state
	}


}

export const addCommentAC = (id, newComment) => ({ type: ADD_COMMENT, id, newComment })

export default photosPageReduser;