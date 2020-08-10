const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_LIKE = 'ADD-LIKE';

let initialState = {
	dataPost: [
		{ id: 1, message: 'Hello, my name is Mikka', countlike: 10, url: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
		{ id: 2, message: 'I want to go to ocean', countlike: 15, url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
		{ id: 3, message: 'Hiiiiii', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' },
		// { id: 4, message: 'By', countlike: 0, url: 'https://www.seedsavers.org/site/img/seo-images/0184-purity-cosmos-flower.jpg' },
		// { id: 5, message: 'I am super star', countlike: 5, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3v_T28nnLOi9Fnq-s0lPdWeYNYw-1mMIGNw&usqp=CAU' },
		// { id: 6, message: 'I am cool', countlike: 9, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRko_ViM1KvhbApSuwBSJS1ZpgEyMdOU2qKQ&usqp=CAU' },
		// { id: 7, message: 'You are super girl', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' },
		// { id: 8, message: 'I am here. I am here', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' }

	],
	newPostText: 'Hi, Daria'

}


const profilePageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.dataPost.length + 1,
				message: state.newPostText,
				countlike: 0,
				url: 'https://www.seedsavers.org/site/img/seo-images/0184-purity-cosmos-flower.jpg'
			};
			let stateCopy = { ...state };
			stateCopy.dataPost = [...state.dataPost];
			stateCopy.dataPost.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		case ADD_LIKE: {
			let stateCopy = { ...state };
			stateCopy.dataPost = [...state.dataPost];
			stateCopy.dataPost[action.id - 1].countlike = stateCopy.dataPost[action.id - 1].countlike + 1;
			return stateCopy;
		}
		default:
			return state;

	}

}

export const addLikeActionCreator = (id) => ({ type: 'ADD-LIKE', id: id });
export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (newText) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: newText });

export default profilePageReducer;