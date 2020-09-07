import { actionTypes } from "redux-form";

const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
	dataPerson: [
		{ id: 1, name: 'Dmitrii', url: 'https://ozornik.net/wp-content/uploads/2017/12/Obeshhanie-Smeshariki.jpg' },
		{ id: 2, name: 'Anton', url: 'https://i.pinimg.com/originals/de/53/07/de53079f087709fd7cc0e8e3300f7eed.png' },
		{ id: 3, name: 'Mikka', url: 'https://ozornik.net/wp-content/uploads/2017/11/Karych.jpg' },
		{ id: 4, name: 'Alice', url: 'https://vignette.wikia.nocookie.net/fanonsmesh/images/0/04/%D0%9D%D1%8E%D1%88%D0%B0_%D0%B2_%D1%88%D0%BB%D1%8F%D0%BF%D0%B5.jpg/revision/latest/top-crop/width/360/height/450?cb=20180113184817&path-prefix=ru' },
		{ id: 5, name: 'Valia', url: 'https://static.detmir.st/media_out/692/023/3023692/1500/0.jpg' },
		{ id: 6, name: 'Masha', url: 'https://avatars.mds.yandex.net/get-pdb/1773429/2923cda0-0465-483c-87c0-e77ee4df378c/s600' },
		{ id: 7, name: 'Sasha', url: 'https://c7.hotpng.com/preview/657/393/319/%D0%81%D0%B6%D0%B8%D0%BA-krosh-smeshariki-barash-%D1%81%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.jpg' },
		{ id: 8, name: 'Daria', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0MUNgyDVKwPHnVtH9HecpvI86OBwNgGQbOQ&usqp=CAU' },
		{ id: 9, name: 'Roman', url: 'https://vignette.wikia.nocookie.net/smesharikiarhives/images/0/03/%D0%9F%D0%B8%D0%BD.jpg/revision/latest/scale-to-width-down/340?cb=20141215134807&path-prefix=ru' }
	],
	dataMessage: [
		{ id: 1, message: 'Смеша́рики — российский мультипликационный сериал, ориентированный на широкую аудиторию. Создан в рамках образовательного проекта «Мир без насилия» и производится при поддержке Министерства культуры[4].', user: 'user' },
		{ id: 2, message: 'My little pony plays in the garden', user: 'me' },
		{ id: 3, message: 'I want to see my grandmother', user: 'me' },
		{ id: 4, message: 'Do you live in the village?', user: 'me' },
		{ id: 5, message: 'I am going to go to swim', user: 'user' },
		// { id: 5, message: 'I am going to go to swim', user: 'user' },
		// { id: 6, message: 'I will be back', user: 'me' },
		// { id: 7, message: 'Very long way for you, my dear', user: 'user' },
		// { id: 8, message: 'I am very glad to see you', user: 'me' },
		// { id: 9, message: 'Lotus is very beatiful flower', user: 'user' }
	],

}

const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: state.dataMessage.length + 1,
				message: action.message,
				user: 'me'
			}
			return {
				...state,
				dataMessage: [...state.dataMessage, newMessage],
			};
		}

		default:
			return state
	}


}

export const addMessage = (message) => ({ type: 'ADD-MESSAGE', message });

export default dialogsPageReducer;