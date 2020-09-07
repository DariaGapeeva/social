import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return <header className={styles.header}>
		<img src="https://abali.ru/wp-content/uploads/2017/10/smeshariki-cvet.png"></img>
		<div>
			<div className={styles.header__login}>
				{props.authed ? props.login :
					<NavLink to={'/login'} className={styles.header__link}>login</NavLink>}
			</div>
			<div > <NavLink to={'/login'} className={styles.header__link} onClick={() => props.loginOutThunk()}>login out</NavLink> </div>
		</div>
	</header>
}

export default Header;