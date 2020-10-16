import castle from '../jpg/castle.jpg';
import lavender from '../jpg/lavender.jpg';
import mountains from '../jpg/mountains.jpg';
import japan from '../jpg/Japan.jpeg';



const ADD_COMMENT = 'ADD_COMMENT';
const ADD_COUNT_HEART = 'ADD_COUNT_HEART';


let initialState = {
	photos: [
		{ id: 1, url: castle, title: 'Хочу туда съездить', comments: [], countHeart: 0 },
		{ id: 2, url: lavender, title: 'Я здесь была', comments: [], countHeart: 0 },
		{ id: 3, url: mountains, title: 'Это горное озеро', comments: [], countHeart: 0 },
		{ id: 4, url: japan, title: 'Это Япония', comments: [], countHeart: 0 },

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
		case ADD_COUNT_HEART: {
			return {
				...state,
				photos: state.photos.map(photo => photo.id === action.id ? { ...photo, countHeart: photo.countHeart + 1 } : photo)
			}
		}

		default: return state
	}


}

export const addCommentAC = (id, newComment) => ({ type: ADD_COMMENT, id, newComment });
export const addCountHeartAC = (id) => ({ type: ADD_COUNT_HEART, id });

export default photosPageReduser;