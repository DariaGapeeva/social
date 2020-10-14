import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from './redux/reduxStore.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



test('renders learn react link', () => {
	const { getByText } = render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
