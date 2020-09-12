import React from 'react';
import styles from '../Users/Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../jpg/1.jpg';


const Friends = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pageCountArray = [];
	for (let i = 1; i <= pageCount; i++) {
		pageCountArray.push(i);
	}

	return (
		<div>

			<div className={styles.box}>
				{pageCountArray.map(element => {
					return <span key={element} onClick={(event) => { props.setNewCurrentPage(element) }} className={element === props.currentPage ? styles.selectedPage : ''}>{element}</span>
				})}
			</div>
			{props.followedUsers.map(user => <div key={user.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + user.id}><img src={user.photos.small || userPhoto} /></NavLink>
					</div>
					<div>

						{user.followed ?

							<button disabled={props.followingInProgress.includes(user.id)}
								onClick={() => {
									props.unfollowThunk(user.id)
								}}>Unfollowed</button> :
							<button disabled={props.followingInProgress.includes(user.id)}
								onClick={() => {
									props.followThunk(user.id)
								}}>Followed</button>}

					</div>
				</span>
				<span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>
							{/* "{user.location.city}" */}
						</div>
						<div>
							{/* "{user.location.country}" */}
						</div>
					</span>
				</span>
			</div>)
			}
		</div>
	)
}




export default Friends;