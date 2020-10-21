import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initializeApp } from './redux/appReduser';
import { connect } from 'react-redux'
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import FriendsContainer from './components/Friends/FriendsContainer'
import PhotosContainer from './components/Photos/PhotosContainer';





class App extends React.Component {
	componentDidMount() {

		this.props.initializeApp();
	}


	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (

			<div className='app-wrapper'>

				<HeaderContainer />

				<Navbar />
				<div className='app-wrapper__content'>
					<Switch>
						<Route exact path='/' render={() => <ProfileContainer />} />
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/users' render={() => <UsersContainer />} />
						<Route path='/friends' render={() => <FriendsContainer />} />
						<Route path='/news' render={() => <News />} />
						<Route path='/photos' render={() => <PhotosContainer />} />
						<Route path='/settings' render={() => <Settings />} />
						<Route path='/login' render={() => <LoginContainer />} />
					</Switch>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}



export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);
