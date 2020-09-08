import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return <header className={styles.header}>
		<img src="https://abali.ru/wp-content/uploads/2017/10/smeshariki-cvet.png"></img>
		<div className={styles.header__box}>
			<div className={styles.header__login}>
				{props.authed
					? <div className={styles.header__buttons}>
						<div className={styles.header__item}>{props.login} </div>
						<button className={styles.header__item} onClick={() => props.logoutThunk()}>logout</button>
					</div>
					: <NavLink to={'/login'} className={styles.header__item}>login</NavLink>}
			</div>
			{/* <div > <NavLink to={'/login'} className={styles.header__link} onClick={() => props.logoutThunk()}>logout</NavLink> </div> */}
		</div>
	</header>
}

export default Header;