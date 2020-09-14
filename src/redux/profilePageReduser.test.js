

import profilePageReducer, { addPost, deletePost } from './profilePageReducer'




test('length of dataPost should be increment', () => {
	let action = addPost("Hellow world");

	let initialState = {
		dataPost: [
			{ id: 1, message: 'Hello, my name is Mikka', countlike: 10, url: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 2, message: 'I want to go to ocean', countlike: 15, url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 3, message: 'Hiiiiii', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' },

		],

	};
	let newState = profilePageReducer(initialState, action);

	expect(newState.dataPost.length).toBe(4);
	expect(newState.dataPost[3].message).toBe("Hellow world");


});

test('message should be correct', () => {
	let action = addPost("Hellow world");

	let initialState = {
		dataPost: [
			{ id: 1, message: 'Hello, my name is Mikka', countlike: 10, url: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 2, message: 'I want to go to ocean', countlike: 15, url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 3, message: 'Hiiiiii', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' },

		],

	};
	let newState = profilePageReducer(initialState, action);

	expect(newState.dataPost[3].message).toBe("Hellow world");


});



test('length after deleting should be decrement', () => {
	let action = deletePost(1);

	let initialState = {
		dataPost: [
			{ id: 1, message: 'Hello, my name is Mikka', countlike: 10, url: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 2, message: 'I want to go to ocean', countlike: 15, url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 3, message: 'Hiiiiii', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' },

		],

	};
	let newState = profilePageReducer(initialState, action);

	expect(newState.dataPost.length).toBe(2);


});


test('length after deleting should not be decrement, if id is incorrect', () => {
	let action = deletePost(1000);

	let initialState = {
		dataPost: [
			{ id: 1, message: 'Hello, my name is Mikka', countlike: 10, url: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 2, message: 'I want to go to ocean', countlike: 15, url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
			{ id: 3, message: 'Hiiiiii', countlike: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Magnolia_sieboldii_flower_1.jpg' },

		],

	};
	let newState = profilePageReducer(initialState, action);

	expect(newState.dataPost.length).toBe(3);


});