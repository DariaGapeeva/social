import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';





const App = (props) => {

	return (
		// <MyContext.Provider value="props.store">
		<div className='app-wrapper'>
			<Header />
			<Navbar store={props.store} />
			<div className='app-wrapper__content'>
				<Route path='/dialogs' render={() => <DialogsContainer

					// state={props.state.dialogsPage}
					// dispatch={props.dispatch}
					store={props.store} />} />
				<Route path='/profile' render={() => <Profile
					// state={props.state.profilePage}
					// dispatch={props.dispatch}
					store={props.store} />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</div>
		// </MyContext.Provider>
	)
}

export default App;
